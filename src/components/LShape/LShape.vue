<template>
  <div
    :style="styleProps"
    class="l-shape-component"
    @click.prevent="handleClick"
  ></div>
</template>
<script lang="ts" setup>
import useComponentCommon from "../../hooks/useComponentCommon";
import {
  transformToComponentProps,
  shapeDefaultProps,
  shapeStylePropsNames,
} from "../../defaultProps";

const defaultProps = transformToComponentProps(shapeDefaultProps);

const props = defaultProps({
  ...defaultProps,
});

const { styleProps, handleClick } = useComponentCommon(
  props,
  shapeStylePropsNames
);
</script>
