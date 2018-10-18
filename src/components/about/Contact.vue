<template>
  <div class="car text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">27732357@qq.com</p>
      <!--导航-->
      <router-link :to="{name: 'phoneNumber'}">电话</router-link>
      <router-link :to="{name: 'personName'}">联系人</router-link>
      <!--导航所对应的三级路由页面 -->
      <router-view></router-view>
    </div>
  </div>
</template>
