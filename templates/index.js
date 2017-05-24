const js = module.exports;

/**
 * This file is used by the @okta/openapi generator.  It defines language-specific
 * post-processing of the JSON spec, as well as handebars helpers.  This file is meant
 * to give you control over the data that handlebars uses when processing your templates
 */

js.process = ({spec, operations, models, handlebars}) => {

  // A map of operation Id's do their definition, so that
  // we can reference them when building out methods for x-okta-links

  // Collect all the operations

  const templates = [];

  templates.push({
    src: 'api-client.js.hbs',
    dest: 'src/api-client.js',
    context: {operations}
  });

  // add all the models
  for (let model of models) {
    templates.push({
      src: 'model.js.hbs',
      dest: `src/models/${model.modelName}.js`,
      context: model
    });
  }

  templates.push({
    src: 'model.index.js.hbs',
    dest: 'src/models/index.js',
    context: { models }
  });

  // Add helpers
  const paramMatcher = /{(.*?)}/g;
  handlebars.registerHelper('replacePathParams', (path) => {
    // Everywhere there's a {id}, replace it with {opts.id}
    if (paramMatcher.test(path)) {
      const matches = path.match(paramMatcher);
      for (let match of matches) {
        const param = match.slice(1);
        path = path.replace(match, `\${${param}`);
      }
    }
    return path;
  });

  handlebars.registerHelper('argumentBuilder', (operation) => {

    const args = [];

    operation.pathParams.map((arg) => args.push(arg.name));

    if (operation.method === 'post') {
      args.push('postBody');
    }

    if (operation.queryParams.length) {
      args.push('queryParameters');
    }

    return args.join(', ');
  });

  handlebars.registerHelper('modelMethodPublicArgumentBuilder', (method) => {

    const args = [];

    if (method.operation.method === 'post') {
      args.push('postBody');
    }

    if (method.operation.queryParams.length) {
      args.push('queryParameters');
    }

    return args.join(', ');
  });

  handlebars.registerHelper('modelMethodProxyArgumentBuilder', (method) => {

    const args = [];

    method.arguments.forEach((argument) => {
      method.operation.pathParams.forEach(param => {
        if (param.name === argument.dest) {
          args.push('this.' + argument.src);
        }
      });
    });

    if (method.operation.method === 'post') {
      args.push('postBody');
    }

    if (method.operation.queryParams.length) {
      args.push('queryParameters');
    }

    return args.join(', ');
  });

  handlebars.registerHelper('jsdocBuilder', (operation) => {
    const lines = ['*'];

    if (operation.pathParams.length) {
      operation.pathParams.map(argument => {
        return `   * @param ${argument.name} {String}`;
      }).forEach(line => lines.push(line));
    }

    if (operation.queryParams.length) {
      lines.push('   * @param {Object} queryParams Map of query parameters to add to this request');
      operation.queryParams.map((param) => {
        return `   * @param {String} [queryParams.${param.name}]`;
      }).forEach(line => lines.push(line));
    }
    lines.push('   * @description');

    if (operation.description) {
      lines.push(`   * ${operation.description}`);
    }

    if (!operation.queryParams.length) {
      lines.push('   * This endpoint does not have any query parameters at this time');
    }
    return lines.join('\n');
  });

  return templates;
};