TypeScript immutablejs ".map" Demo
==================================

Immutable 3.x中的typing定义支持很差，基本上不能用：

- `List.map`返回的是`Iterable<number, V>`类型
- `List.map(item -> ...)`居然有可能是undefined

目前只能使用4.x的RC版，解决了这些问题。

```
npm install
npm run demo
```
