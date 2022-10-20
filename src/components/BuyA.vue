<template>
  <topA></topA>
  <div class="container">
    <div class="name">
      <div class="home">
        首頁 &nbsp;/&nbsp; 服飾 &nbsp;/&nbsp; 閃電標運動機能短袖T-Shirt
      </div>
    </div>
    <div class="product">
      <div class="pic">
        <img :src="productList[0].img" alt="" />
      </div>
      <div class="content">
        <div class="txt">
          <h3>{{ productList[0].title }}</h3>
          <p>特價:{{ productList[0].price }}</p>
          <p>原價:{{ productList[0].oldPrice }}</p>
          <p>{{ productList[0].name }}</p>
          <br />
        </div>
        <div class="size">
          <div class="sizeA">
            尺碼表
            <n-tree-select
              :options="options"
              default-value=""
              @update:value="productStore.handleUpdateValue"
            />
          </div>
          <div class="sizeB">
            數量
            <input type="number" v-model="productStore.count" />
            <button @click="productStore.addCount">+</button>
            <button @click="productStore.redCount">-</button>
          </div>
        </div>
        <div class="btn">
          <button
            type="button"
            class="btnA"
            @click="cartStore.addCart(productList[0])"
          >
            <i class="fi fi-rr-shopping-cart"></i>&nbsp;加入購物車
          </button>
          <div class="progress">庫存剩餘:{{ rest.inventory }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="format">
    <img
      src="https://www.152.com.tw/domain/www/upload/file/220607175209ee40f.jpg"
      alt=""
    />
  </div>
  <footerA></footerA>
</template>
<script lang="" setup>
import { useProductStore } from "../store/index";
import { useCarStore } from "../store/cart.ts";
import { storeToRefs } from "pinia";
import { reactive, ref, onMounted } from "vue";
// import { useRouter } from "vue-router";
import { NTreeSelect } from "naive-ui";
import topA from "./topA";
import footerA from "./footer";

const productStore = useProductStore();
const cartStore = useCarStore();
productStore.getProduct();
// const item = ref(productList);
const { productList } = storeToRefs(productStore);
const rest = ref({
  inventory: 6,
});
const options = reactive([
  {
    label: "X",
    key: "X",
  },
  {
    label: "L",
    key: "L",
  },
  {
    label: "S",
    key: "S",
  },
]);

if (localStorage.getItem("inventory")) {
  rest.value = JSON.parse(localStorage.getItem("inventory"));
}

// onMounted(() => {
//   localStorage.setItem("totalP", JSON.stringify(productStore));
// }),
// const { count } = storeToRefs(count);
// const router = useRouter();

// const addToCart = () => {
//   //   router.push("/buycar");
// };
// function handleUpdateValue(value, option) {
//   console.log(value, option);
// }
</script>
<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
.name {
  width: 100%;
  height: 5%;
}
.home {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: aqua; */
}
.product {
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 233, 233);
}
.pic {
  width: 60%;
  height: 90%;
}
.pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
}
.content {
  width: 30%;
  height: 90%;
  background-color: #fff;
  padding-left: 15px;
}
.txt {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.txt h3 {
  margin: 50px 0;
}
.txt p {
  margin: 10px 0;
  color: #666;
}
.txt p:nth-child(3) {
  font-size: 10px;
}
.size {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
}
.sizeA {
  width: 60%;
  height: 50%;
}
.sizeB {
  width: 60%;
  height: 50%;
}
.sizeB input {
  width: 70%;
}
.sizeB button {
  width: 20px;
  height: 20px;
}
.btn {
}
.progress {
  width: 100px;
  height: 50px;
  margin-top: 30px;
}
.btnA {
  /* background-color: red; */
  width: 200px;
  height: 60px;
}
.btnA:hover {
  background-color: red;
}
.format {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
}
.format img {
  width: 80%;
  height: 800px;
}
</style>
