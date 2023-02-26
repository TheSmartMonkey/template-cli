import { slsExpressTempates } from './templates.mjs';

export function slsExpressActions(data) {
  console.log(data);
  return [...lambdaFunctionApiEndpoint(data)];
}

function lambdaFunctionApiEndpoint(data) {
  if (data.template.includes(slsExpressTempates.endpoint)) {
    return [
      {
        type: 'add',
        path: 'src/functions/{{name}}/handler.integration.test.ts',
        templateFile: `slsExpress/templates/${slsExpressTempates.endpoint}/handler.integration.test.ts.hbs`,
      },
      {
        type: 'add',
        path: 'src/functions/{{name}}/handler.test.ts',
        templateFile: `slsExpress/templates/${slsExpressTempates.endpoint}/handler.test.ts.hbs`,
      },
      {
        type: 'add',
        path: 'src/functions/{{name}}/handler.ts',
        templateFile: `slsExpress/templates/${slsExpressTempates.endpoint}/handler.ts.hbs`,
      },
      {
        type: 'add',
        path: 'src/functions/{{name}}/index.ts',
        templateFile: `slsExpress/templates/${slsExpressTempates.endpoint}/index.ts.hbs`,
      },
      {
        type: 'add',
        path: 'src/functions/{{name}}/openapi.ts',
        templateFile: `slsExpress/templates/${slsExpressTempates.endpoint}/openapi.ts.hbs`,
      },
    ];
  }
  return [];
}
