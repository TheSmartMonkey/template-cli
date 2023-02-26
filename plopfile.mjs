import { plopGenerator } from './plop/generator.mjs';
import { serverlessGenerator } from './serverless/generator.mjs';
import { slsExpressGenerator } from './slsExpress/generator.mjs';

export default (plop) => {
  serverlessGenerator(plop);
  slsExpressGenerator(plop);
  plopGenerator(plop);
};
