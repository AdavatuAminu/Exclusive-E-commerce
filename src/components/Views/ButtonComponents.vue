<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "Button",
    },
    bgColor: {
      type: String,
      default: "#DB4444",
    },
    textColor: {
      type: String,
      default: "#FFFFFF",
    },
    border: {
      type: String,
      default: "none",
    },
    width: {
      type: String,
      default: "150px",
    },
    height: {
      type: String,
      default: "56px",
    },
  },
  emits: ["click"],
};
</script>

<template>
  <button
    @click="$emit('click')"
    class="rounded-md font-bold transition-all duration-200"
    :style="{
      backgroundColor: bgColor,
      color: textColor,
      border: border,
      width: width,
      height: height,
      fontSize: '18px',
    }"
  >
    <slot>{{ label }}</slot>
  </button>
</template>
