"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicImport = void 0;

const isCommonJS =
  typeof module !== "undefined" &&
  module !== null &&
  module.constructor &&
  module.constructor.name === "Module";

const dynamicImport = (path) => {
  if (isCommonJS) return import(path);
  return Promise.resolve(require(path));
};

exports.dynamicImport = dynamicImport;
