<template>
    <div class="toast" v-if="show">
      {{content}}
    </div>
</template>

<script>
    export default {
        name: 'toast',
        data() {
          return {
            show: false,
            content: ''
          }
        }
    }
</script>

<style lang="stylus" scoped>
.toast
  position absolute
  bottom 16%
  left 34%
  padding .18rem
  min-width 90px
  min-height 20px
  background rgba(0,0,0,.4)
  border-radius 8px
  line-height 20px
  color #ffffff
  text-align center
</style>
