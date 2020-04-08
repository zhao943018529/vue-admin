import { jsonPost, fetch } from '../../utils/request';
import * as _ from 'lodash';

const state = {
  todos: [],
  filter: '',
};

const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);
  },
  setTodos(state, todos) {
    state.todos = todos;
  },
  updateTodo(state, todo) {
    const target = _.find(state.todos, { id: todo.id });
    Object.keys(todo).forEach(key => (target[key] = todo[key]));
  },
  deleteTodo(state, param) {
    state.todos = state.todos.filter(todo => todo.id !== param.id);
  },
};

const actions = {
  addTodo({ commit }, todo) {
    return jsonPost('/addTodo', todo).then(res => commit('addTodo', res.data));
  },
  getTodos({ commit }, payload) {
    return fetch(`/todos/${(payload && payload.type) || 0}`).then(res =>
      commit('setTodos', res.data),
    );
  },
  updateTodo({ commit }, payload) {
    return jsonPost('/updateTodo', payload).then(res => commit('updateTodo', res.data));
  },
  deleteTodo({ commit }, payload) {
    return jsonPost('/deleteTodo', payload).then(() => commit('deleteTodo', payload));
  },
};

export default { state, mutations, actions };
