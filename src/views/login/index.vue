<template>
  <div class="login-page">
    <div class="login-section">
      <form @submit="handleSubmit">
        <fieldset>
          <label
            >Username:<input type="text" placeholder="请输入用户名..." v-model="username"
          /></label>
          <label
            >Password:<input type="password" v-model="password" placeholder="请输入用户密码"
          /></label>
        </fieldset>
        <button>Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { request } from '../../utils/request';

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault();
      request.post(
        '/login',
        {
          username: this.username,
          password: this.password,
        },
        {
          transformRequest: [
            function(data) {
              return Object.keys(data)
                .filter(key => data[key] != null)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&');
            },
          ],
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.login-page {
  width: 90vw;
  height: 80vh;
  display: flex;
  align-items: center;
}

.login-section {
  width: 300px;
}
</style>
