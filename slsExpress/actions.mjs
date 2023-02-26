export function slsExpressActions() {
  return [
    {
      type: 'add',
      path: 'src/functions/{{action}}/handler.ts',
      templateFile: 'slsExpress/templates/lambda-function/handler.hbs',
    },
  ];
}
