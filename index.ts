import { App } from "vue";
export {
  textDefaultProps,
  textStylePropNames,
  imageDefaultProps,
  imageStylePropsNames,
  shapeDefaultProps,
  shapeStylePropsNames,
} from "./src/defaultProps";

export type {
  textComponentProps,
  imageComponentProps,
  shapeComponentProps,
  allComponentProps,
} from "./src/defaultProps";

import LText from "./src/components/LText";
import LImage from "./src/components/LImage";
import LShape from "./src/components/LShape";

const components = [LText, LImage, LShape];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { LText, LImage, LShape, install };
export default {
  install,
};
