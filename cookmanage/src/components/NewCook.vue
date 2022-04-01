<template>
  <form>
    <h3 class="text-muted my-5">添加新的菜单</h3>
    <div class="form-group row">
      <label class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newCook.name" />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea
          rows="5"
          class="form-control"
          v-model="newCook.description"
        ></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newCook.size1" />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newCook.price1" />
      </div>
    </div>
    <p><strong>选项2</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newCook.size2" />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newCook.price2" />
      </div>
    </div>
    <div class="form-group row">
      <button
        @click="addMenuItem"
        class="btn btn-success btn-block"
        type="button"
      >
        添加
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newCook: {},
    };
  },
  methods: {
    addMenuItem() {
      // console.log(this.newCook);
      let data = {
        name: this.newCook.name,
        description: this.newCook.description,
        options: [
          { size: this.newCook.size1, price: this.newCook.price1 },
          { size: this.newCook.size2, price: this.newCook.price2 },
        ],
      };
      // es6 fetch传递数据
      //   fetch("https://pizza-72f59-default-rtdb.firebaseio.com/menu.json", {
      //     method: "POST",
      //     headers: { "Content-type": "application/json" },
      //     body: JSON.stringify(data),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => this.$router.push({ name: "menuLink" }))
      //     .catch((err) => console.log(err));
      // this.http
      //   .post("menu.json", data)
      //   .then((res) => this.$router.push({ name: "menuLink" }));
      // 数据同步到vuex
      this.http
        .post("menu.json", data)
        .then((res) => this.$store.commit("pushToMenuItems", data));
    },
  },
};
</script>