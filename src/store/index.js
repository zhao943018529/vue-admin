import Vue from 'vue';
import Vuex from 'vuex';
import todos from './modules/todos';
import common from './modules/common';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    common,
  },
});
