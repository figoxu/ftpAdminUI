<template>
    <header id="header" class="clearfix">
      <!-- Logo -->
      <a href="#" class="logo shadowed">
        FTP Admin
      </a>

      <ul class="nav nav-pills pull-right shadowed" id="top-menu">
        <li :class="cname('dashboard')" @click="goto('dashboard')" ><a style="cursor: pointer;">统计报表</a></li>
        <li :class="cname('ftp')" @click="goto('ftp')" ><a style="cursor: pointer;">FTP账号</a></li>
        <li :class="cname('pwd')" @click="goto('pwd')" ><a style="cursor: pointer;">修改密码</a></li>
      </ul>

    </header>
</template>

<script>
  export default {
    data() {
      return {
        menuName:'dashboard'
      }
    },
    methods: {
      cname:function(name){
          if( name==this.menuName ){
            return "active"
          }
          return ""
      },
      goto:function (name) {
        this.menuName = name
        this.$emit('menuChanged',name)
        this.$router.push("/"+name)
      }
    }
  }
</script>


