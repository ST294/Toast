<template>
  <div v-show="show" class="md-modal-wrapper">
    <div class="md-modal">
      <p class="md-title">{{title}}</p>
      <div class="md-text">{{text}}</div>
      <ul class="md-btn">
        <li v-show="showCancel" @click="cancel">{{cancelText}}</li>
        <li @click="submit">{{submitText}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    data() {
      return {
        show: false,
        title: '提示',
        text: '信息填写错误，去更正',
        showCancel: true,
        submitText: '确认',
        cancelText: '取消'
      }
    },
    methods: {
      // 初始化参数
      showModal(params) {
        let {title, text, showCancel, submitText, cancelText} = params;
        this.title = title;
        this.text = text
        this.showCancel = showCancel
        this.submitText = submitText
        this.cancelText = cancelText

        this.show = true;
      },
      submit() {
        this.callBack(true)
        this.show = false
      },
      cancel() {
        this.show = false
        this.callBack(false)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .md-modal-wrapper
    position: fixed
    top 0
    left 0
    bottom 0
    right 0
    background rgba(0, 0, 0, .4)

    .md-modal
      position fixed
      top 32%
      left 10%
      width 80%
      max-width 340px
      border 1px solid #ffffff
      border-radius 8px
      background #ffffff
      text-align center

      .md-title
        height .6rem
        padding 8px
        font-size 18px
        font-weight bold
        line-height .6rem

      .md-text
        height .6rem
        padding 8px
        font-size 14px
        line-height .6rem

      .md-btn
        display flex
        height .8rem
        margin-top .16rem
        font-size 16px
        line-height .8rem
        border-top 1px solid #f0f0f0

        li
          flex 1

          &:nth-child(1)
            border-right 1px solid #f0f0f0
</style>
