<template>
  <div id="app">
    <login v-if="!loginFlag" @logined="dispatchLogin"></login>
    <admin v-else></admin>
  </div>
</template>

<script>
import Login from './cmp/Login'
import Admin from './cmp/Admin'

export default {
  name: 'app',
  components:{
    "login":Login,
    "admin":Admin
  },
  data () {
    return {
      loginFlag:false
    }
  },
  methods:{
    dispatchLogin(flag) {
      console.log("==  dispatch ===>")
      this.loginFlag=flag
    }

  }
}
</script>

<style>
</style>
