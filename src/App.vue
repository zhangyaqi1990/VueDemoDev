<template>
  <div id="app">
    <!--<div>{{$router.options}}</div>-->
    <!--<img src="./assets/logo.png">-->
    <mu-appbar class="custom-appbar" :title="SiteTitle">
      <!--<div slot="right">{{theme}}</div>-->
      <!--<mu-icon-menu icon="more_vert" slot="right" :value="theme" @change="handleThemeChange">-->
      <!--<mu-menu-item :value="theme" v-for="(theme, index) in themes" :key="theme.id" :title="theme"/>-->
      <!--</mu-icon-menu>-->
    </mu-appbar>
    <mu-drawer :open="true" :docked="true">
      <mu-appbar>
      </mu-appbar>
      <mu-list>
        <mu-list-item v-for="(option, index) in options" :key="option.id" :title="option.name" @click="handleMenuChange(option)"></mu-list-item>
      </mu-list>
    </mu-drawer>

    <div>A study project</div>

    <div class="custom-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        SiteTitle: `Garry's small tools`,
        options: this.$router.options.routes
      }
    },
    methods: {
      handleMenuChange (option) {
//        console.log(option)
        this.$router.push(option.path)
      }
    }
  }
</script>

<style lang="css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .custom-appbar {
    position: fixed;
    left:256px;
  }

  .custom-content{
    padding-left: 280px;
    padding-top:60px;
  }
</style>
