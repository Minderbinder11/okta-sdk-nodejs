const _ = require('lodash');
const js = module.exports;

/**
 * This file is used by the @okta/openapi generator.  It defines language-specific
 * post-processing of the JSON spec, as well as handebars helpers.  This file is meant
 * to give you control over the data that handlebars uses when processing your templates
 */

js.process = (spec, handlebars) => {

  // A map of operation Id's do their definition, so that
  // we can reference them when building out methods for x-okta-links
  const operationIdMap = {};

  // Collect all the operations
  spec.easyOperations = [];
  for (let pathName in spec.paths) {
    const path = spec.paths[pathName];
    for (let methodName in path) {
      const method = path[methodName];

      // List of query params definitions for this method
      const easyQueryParams = method.parameters.filter(param => param.in === 'query');

      // List of positional path arguments for this method
      const arguments = method.parameters.filter(param => param.in === 'path');

      // Determine the return type
      const easySuccessSchema = _.get(method, 'responses["200"].schema');
      if (easySuccessSchema) {
        if (easySuccessSchema.items && easySuccessSchema.items['$ref']) {
          easySuccessSchema.items.type = _.last(easySuccessSchema.items['$ref'].split('/'));
        } else if (easySuccessSchema['$ref']) {
          easySuccessSchema.type = _.last(easySuccessSchema['$ref'].split('/'));
        }
      }
      if (pathName.match(/v1\/users/)) {
        // debugger
      }

      const operation = Object.assign({
        easyQueryParams,
        arguments,
        easySuccessSchema,
        path: pathName,
        method: methodName
      }, method);
      operationIdMap[method.operationId] = operation;
      spec.easyOperations.push(operation);
    }
  }

  // make models easier to loop through
  spec.easyModels = Object.entries(spec.definitions)
    .map(([modelName, model]) => {
      model.className = modelName;
      model.easyLinks = model['x-okta-links'];
      if (model.easyLinks) {
        model.easyLinks.forEach(link => {
          link.operation = operationIdMap[link.operationId];
        });
      }
      return model;
    });

  const templates = [];

  templates.push({
    src: 'api-client.js.hbs',
    dest: 'src/api-client.js',
    context: spec
  });

  // add all the models
  for (let model of spec.easyModels) {
    templates.push({
      src: 'model.js.hbs',
      dest: `src/models/${model.className}.js`,
      context: model
    });
  }

  templates.push({
    src: 'model.index.js.hbs',
    dest: 'src/models/index.js',
    context: spec
  });

  // Add helpers
  const paramMatcher = /{(.*?)}/g;
  handlebars.registerHelper('replacePathParams', (path) => {
    // Everywhere there's a {id}, replace it with {opts.id}
    if (paramMatcher.test(path)) {
      const matches = path.match(paramMatcher);
      for (let match of matches) {
        path = path.replace(match, `\${${match.slice(1)}`);
      }
    }
    return path;
  });

  handlebars.registerHelper('argumentBuilder', (operation) => {

    const args = [];

    operation.arguments.map((arg) => args.push(arg.name));

    if (operation.method === 'post') {
      args.push('postBody');
    }

    if (operation.easyQueryParams.length) {
      args.push('queryParameters');
    }

    return args.join(', ');
  });

  handlebars.registerHelper('linkedOperationArgumentBuilder', (linkDefinition, operation) => {

    const args = [];

    const sourceProperties = linkDefinition.arguments.map(arg => arg.src);

    if(!operation){
      console.log(linkDefinition)
    }

    operation.arguments.map((arg) => {
      if (sourceProperties.indexOf(arg.name) === -1) {
        args.push(arg.name)
      }
    });

    if (operation.method === 'post') {
      args.push('postBody');
    }

    if (operation.easyQueryParams.length) {
      args.push('queryParameters');
    }

    return args.join(', ');
  });

  handlebars.registerHelper('linkedOperationProxyArgumentsBuilder', (linkDefinition, operation) => {

    const args = [];

    const sourceProperties = linkDefinition.arguments.map(arg => arg.src);

    operation.arguments.map((arg) => {
      if (sourceProperties.indexOf(arg.name) > -1) {
        args.push('this.' + arg.name);
      } else {
        args.push(arg.name)
      }
    });

    if (operation.method === 'post') {
      args.push('postBody');
    }

    if (operation.easyQueryParams.length) {
      args.push('queryParameters');
    }

    return args.join(', ');
  });

  handlebars.registerHelper('jsdocBuilder', (operation) => {
    const lines = ['*'];

    if (operation.arguments.length) {
      operation.arguments.map(argument => {
        return `   * @param ${argument.name} {String}`;
      }).forEach(line => lines.push(line));
    }

    if (operation.easyQueryParams.length) {
      lines.push('   * @param {Object} queryParams Map of query parameters to add to this request');
      operation.easyQueryParams.map((param) => {
        return `   * @param {String} [queryParams.${param.name}]`;
      }).forEach(line => lines.push(line));
    }
    lines.push('   * @description');

    if (operation.description) {
      lines.push(`   * ${operation.description}`);
    }

    if (!operation.easyQueryParams.length) {
      lines.push('   * This endpoint does not have any query parameters at this time');
    }
    return lines.join('\n');
  });

  return templates;
};