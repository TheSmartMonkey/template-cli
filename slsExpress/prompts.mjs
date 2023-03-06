import { slsExpressTempates } from './templates.mjs';

export function slsExpressPrompts() {
  return [
    {
      type: 'list',
      name: 'template',
      message: 'Choose a template',
      choices: Object.values(slsExpressTempates),
    },
    {
      when(context) {
        return context.template.includes(slsExpressTempates.endpoint);
      },
      type: 'input',
      name: 'name',
      message: 'Choose a lambda function name (in camelcase)',
    },
  ];
}
