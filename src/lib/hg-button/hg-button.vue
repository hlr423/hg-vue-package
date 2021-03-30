<template>
  <button @click="ClickHandler()" :class="styles" :disabled="disabled">{{ text }}</button>
</template>

<script>
  export default {
    name: 'hg-button',
    data () {
      return {}
    },
    props: {
      /* 按钮中显示的文字 */
      text: {
        type: String,
        default: 'hgButton'
      },
      /* 是否启用按钮 */
      disabled: {
        type: Boolean,
        default: false
      },
      /* 按钮形状 */
      design: {
        type: String,
        default: 'block'
      },
      /* 矢量图标 */
      icon: String,
      /* 内置按钮风格 */
      type: {
        type: String,
        default: 'normal'
      }
    },
    methods: {
      /* 按钮点击时触发的事件，用于父组件中使用 */
      ClickHandler () {
        this.$emit('click')
      }
    },
    computed: {
      /* 根据不同的props，展示按钮样式 */
      styles: {
        get () {
          return ['sp-button', this.design, this.icon, this.type]
        }
      }
    }
  }
</script>

<style scoped>
  button {
    width: 100px;
    height: 30px;
    outline: none; /*outline 去除原生的button样式*/

    /*动画设置*/
    transition: border 0.8s;
    -webkit-transition: border 0.8s;
    transition: background-color 0.1s;
    -webkit-transition: background-color 0.1s;
  }
  /*normal style*/
  .normal {
    border: 1px solid rgb(135, 135, 136);
    background-color: #ffffff;
    font-size: 12px;
    color: rgb(92, 90, 90);
  }
  .normal:hover {
    cursor: pointer;
    background-color: #F4F4F5;
  }
  .normal:active {
    color: #000;
    border: 1px solid rgb(135, 135, 136);
    background-color: #F4F4F5;
  }
  .normal:disabled {
    cursor: not-allowed;
    background-color: rgb(241, 243, 245);
    opacity: 0.8;
  }
  /* primary style */
  .primary {
    color: #ffffff;
    background-color: #3a8ee6;
    font-size: 12px;
    border: none;
  }
  .primary:active {
    background-color: rgb(192, 215, 250);
    color: rgb(105, 83, 233);
    border: none;
  }
  .primary:hover{
    cursor: pointer;
    background-color: rgb(125, 174, 248);
  }
  .primary:disabled{
    background-color: rgb(192, 215, 250);
    color: #3a8ee6;
    border: none;
    cursor: not-allowed;
  }
  /* warning style*/
  .warning {
    color: #ffffff;
    background-color: #CF9236;
    font-size: 12px;
    border: none;
  }
  .warning:active {
    background-color: rgb(233, 202, 157);
    color: rgb(185, 115, 10);
    border: none;
  }
  .warning:hover{
    cursor: pointer;
    background-color: rgb(231, 177, 97);
  }
  .warning:disabled{
    background-color: rgb(233, 202, 157);
    color: rgb(185, 115, 10);
    border: none;
    cursor: not-allowed;
  }
  /* error style*/
  .error {
    color: #ffffff;
    background-color: rgb(250, 96, 96);
    font-size: 12px;
    border: none;
  }
  .error:active {
    background-color: rgb(243, 181, 181);
    color: rgb(245, 60, 60);
    border: none;
  }
  .error:hover{
    cursor: pointer;
    background-color: rgb(238, 127, 127);
  }
  .error:disabled{
    background-color: rgb(243, 181, 181);
    color: rgb(245, 60, 60);
    border: none;
    cursor: not-allowed;
  }
  /* success style */
  .success {
    color: #ffffff;
    background-color: #5DAF34;
    font-size: 12px;
    border: none;
  }
  .success:active {
    background-color: rgb(185, 218, 168);
    color: rgb(70, 153, 29);
    border: none;
  }
  .success:hover{
    cursor: pointer;
    background-color: rgb(129, 211, 85);
  }
  .success:disabled{
    background-color: rgb(185, 218, 168);
    color: rgb(70, 153, 29);
    border: none;
    cursor: not-allowed;
  }
  /* info style */
  .info {
    color: #ffffff;
    background-color: #A6A9AD;
    font-size: 12px;
    border: none;
  }
  .info:active {
    background-color: rgb(212, 214, 218);
    color: rgb(141, 144, 146);
    border: none;
  }
  .info:hover{
    cursor: pointer;
    background-color: rgb(176, 178, 182);
  }
  .info:disabled{
    background-color: rgb(212, 214, 218);
    color: rgb(141, 144, 146);
    border: none;
    cursor: not-allowed;
  }
  /* 方块 */
  .block {
    border-radius: 0px;
  }
  /* 半圆 */
  .oval {
    border-radius: 50px;
  }
  /* 圆角 */
  .fillet {
    border-radius: 5px;
  }
  /* 圆 */
  .circle {
    /*宽高相等才能成为圆,但从视觉上来看，width比height多5px更为好看*/
    width: 50px;
    height: 45px;
    border-radius: 50%;
  }
</style>
