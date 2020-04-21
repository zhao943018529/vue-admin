<template>
  <transition name="popup">
    <div class="popup-container" v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Popup',
  props: {
    visible: Boolean,
    getAlignElement: Function,
    isExpanded: Boolean,
  },
  mounted() {
    document.body.appendChild(this.$el);
    // this.align();
  },
  methods: {
    align() {
      const alignElement = this.getAlignElement();
      const alignRect = alignElement.getBoundingClientRect();
      const current = this.$el;
      // const cRect = current.getBoundingClientRect();
      current.style.top = alignRect.top + 'px';
      current.style.left = alignRect.right + 'px';
    },
  },
  watch: {
    visible(val) {
      if (val) {
        this.$nextTick(() => {
          this.align();
        });
      }
    },
  },
};
</script>
<style lang="scss">
.popup-container {
  position: absolute;
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.5s;
}

.popup-enter,
.popup-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
