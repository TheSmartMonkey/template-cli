import { serverlessTempates } from './templates.mjs';

export function serverlessActions(data) {
  console.log(data);
  return [...lambdaFunctionApiEndpoint(data)];
}

function lambdaFunctionApiEndpoint(data) {
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
