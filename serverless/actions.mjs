import { serverlessTempates } from './templates.mjs';

export function serverlessActions(data) {
  console.log(data);
  return [...createLambdaFunctionApiEndpoint(data), ...createHandlerTestFile(data), ...createHandlerIntegrationTestFile(data)];
}

function createLambdaFunctionApiEndpoint(data) {
  if (data.template.includes(serverlessTempates.endpoint)) {
    return [
      {
        type: 'addMany',
        destination: 'src/functions/{{name}}',
        base: `serverless/templates/${serverlessTempates.endpoint}/`,
        templateFiles: `serverless/templates/${serverlessTempates.endpoint}/**/*`,
      },
    ];
  }
  return [];
}

function createHandlerTestFile(data) {
  if (data.template.includes(serverlessTempates.handlerTest)) {
    return [
      {
        type: 'add',
        path: 'handler.test.ts',
        templateFile: `serverless/templates/${serverlessTempates.handlerTest}/handler.test.ts.hbs`,
      },
    ];
  }
  return [];
}

function createHandlerIntegrationTestFile(data) {
  if (data.template.includes(serverlessTempates.handlerIntegrationTest)) {
    return [
      {
        type: 'add',
        path: 'handler.integration.test.ts',
        templateFile: `serverless/templates/${serverlessTempates.handlerIntegrationTest}/handler.integration.test.ts.hbs`,
      },
    ];
  }
  return [];
}
