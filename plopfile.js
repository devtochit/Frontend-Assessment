import componentGenerator from './generators/component/index.js';

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
export default (plop) => {
  plop.setGenerator('component', componentGenerator);
};
