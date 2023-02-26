import { slsExpressTempates } from './templates.mjs';

export function slsExpressActions(data) {
  console.log(data);
  return [...lambdaFunctionApiEndpoint(data)];
}

function lambdaFunctionApiEndpoint(data) {
  if (data.template.includes(slsExpressTempates.endpoint)) {
    return [
      {
        type: 'addMany',
        destination: 'src/functions/{{name}}',
        base: `slsExpress/templates/${slsExpressTempates.endpoint}/`,
        templateFiles: `slsExpress/templates/${slsExpressTempates.endpoint}/**/*`,
      },
    ];
  }
  return [];
}
