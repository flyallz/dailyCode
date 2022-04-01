
<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit="updateCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input
            type="text"
            class="form-control"
            placeholder="姓名"
            v-model="customer.name"
          />
        </div>
        <div class="form-group">
          <label>电话</label>
          <input
            type="text"
            class="form-control"
            placeholder="电话"
            v-model="customer.phone"
          />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input
            type="text"
            class="form-control"
            placeholder="邮箱"
            v-model="customer.email"
          />
        </div>
        <div class="form-group">
          <label>学历</label>
          <input
            type="text"
            class="form-control"
            placeholder="学历"
            v-model="customer.education"
          />
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input
            type="text"
            class="form-control"
            placeholder="毕业学校"
            v-model="customer.graduationschool"
          />
        </div>
        <div class="form-group">
          <label>职业</label>
          <input
            type="text"
            class="form-control"
            placeholder="职业"
            v-model="customer.profession"
          />
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea
            v-model="customer.profile"
            class="form-control"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">确认</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert.vue";

export default {
  name: "add",
  data() {
    return {
      customer: {},
      alert: "",
    };
  },
  methods: {
    //   获取数据
    fetchCustomer(id) {
      this.$http.get("http://localhost:3000/users/" + id).then((response) => {
        //   console.log(response);
        this.customer = response.data;
      });
    },
    updateCustomer(e) {
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.alert = "请添加对应的信息";
      } else {
        let updateCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationschool: this.customer.graduationschool,
          profession: this.customer.profession,
          profile: this.customer.profile,
        };
        this.$http
          .put(
            "http://localhost:3000/users/" + this.$route.params.id,
            updateCustomer
          )
          .then((response) => {
            // console.log(response);
            // 添加成功后跳转到主页
            this.$router.push({
              path: "/",
              query: { alert: "用户信息更新成功" },
            });
          });
      }
      // 阻止默认事件
      e.preventDefault();
    },
  },
  created() {
    this.fetchCustomer(this.$route.params.id);
  },
  components: {
    Alert,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
