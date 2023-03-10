import { serverlessTempates } from './templates.mjs';

export function serverlessPrompts() {
  return [
    {
      type: 'list',
      name: 'template',
      message: 'Choose a template',
      choices: Object.values(serverlessTempates),
    },
    {
      when(context) {
        return context.template.includes(serverlessTempates.endpoint);
      },
      type: 'input',
      name: 'name',
      message: 'Choose a lambda function name',
    },
    {
      when(context) {
        return context.template.includes(serverlessTempates.handlerTest);
      },
      type: 'input',
      name: 'name',
      message: 'Choose test file name',
    },
    {
      when(context) {
        return context.template.includes(serverlessTempates.handlerIntegrationTest);
      },
      type: 'input',
      name: 'name',
      message: 'Choose integration test file name',
    },
  ];
}
