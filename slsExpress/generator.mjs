import { generators } from '../generators.mjs';
import { slsExpressActions } from './actions.mjs';
import { slsExpressPrompts } from './prompts.mjs';

export function slsExpressGenerator(plop) {
  plop.setGenerator(generators.slsExpress, {
    prompts: slsExpressPrompts(),
    actions: (data) => {
      console.log(data.action);
      return slsExpressActions();
    },
  });
}
