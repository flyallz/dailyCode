import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [
            {
                name: "小明",
                price: 200,
            },
            { name: "小红", price: 400 },
            {
                name: "小芳",
                price: 300,
            },
            {
                name: "小力",
                price: 300,
            },
        ],
    },
    getters: {
        saleProducts: (state) => {
            var saleProducts = state.products.map((product) => {
                return {
                    name: "**" + product.name + "**",
                    price: product.price / 2,
                }
            })
            return saleProducts;
        }
    },
    mutations: {

        reducePrice: (state, payload) => {
            //   拿到数据
            state.products.forEach((product) => {
                product.price -= payload;
            });
        }
    },
    // 实现异步
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function () {
                context.commit("reducePrice", payload)
            }, 2000)
        }
    }
})