
// 2.引入对象
import ShowBlogs from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog.vue'




// 1.返回对象
export default [
    {
        path: '/',
        component: ShowBlogs
    },
    {
        path: '/add',
        component: AddBlog
    },
    {
        path: '/blog/:id',
        component: SingleBlog
    },
    {
        path: "/edit/:id", component: EditBlog
    }
]

