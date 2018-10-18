<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!--new pizza-->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="sm-12 col-md-4">
      <!--品种展示-->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
        <tr>
          <td>{{item.name}}</td>
          <td>
            <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  // 引入NewPizza组件
  import NewPizza from "./NewPizza.vue";

  export default {
    data() {
      return {
        // getMenuItems:[]
      }
    },
    components: {
      'app-new-pizza': NewPizza
    },
    created() {
      fetch("https://wd7814173785erjpna.wilddogio.com/menu.json")
        .then(res => {
          //返回的是个数据流，转换为json串
          return res.json()
        })
        .then(data => {
          // console.log(data);
          let menuArray = [];
          for(let key in data) {
            // console.log(key);
            // console.log(data[key].name);
            // 每个对象新增一个id属性
            data[key].id = key;
            menuArray.push(data[key]);
          }
          // this.getMenuItems = menuArray;
          // 数据同步
          this.$store.commit('setMenuItems', menuArray);
        })
    },
    computed: {
      getMenuItems: {
        get() {
          //在vuex中获取数据
          // return this.$store.state.menuItems;
          return this.$store.getters.getMenuItems;
        },
        set() {
        }
      }
    },
    methods : {
      deleteData(item) {
        fetch("https://wd7814173785erjpna.wilddogio.com/menu/"+item.id+"/.json",{
          method:"DELETE",
          headers:{
            'Content-type':'application/json'
          }
        })
          .then(res => res.json())
          // .then(data => this.$router.push({name:"menuLink"}))
          .then(data => {
            this.$store.commit('removeMenuItems', item);
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>
