export default (plop) => {
  plop.setGenerator('controller', {
    prompts: [
      {
        type: 'list',
        name: 'action',
        message: 'Choose an action',
        choices: ['option1', 'option2'],
      }
    ],
    actions: (data) => {
      console.log(data.action);
      return [
        {
          type: 'add',
          path: 'src/functions/{{action}}/handler.ts',
          templateFile: 'templates/handler.hbs',
        },
      ];
    },
  });
};
