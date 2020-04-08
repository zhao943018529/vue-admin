<template>
  <li
    class="nav-link"
    :class="expand ? 'expand' : ''"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="nav-content" @click="toggleExpand">
      <Icon :name="data.iconName" />
      <p v-if="!collapse || !isRoot" class="nav-text">{{ data.name }}</p>
      <Icon v-if="!collapse" class="nav-arrow" name="angle-down" />
    </div>
    <transition name="nav-panel">
      <ul
        class="nav-second"
        :class="collapse ? 'collapse' : ''"
        v-if="expand && data.children && data.children.length > 0"
      >
        <template v-for="child in data.children">
          <NavLinkGroup
            v-if="child.children"
            :data="child"
            :prefix="joinPrefix"
            :collapse="collapse"
            v-bind:key="child.path"
          />
          <NavLink v-bind:key="child.path" :prefix="joinPrefix" :data="child" v-else />
        </template>
        <!-- <NavLinkWrapper1
        :prefix="data.path"
        v-for="child in data.children"
        v-bind:key="child.path"
        :data="child"
        :collapse="collapse"
      /> -->
      </ul>
    </transition>
  </li>
</template>

<script>
import Icon from './common/Icon';
import NavLink from './NavLink';
import NavLinkGroup from './NavLinkGroup';

// const NavLinkWrapper1 = Vue.component('NavLinkWrapper1', NavLinkWrapper);

export default {
  name: 'NavLinkGroup',
  components: {
    Icon,
    NavLink,
    NavLinkGroup,
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
  computed: {
    joinPrefix() {
      return `${this.prefix || ''}${this.data.path}`;
    },
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
      if (this.collapse && !this.$el.contains(evt.relatedTarget)) {
        this.expand = false;
      }
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
    z-index: 1000;
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
