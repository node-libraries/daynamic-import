# @node-libraries/dynamic-import

Avoid malfunction of DynamicImport on `ts-node` and call ES Modules from CommonJS

## usage

```typescript
import {dynamicImport} from "@node-libraries/dynamic-import";

const async main() => {
  const { func } = await dynamicImport("any-package");
}
```
