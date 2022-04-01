<!-- 模板：html结构 有且只有一个根标签-->

<template>
  <div id="home">
    <app-header
      v-on:titleChanged="updateTitle($event)"
      v-bind:title="title"
    ></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>

    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!-- 行为：处理逻辑-->
<script>
// 局部注册组件
import Users from "./Users.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "home",
  data() {
    return {
      users: [
        // { name: "小明", position: "Web开发", show: false },
        // { name: "小明", position: "Web开发", show: false },
        // { name: "小明", position: "Web开发", show: false },
      ],
      title: "传递的是一个值",
    };
  },
  methods: {
    updateTitle: function (title) {
      this.title = title;
    },
  },
  // 注册组件
  components: {
    users: Users,
    "app-header": Header,
    "app-footer": Footer,
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        // console.log(data);
        this.users = data.body;
      });
  },
};
</script>

<!--样式：解决样式-->

<style>
</style>
