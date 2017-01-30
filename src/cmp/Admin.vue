<template>
  <adminNav  @menuChanged="changeMenu"></adminNav>
</template>

<script>
  import Nav from "./Nav"

  export default {
    components:{
      "adminNav":Nav
    },
    methods:{
      changeMenu:function(event){
        console.log("@menuChange")
        console.log("@event:",event)
      }
    }
  }
</script>
