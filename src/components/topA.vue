<template>
  <div class="top">
    <div class="home">
      <a href> Marvel 蜘蛛人 歡迎你！ </a>
      <a href="">登入</a>
      <a href="">註冊</a>
    </div>
    <div class="menu">
      <a href="">我的訂單</a>
      <router-link to="/cartA"><a href="">我的購物車</a></router-link>
      <a href="">我的追蹤</a>
      <a href="">登出</a>
    </div>
  </div>
</template>
<script lang=""></script>
<style scope>
.top {
  height: 60px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-around;
}
.menu {
  /* background-color: aqua; */
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu a {
  text-decoration: none;
  padding: 10px;
  /* border-left: 1px solid #666; */
  color: rgb(204, 197, 197);
}
.home {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home a {
  text-decoration: none;
  padding: 10px;
  color: rgb(204, 197, 197);
}
.home a:nth-child(1) {
  text-decoration: none;
  color: rgb(204, 197, 197);

  font-size: 20px;
}
.home a:nth-child(3) {
  border-left: 1px solid #666;
}
</style>
