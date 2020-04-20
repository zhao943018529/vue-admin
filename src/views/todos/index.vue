<template>
  <div class="page-todos">
    <AddTodo />
    <TodoList />
    <TodoFooter />
    <SideBar />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import SideBar from '../../components/SideBar';

export default {
  name: 'TodoPage',
  components: {
    AddTodo,
    TodoList,
    TodoFooter,
    SideBar,
  },
};
</script>

<style lang="scss" scoped>
.page-todos {
  width: 600px;
  margin: 0 auto;
}
</style>
