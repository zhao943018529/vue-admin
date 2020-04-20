<template>
  <div class="popup-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Popup',
  props: {
    getAlignElement: Function,
    isExpanded: Boolean,
  },
  mounted() {
    document.body.appendChild(this.$el);
    this.align();
  },
  methods: {
    align() {
      const alignElement = this.getAlignElement();
      const alignRect = alignElement.getBoundingClientRect();
      const current = this.$el;
      // const cRect = current.getBoundingClientRect();
      current.style.top = alignRect.top + 'px';
      current.style.left = alignRect.left + 'px';
    },
  },
};
</script>
<style lang="scss">
.popup-container {
  position: absolute;
}
</style>
