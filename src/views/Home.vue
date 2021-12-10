<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// 1. vscode而言 默认一个tab等于4个空格，eslint希望一个tab是2个空格
// 2. 如果大家vscodean安装了多个代码格式化工具，需要配置一个默认格式化工具
// 3. ESlint 和 prettier 之间冲突问题
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    console.log('create')
  }
}
</script>
