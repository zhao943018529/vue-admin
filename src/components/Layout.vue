<template>
  <div class="layout-container">
    <aside class="layout-aside">
      <SideBar />
    </aside>
    <main class="layout-main">
      <header class="layout-header">
        <button class="first-button" @click="toggleSideBar">
          <Icon name="caret-square-left" />
        </button>
      </header>
      <section class="layout-body">
        <router-view />
      </section>
      <footer class="layout-footer"></footer>
    </main>
  </div>
</template>
<script>
import SideBar from './SideBar';
import Icon from './common/Icon';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Layout',
  components: {
    SideBar,
    Icon,
  },
  computed: {
    ...mapState({
      sideBarStatus: state => state.common.sideBarStatus,
    }),
  },
  methods: {
    ...mapMutations(['setSideBar']),
    toggleSideBar() {
      this.setSideBar(!this.sideBarStatus);
    },
  },
};
</script>

<style lang="scss">
.layout-container {
  display: flex;
  height: 100%;
}

.layout-aside {
  overflow: auto;
  background: rgb(24, 115, 233);
}

.layout-main {
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.layout-header {
  height: 56px;
  background: #fe9800;
  flex: 0 0 auto;
}

.layout-body {
  flex: 1;
}

.layout-footer {
  height: 54px;
  flex: 0 0 auto;
  background: blue;
}

.first-button {
  background: transparent;
  border: 0 none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
