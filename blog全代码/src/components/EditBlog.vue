<template>
  <div id="add-blog">
    <h2>编辑博客</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories" />
        <label>node.js</label>
        <input type="checkbox" value="node.js" v-model="blog.categories" />
        <label>react.js</label>
        <input type="checkbox" value="react.js" v-model="blog.categories" />
        <label>angular</label>
        <input type="checkbox" value="angular" v-model="blog.categories" />
      </div>
      <label>作者：</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">编辑博客</button>
    </form>
    <div v-if="submmited">
      <h3>您的博客发布成功！</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{ blog.title }}</p>
      <p>博客内容：</p>
      <p>{{ blog.content }}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>作者：{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ["小明", "小红", "小张", "小李"],
      submmited: false,
    };
  },
  methods: {
    fetchData() {
      //   console.log(this.id);
      // 拿取数据
      this.$http
        .get(
          "https://blog-ad61e-default-rtdb.firebaseio.com/posts/" +
            this.id +
            ".json"
        )
        .then((response) => {
          //   console.log(response);
          this.blog = response.body;
        });
    },
    post: function () {
      this.$http
        .put(
          "https://blog-ad61e-default-rtdb.firebaseio.com/posts/" +
            this.id +
            ".json",
          this.blog
        )
        .then(function (data) {
          console.log(data);
          this.submmited = true;
        });
    },
  },
  created() {
    //   请求数据
    this.fetchData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
textarea {
  height: 200px;
}
#checkboxes label {
  display: inline-block;
  margin-top: 0;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
button {
  display: block;
  margin: 20px 0;
  background: crimson;
  border: none;
  color: #fff;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>
