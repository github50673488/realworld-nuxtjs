<template>
  <!-- 登录注册 -->
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <!-- messages数据值：错误的文本信息数组
              field数据名：email or password -->
            <template v-for="(messages, field) in errors">
              <!-- <li>That email is already taken</li> -->
              <li
                  v-for="(message, index) in messages"
                  :key="index"
              >{{ field }} {{ message }}
              </li>
            </template>
          </ul>

          <!-- .prevent 阻止默认提交行为 -->
          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email"
                     required>
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password"
                     placeholder="Password" minlength="8">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? 'Sign in' : 'Sign up' }}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
  <!-- /登录注册 -->
</template>

<script>
import {login} from '@/api/user'
export default {
  name: 'LoginIndex',
  data() {
    return {
      user: {
        "email": '',
        "password": ''
      },
      errors: {} // 错误信息
    }
  },
  computed: {
    // 定制登录/注册页
    isLogin() { // 登录为true
      return this.$route.name === 'login'
    }
  },
  methods: {
    async onSubmit() {
      // 提交表单请求登录
      console.log('this.user -->', this.user)
      try {
        const {data} = await login({
          user: this.user
        })
        console.log(data)
        // TODO: 保存用户的登录状态
        // 跳转到首页
        this.$router.push('/')
      } catch (e) {
        this.errors = e.response.data.errors
        console.log('this.errors -->', this.errors)
      }
    }
  }
}
</script>

<style scoped>

</style>
