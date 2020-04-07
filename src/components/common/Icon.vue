<template>
  <i :class="className" :style="style"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    brand: Boolean,
    size: Number,
    color: String,
  },
  computed: {
    className() {
      return `${this.brand ? 'fab' : 'fas'} fa-${this.name}`;
    },
    style() {
      const style = {};
      if (this.size != null) {
        style.fontSize = this.size + 'px';
      }

      if (this.color != null) {
        style.color = this.color;
      }

      return style;
    },
  },
};
</script>
