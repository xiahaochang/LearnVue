var obj = {
    foo: 'bar'
}
Object.freeze(obj)
var app1 = new Vue({
    el: '#app1',
    data: obj
})

var app2 = new Vue({
    el: '#app2',
    data: {
        rawHtml: '<span style="color:red">this should be red</span>',
    }

})

var app3 = new Vue({
    el: '#app3',
    data: {
        message: 'Hello'
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
        }
    },
    // 在组件中
    methods: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})

var app4 = new Vue({
    el: '#app4',
    // data: {
    //     firstName: 'Foo',
    //     lastName: 'Bar',
    //     fullName: 'Foo Bar'
    // },
    // watch: {
    //     firstName: function (val) {
    //         this.fullName = val + ' ' + this.lastName
    //     },
    //     lastName: function (val) {
    //         this.fullName = this.firstName + ' ' + val
    //     }
    // }

    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})


// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#app')

// 现在，应用已经启动了！
var app5 = new Vue({
    el: '#app5',
    // Home.vue
    
    computed: {
        username() {
            // 我们很快就会看到 `params` 是什么
            return this.$route.params.username
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
    
})

var app7 = new Vue({
    el: '#app7',
    data: {
        awesome: true,
        ok_if: true,
        ok_show: true,
        loginType: 'username',

    },
    methods: {
       
        toggleLoginType: function () {

            this.loginType = 'username' ? 'email' : 'username'
            
        },
        
    },


})