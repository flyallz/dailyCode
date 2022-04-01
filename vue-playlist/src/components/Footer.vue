<template>
  <footer>
    <h1>{{ title1 }} {{ title }}</h1>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      title1: "copyright 2022 Vue Demo",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background: lightblue;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
