<template>
  <div id="app">
    <!--<div>{{$router.options}}</div>-->
    <!--<img src="./assets/logo.png">-->
    <mu-appbar :title="SiteTitle">
      <mu-text-field icon="search" class="appbar-search-field" slot="right" hintText="search here"/>
      <mu-flat-button color="white" label="What's up man" slot="right"/>
    </mu-appbar>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab :value="index" v-for="(option, index) in options" :key="option.id" :title="option.name"/>
    </mu-tabs>
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
        SiteTitle: `Garry's small tools`,
        options: this.$router.options.routes,
        activeTab: 0
      }
    },
    methods: {
      handleTabChange (value) {
//        console.log(value)
        this.activeTab = value
        this.$router.push(this.options[value].path)
      }
    }
  }
</script>

<!--<style>-->
<!--#app {-->
<!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!-- -webkit-font-smoothing: antialiased;-->
<!-- -moz-osx-font-smoothing: grayscale;-->
<!--/*text-align: center;*/-->
<!--/*color: #2c3e50;*/-->
<!--/*margin-top: 20px;*/-->
<!--}-->
<!--</style>-->
<style lang="less">
  .appbar-search-field {
    color: #FFF;
    margin-bottom: 0;
    &.focus-state {
      color: #FFF;
    }
    .mu-text-field-hint {
      color: fade(#FFF, 54%);
    }
    .mu-text-field-input {
      color: #FFF;
    }
    .mu-text-field-focus-line {
      background-color: #FFF;
    }

    .mu-text-field-icon {
      color: #FFF;
    }
  }
</style>
