"use strict";

/**
 * Loops over each element from querySelector
 * @param {Node} context
 * @param {String} selector
 * @param {Function} fn
 */
const eachElement = (context, selector, fn) => Array.from(context.querySelectorAll(selector)).forEach(fn);

export default eachElement;
