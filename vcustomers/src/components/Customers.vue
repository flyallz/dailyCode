
<template>
  <div class="customers container">
    <alert v-if="alert" v-bind:message="alert"></alert>
    <h1 class="page-header">用户管理系统</h1>

    <input
      type="text"
      class="form-control"
      placeholder="搜索"
      v-model="filterInput"
    />

    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="customer in filterBy(customers, filterInput)">
          <td>{{ customer.name }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <router-link
              class="btn btn-default"
              v-bind:to="'/customer/' + customer.id"
              >详情</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import alert from "./Alert.vue";
export default {
  name: "customers",
  data() {
    return {
      customers: [],
      alert: "",
      filterInput: "",
    };
  },
  methods: {
    //   连接数据
    fetchCustomers() {
      this.$http.get("http://localhost:3000/users").then((response) => {
        // console.log(response);
        this.customers = response.data;
      });
    },
    filterBy(customers, value) {
      return customers.filter(function (customer) {
        return customer.name.match(value);
      });
    },
  },
  //   页面加载就调用方法获得数据
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  //添加提示信息
  updated() {
    this.fetchCustomers();
  },
  components: {
    alert,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
