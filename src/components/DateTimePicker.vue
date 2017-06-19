<template>
  <div class="rootDiv">
    <mu-date-picker v-model="hehe" hintText="select a date"/> <br/>
    {{hehe}}
  </div>

</template>

<script>
  export default {
    data () {
      return {
        'hehe': '2017-05-06'
      }
    }
  }
</script>
