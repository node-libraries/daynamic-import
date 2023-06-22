export declare const dynamicImport: <T extends typeof import(unknown)>(
  path: string
) => Promise<T>;
