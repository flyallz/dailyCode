import Vue from "vue";
import Vuex from 'vuex';
// import * as actions from './actions'
// import * as getters from './getters'
// import * as getters from './mutations'
import menu from './module/menu';
import users from './module/users';
import status from './module/status';




Vue.use(Vuex);

export const store = new Vuex.Store({
    // state: {
    //     // 存储数据
    //     // menuItems: {},
    //     // currentUser: null,
    //     // isLogin: false
    // },
    // getters,

    // mutations,
    // actions
    modules: {
        users,
        menu,
        status
    }
})
