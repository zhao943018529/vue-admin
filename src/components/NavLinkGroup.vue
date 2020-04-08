<template>
  <li
    class="nav-link"
    :class="expand ? 'expand' : ''"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="nav-content" @click="toggleExpand">
      <Icon :name="data.iconName" />
      <p v-if="!collapse" class="nav-text">{{ data.name }}</p>
      <Icon class="nav-arrow" name="angle-down" />
    </div>
    <transition name="nav-panel">
      <ul
        class="nav-second"
        :class="collapse ? 'collapse' : ''"
        v-if="expand && data.children && data.children.length > 0"
      >
        <NavLinkWrapper
          :prefix="data.path"
          v-for="child in data.children"
          v-bind:key="child.path"
          :data="child"
          :collapse="collapse"
        />
      </ul>
    </transition>
  </li>
</template>

<script>
import Icon from './common/Icon';
import NavLinkWrapper from './NavLinkWrapper';

export default {
  name: 'NavLinkGroup',
  components: {
    Icon,
    NavLinkWrapper,
  },
  props: {
    data: Object,
    collapse: Boolean,
    prefix: String,
    isRoot: Boolean,
  },
  data() {
    return {
      expand: false,
    };
  },
  methods: {
    toggleExpand() {
      this.expand = !this.expand;
    },
    handleMouseEnter() {
      if (this.collapse) {
        this.expand = true;
      }
    },
    handleMouseLeave(evt) {
      if (!this.$el.contains(evt.relatedTarget) && !this.isRoot) {
        this.$parent.checkExpand();
      }
    },
    checkExpand() {
      // if(!this.$el.contains(evt.relatedTarget) && !this.isRoot)
    },
  },
};
</script>

<style lang="scss">
.nav-panel-enter-active,
.nav-panel-leave-active {
  transition: all 0.5s;
  opacity: 1;
}

.nav-panel-enter,
.nav-panel-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-second {
  padding: 0;

  &.collapse {
    position: absolute;
    left: 100%;
    top: 0;
  }
}

.nav-arrow {
  transition: transform 0.3s;

  .nav-link.expand & {
    transform: rotateZ(-180deg);
  }
}
</style>
