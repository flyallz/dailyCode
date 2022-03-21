<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search" />
    <div class="single-blog" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
      </router-link>
      <article>
        {{ blog.content | snippet }}
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  created() {
    //   请求数据
    axios
      .get("/posts.json")
      .then(function (data) {
        // console.log(data.json());
        // return data.json();
        return data.data;
      })
      .then((data) => {
        var blogsArray = [];
        // 得到唯一标识
        for (let key in data) {
          // 得到每一个对象
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        // console.log(blogsArray);
        this.blogs = blogsArray;
        console.log(this.blogs);
      });
  },
  computed: {
    filteredBlogs: function () {
      // 拿到blogs里面的内容
      return this.blogs.filter((blog) => {
        // 查到内容展示内容，没有查到就返回false 匹配标题
        return blog.title.match(this.search);
        // 匹配内容
        // return blog.body;
      });
    },
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      },
    },
  },
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
