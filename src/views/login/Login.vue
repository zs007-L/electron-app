<template>
  <div class="login">
    <div class="login-dialog">
      <h1 class="title">login</h1>
      <form class="login-form" ref="form">
        <input type="text" placeholder="用户名" v-model="user.loginId" />
        <input type="password" placeholder="密码" v-model="user.loginPwd" />
        <button type="button" @click="submit">登录</button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = ref({
  loginId: '',
  loginPwd: ''
})
const form = ref<HTMLFormElement>()

const submit = async () => {
  await axios({
    url: 'http://localhost:3000/api/admin/login',
    data: {
      ...user.value
    },
    method: 'POST'
  })
  router.push({
    path: '/home'
  })
}
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
}

.login-dialog {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  text-align: center;
  margin-top: 30px;
}
.login-form {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
input {
  margin-bottom: 20px;
  border: 0;
  outline: none;
  border-bottom: 1px solid rgb(128, 125, 125);
  padding: 10px;
  font-size: 15px;
}
input::placeholder {
  text-transform: uppercase;
}
button {
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
