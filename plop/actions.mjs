export function plopActions(data) {
  console.log(data);
  return [...plopGenerator()];
}

function plopGenerator() {
  return [
    {
      type: 'add',
      path: '{{name}}/templates/exemple.ts.hbs',
    },
    {
      type: 'add',
      path: '{{name}}/actions.mjs',
      templateFile: `plop/templates/actions.mjs.hbs`,
    },
    {
      type: 'add',
      path: '{{name}}/generator.mjs',
      templateFile: `plop/templates/generator.mjs.hbs`,
    },
    {
      type: 'add',
      path: '{{name}}/prompts.mjs',
      templateFile: `plop/templates/prompts.mjs.hbs`,
    },
    {
      type: 'add',
      path: '{{name}}/templates.mjs',
      templateFile: `plop/templates/templates.mjs.hbs`,
    },
  ];
}
