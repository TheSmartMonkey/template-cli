import { plopGenerator } from './plop/generator.mjs';
import { serverlessGenerator } from './serverless/generator.mjs';
import { slsExpressGenerator } from './slsExpress/generator.mjs';
import { toKebabCase, toTitleCase } from './helpers.mjs';

export default (plop) => {
  // Helpers
  plop.setHelper('titlecase', (text) => toTitleCase(text));
  plop.setHelper('kebabcase', (text) => toKebabCase(text));

  // Generators
  serverlessGenerator(plop);
  slsExpressGenerator(plop);
  plopGenerator(plop);
};
