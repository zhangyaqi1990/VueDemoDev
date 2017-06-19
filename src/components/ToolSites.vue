<template>
  <div class="ToolSites">
    <!--<div>{{ toolSites }}</div>-->
    <p v-for="toolSite in toolSites"><a :href="toolSite.url" target="_blank">{{toolSite.name}}</a></p>
    <!--<a class="waves-effect waves-light btn">button</a>-->
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        toolSites: [
          {
            name: 'GitHub',
            url: 'https://github.com/'
          },
          {
            name: 'StackOverflow',
            url: 'https://stackoverflow.com/'
          },
          {
            name: 'CodePen',
            url: 'https://codepen.io/'
          },
          {
            name: 'JSFiddle',
            url: 'https://jsfiddle.net/'
          },
          {
            name: 'Plunker',
            url: 'http://plnkr.co/'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
