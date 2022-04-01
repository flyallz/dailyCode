<!-- 模板：html结构 有且只有一个根标签-->

<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <router-link to="/helloworld">helloworld</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<!-- 行为：处理逻辑-->
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<!--样式：解决样式-->

<style>
</style>
