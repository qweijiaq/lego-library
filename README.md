# lego-library

这是一个低代码项目对应的组件库，该项目采用 Vue 3.2（setup 语法糖）+ Vite + TypeScript + Antd-vue 开发。

## 使用方式

npm 安装：

```sh
npm install lego-library
```

全局导入：

```js
import LegoLibrary from "lego-library";
import "lego-library/build/style.css";
app.use(LegoLibrary);
```

### 按需引入

```vue
// 实例
<template>
  <l-text />
</template>

<script setup>
import { LText } from "lego-library";
</script>
```
