<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝本店食物！</h1>
        <h2>这里有你喜欢的各种风味！</h2>
        <button @click="goToMenu" class="btn btn-success">开始点餐</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMenu() {
      // 跳转到上一次浏览的页面
      // this.$router.go(-1);
      // this.$router.replace("/menu");
      // this.$router.replace({ name: "menuLink" });
      // this.$router.push("/menu");
      this.$router.push({ name: "menuLink" });
    },
  },
};
</script>

<style scoped>
#home {
  background: url(../../src/assets/food.png);
  height: 85vh;
  padding: 10%;
}
h1,
h2 {
  margin: 6%;
}
.background {
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>