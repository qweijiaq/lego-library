import basicConfig, { name, file } from "./rollup.config.js";
export default {
  ...basicConfig,
  output: {
    name: "LegoComponents",
    file: file("umd"),
    format: "umd",
    globals: {
      vue: "Vue",
      "lodash-es": "_",
    },
    exports: "named",
  },
};
