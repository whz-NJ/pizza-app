<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
              >
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
              >
            </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default{
    data(){
      return {
        email:'',
        password:''
      }
    },
    // 组件内的路由守卫
    beforeRouteEnter: (to, from, next) => {
      // 此时组件还没有初始化，this指针为空，不能使用：this.$store.dispatch("setUser", null);
      next(vm => vm.$store.dispatch("setUser", null))
    },
    methods:{
      onSubmit(){
        axios.get('/users.json')
          .then(res => {
            // console.log(res.data);
            const data = res.data;
            const users = [];
            for(let key in data) {
              const user = data[key];
              // console.log(user);
              users.push(user);
            }
            // 实现过滤（ES6语法的filter）
            let result = users.filter((user) => {
              return user.email === this.email && user.password === this.password;
            });
            // console.log(result);
            // 判断result长度是否大于0
            if(result != null && result.length > 0) {
              // dispatch引用的方法对应Vuex里的actions里的方法
              // 将用户邮箱放入vuex，这里也可以用 commit
              this.$store.dispatch("setUser", result[0].email);
              this.$router.push({name: "homeLink"});
            }
            else {
              this.$store.dispatch("setUser", null);
              alert("账号或密码错误！");
            }

          })
      }
    }
  }

</script>
