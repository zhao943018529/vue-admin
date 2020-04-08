<template>
  <div class="layout-container">
    <aside class="layout-aside">
      <SideBar />
    </aside>
    <main class="layout-main">
      <header class="layout-header"></header>
      <section class="layout-body"></section>
      <footer class="layout-footer"></footer>
    </main>
  </div>
</template>
<script>
import SideBar from './SideBar';

export default {
  name: 'Layout',
  components: {
    SideBar,
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
}

.layout-main {
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.layout-header {
  height: 56px;
  background: #fe9800;
}

.layout-body {
  flex: 1;
}

.layout-footer {
  height: 54px;
}
</style>
