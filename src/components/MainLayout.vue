<template>
  <div class="layout">
    <Sider :style="{ position: 'fixed', height: '100vh', left: 0, overflow: 'auto' }">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            Item 1
          </template>
          <MenuItem name="1-1">Option 1</MenuItem>
          <MenuItem name="1-2">Option 2</MenuItem>
          <MenuItem name="1-3">Option 3</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            Item 2
          </template>
          <MenuItem name="2-1">Option 1</MenuItem>
          <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            Item 3
          </template>
          <MenuItem name="3-1">Option 1</MenuItem>
          <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{ marginLeft: '200px' }">
      <Header :style="{ background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)' }"> </Header>
      <Content :style="{ padding: '0 16px 16px' }">
        <Breadcrumb :style="{ margin: '16px 0' }">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <router-view />
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
import {
  Sider,
  Layout,
  Header,
  Menu,
  MenuItem,
  Submenu,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
} from 'view-design';

export default {
  name: 'MainLayout',
  components: {
    Sider,
    Layout,
    Header,
    Menu,
    MenuItem,
    Submenu,
    Icon,
    Breadcrumb,
    BreadcrumbItem,
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style lang="scss" scoped></style>
