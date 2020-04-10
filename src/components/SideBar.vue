<template>
  <div class="sidebar-container" :class="sideBarStatus ? '' : 'expand'">
    <ul class="sidebar-content">
      <NavLinkWrapper
        v-for="link in links"
        :data="link"
        :collapsed="sideBarStatus"
        :isRoot="true"
        v-bind:key="link.path"
        :ref="getNavRef(link.path)"
      />
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
import NavLinkWrapper from './NavLinkWrapper';
import NavLinkGroup from './NavLinkGroup';
import { mapState } from 'vuex';
// hack：解决vue recursive component
Vue.component('NavLinkGroup', NavLinkGroup);
import * as _ from 'lodash';

export default {
  name: 'SideBar',
  components: {
    NavLinkWrapper,
  },
  computed: {
    ...mapState({
      sideBarStatus: state => state.common.sideBarStatus,
    }),
  },
  data() {
    return {
      links: [
        {
          path: '/todos',
          name: 'Todos',
          iconName: 'clipboard-list',
          children: [
            {
              path: '/0',
              name: 'All',
              children: [
                {
                  path: '/0',
                  name: 'All',
                },
                { path: '/1', name: 'Todo' },
                { path: '/2', name: 'Completed' },
              ],
            },
            { path: '/1', name: 'Todo' },
            { path: '/2', name: 'Completed' },
          ],
        },
        {
          path: '/login',
          name: 'Login',
          iconName: 'sign',
        },
      ],
    };
  },
  methods: {
    getNavRef(path) {
      return `navRef-${path}`;
    },
  },
  watch: {
    sideBarStatus(val) {
      if (!val) {
        _.map(this.links, link => link.path).forEach(path => this.$refs[path].collapse());
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.sidebar-container {
  &.expand {
    width: 160px;
  }
}
.sidebar-content {
  // max-width: 160px;
  padding: 0;
  margin: 0;
}
</style>
