<template lang="html">
  <div class="">
    {{counter}}
  </div>
</template>

<script>
export default {
  name: 'counter',
  data () {
    return {
      counter: 0
    }
  },
  computed: {
  },
  methods: {
    increase () {
      this.counter ++
    },
    decrease () {
      this.counter --
    }
  }
}
</script>

<style lang="css">
</style>
