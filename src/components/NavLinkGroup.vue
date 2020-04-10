<template>
  <li
    class="nav-link-group"
    :class="expand ? 'expand' : ''"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="nav-content" :class="expand ? 'expand' : ''" @click="toggleExpand">
      <Icon :name="data.iconName" />
      <p v-if="!collapsed || !isRoot" class="nav-text">{{ data.name }}</p>
      <Icon
        v-if="!(isRoot && collapsed)"
        class="nav-arrow"
        :name="collapsed ? 'angle-right' : 'angle-down'"
      />
    </div>
    <transition name="nav-panel">
      <NavTooltip
        v-if="data.children && data.children.length > 0 && expand"
        ref="tipRef"
        :children="data.children"
        :prefix="joinPrefix"
        :collapsed="collapsed"
        :getTrigger="getTrigger"
      />
    </transition>
  </li>
</template>

<script>
import Icon from './common/Icon';
import NavTooltip from './NavTooltip';

export default {
  name: 'NavLinkGroup',
  components: {
    Icon,
    // NavLink,
    // NavLinkGroup,
    NavTooltip,
  },
  props: {
    data: Object,
    collapsed: Boolean,
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
    getTrigger() {
      return this.$el;
    },
    toggleExpand() {
      const panel = this.$refs['tipRef'];
      if (panel) {
        panel.collapse();
      }
      this.expand = !this.expand;
    },
    handleMouseEnter() {
      if (this.collapsed) {
        this.expand = true;
      }
    },
    handleMouseLeave(evt) {
      evt.stopPropagation();
      if (this.collapsed && !this.checkContain(evt.relatedTarget)) {
        this.collapse();
        if (!this.isRoot) {
          this.$nextTick(() => this.$parent.upwardCollapse(evt.relatedTarget));
        }
      }
    },
    upwardCollapse(related) {
      if (!this.checkContain(related)) {
        this.expand = false;
        if (!this.isRoot) {
          this.$nextTick(() => this.$parent.upwardCollapse(related));
        }
      }
    },
    collapse() {
      if (this.$refs['tipRef']) {
        this.$refs['tipRef'].collapse();
      }
      this.expand = false;
    },
    checkContain(related) {
      return (
        this.$el.contains(related) ||
        (this.$refs['tipRef'] && this.$refs['tipRef'].checkContain(related))
      );
    },
  },
};
</script>

<style lang="scss">
.nav-link-group {
  list-style: none;
  cursor: pointer;
  padding: 4px 6px;
  position: relative;
}

.nav-panel-enter-active,
.nav-panel-leave-active {
  transition: all 0.5s;
  opacity: 1;
}

.nav-panel-enter,
.nav-panel-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  background: #ffffff;

  &:hover {
    background: #f4f4f4;
  }
}

.nav-arrow {
  transition: transform 0.3s;

  .nav-content.expand > & {
    transform: rotateZ(-180deg);
  }
}
</style>
