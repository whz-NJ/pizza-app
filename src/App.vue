<template>
  <div id="app">
<div class="container">
  <!--使用Header组件-->
  <app-header></app-header>
</div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <!--小屏时展示12列，中屏时展示4列-->
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';

export default {
  components:{
    // 注册Header组件，由于Header和现有标签冲突了，重命名为app-header
    // 这里注册为appHeader，驼峰的形式，不需要引号
    // 也可以使用 "app-header": Header 的形式
    appHeader: Header
  }
}
</script>

<style>

</style>
