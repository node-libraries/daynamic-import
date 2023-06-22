"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicImport = void 0;
const dynamicImport = (path) => {
  return import(path);
};
exports.dynamicImport = dynamicImport;
