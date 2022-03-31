<template>
  <div id="app">
    <div class="container">
      <!--3. 使用组件 -->
      <app-header></app-header>
    </div>
    <div class="container">
      <!-- 展示路由页面-->
      <router-view></router-view>
    </div>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 1.引入组件
import Header from "./components/Header.vue";
export default {
  name: "app",
  // 2.注册组件
  components: {
    // header和h5标签有点重名冲突，改名
    appHeader: Header,
  },
};
</script>

<style>
</style>
