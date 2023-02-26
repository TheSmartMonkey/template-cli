export function slsExpressPrompts() {
  return [
    {
      type: 'list',
      name: 'action',
      message: 'Choose an action',
      choices: ['option1', 'option2'],
    },
  ];
}
