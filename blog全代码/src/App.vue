<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog";
import ShowBlog from "./components/ShowBlog";
import blogHeader from "./components/blogHeader";

export default {
  name: "App",
  components: {
    AddBlog,
    ShowBlog,
    blogHeader,
  },
};
</script>

<style>
#app {
}
</style>
