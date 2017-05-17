<template>
  <div id="app">

    <!--<img src="./assets/logo.png">-->
    <!--<br>-->
    <!--<router-link to="/">Go to Home</router-link>-->
    <!--<router-link to="/about">Go to About</router-link>-->
    <!--<router-link to="/datepicker">Go to Date Picker</router-link>-->
    <!--<router-view></router-view>-->
    <el-tabs type="card" @tab-click="handleClick">
      <el-tab-pane v-for="option in options" :label="option.label"></el-tab-pane>
    </el-tabs>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        options: [
          {
            label: 'Hello',
            route: 'hello'
          },
          {
            label: 'About',
            route: 'about'
          },
          {
            label: 'DatePicker',
            route: 'datepicker'
          }
        ]
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab.index, event)
        this.$router.push('/' + this.options[tab.index].route)
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
