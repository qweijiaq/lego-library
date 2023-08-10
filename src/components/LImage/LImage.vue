<template>
  <img
    :style="styleProps"
    class="l-image-component"
    @click.prevent="handleClick"
    :src="src"
  />
</template>
<script lang="ts" setup>
import useComponentCommon from "../../hooks/useComponentCommon";
import {
  transformToComponentProps,
  imageDefaultProps,
  imageStylePropsNames,
} from "../../defaultProps";

const defaultProps = transformToComponentProps(imageDefaultProps);

const props = defaultProps({
  ...defaultProps,
});

const { styleProps, handleClick } = useComponentCommon(
  props,
  imageStylePropsNames
);
</script>

<style scoped>
.l-image-component {
  max-width: 100%;
  position: relative !important;
}
</style>
