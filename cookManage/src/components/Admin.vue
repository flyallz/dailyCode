<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- 新菜谱 -->
      <app-new-cook></app-new-cook>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <td>{{ item.name }}</td>
          <td>
            <button
              class="btn btn-outline-danger btn=sm"
              @click="deleteData(item)"
            >
              &times;
            </button>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewCook from "./NewCook.vue";
export default {
  data() {
    return {
      // getMenuItems: [],
    };
  },
  components: {
    "app-new-cook": NewCook,
  },
  computed: {
    getMenuItems: {
      // 在vuex中获取数据
      get() {
        return this.$store.getters.getMenuItems;
      },
      set() {},
    },
  },
  // 拿到数据并赋给属性，展示请求的数据
  created() {
    fetch("https://pizza-72f59-default-rtdb.firebaseio.com/menu.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        // 遍历data，将key值转为唯一id
        let menuArray = [];
        for (let key in data) {
          // console.log(key);
          data[key].id = key;
          menuArray.push(data[key]);
        }
        // this.getMenuItems = menuArray;

        // 实现数据同步
        this.$store.commit("setMenuItems", menuArray);
      });
  },
  methods: {
    deleteData(item) {
      fetch(
        "https://pizza-72f59-default-rtdb.firebaseio.com/menu/" +
          item.id +
          "/.json",
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        // .then((data) => this.$router.push({ name: "menuLink" }))
        .then((data) => {
          this.$store.commit("removeMenuItems", item);
        })

        .catch((err) => console.log(err));
    },
  },
};
</script>