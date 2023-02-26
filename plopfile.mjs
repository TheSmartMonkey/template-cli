import { plopGenerator } from './plop/generator.mjs';
import { slsExpressGenerator } from './slsExpress/generator.mjs';

export default (plop) => {
  slsExpressGenerator(plop);
  plopGenerator(plop);
};
