<template>
  <router-link :to="(prefix || '') + data.path" v-slot="{ href, route, navigate, isActive }">
    <li class="nav-link" :class="isActive ? 'active' : ''">
      <a class="nav-anchor" :href="href" @click="navigate">
        <Icon v-if="data.iconName != null" :class="data.iconClassName" :name="data.iconName" />
        <span class="nav-text">{{ data.name }}</span>
      </a>
    </li>
  </router-link>
</template>

<script>
import Icon from './common/Icon';

export default {
  name: 'NavLink',
  components: {
    Icon,
  },
  props: {
    data: Object,
    prefix: String,
    collapse: Boolean,
  },
};
</script>

<style lang="scss">
.nav-link {
  list-style: none;
  cursor: pointer;
  padding: 4px 6px;
  position: relative;

  &.active {
  }
}

.nav-anchor {
  display: inline-block;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.nav-text {
  margin: 0 0 0 8px;
  text-align: left;
  flex: 1;
}
</style>
