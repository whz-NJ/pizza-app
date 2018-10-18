<template>
  <!--template下只允许出现一个根标签，所以用div包裹起来-->
  <div class="row">
    <!--小尺寸，内容居中-->
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza!</h1>
        <h2>这里有你非常喜欢的pizza!</h2>
        <button @click="gotoMenu" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods: {
      gotoMenu() {
        // 跳转到上一次浏览的页面，this为Vue对象
        // this.$router.go(-1);
        //指定跳转的地址
        // this.$router.replace('/menu');

        // 指定跳转路由的名字下
        // this.$router.replace({name: 'menuLink'});

        //通过push进行跳转（更常用）
        // this.$router.push('/menu');
        this.$router.push({name: 'menuLink'});
      }
    }
  }
</script>

<style>
  #home{
    background: url('../../src/assets/pizza.jpg');
    height: 85vh; /* view height，占可视区域高度的85%，只是google浏览器支持，其他浏览器支持的不好*/
    padding: 10%;
  }

  h1,h2{
    margin: 6%;
  }

  .background{
    background: #eee;
    opacity: 0.8;
    max-width: 70vw; /* view width，占可视区域宽度的70%，只是google浏览器支持，其他浏览器支持的不好*/
    margin: 0 auto; /*实现居中*/
    padding: 20px 0;
  }

</style>
