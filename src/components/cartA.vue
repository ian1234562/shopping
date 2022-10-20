<template>
  <div class="order-card">
    <div class="order-list">
      <div v-for="(item, index) in bbb" :key="index">
        <div class="order-info">
          <div class="pic">
            <img :src="item.img" alt="" />
          </div>
          <div class="txt">
            <h3>{{ item.title }}</h3>
            <span>{{ item.price }}</span>
            <p>X{{ item.quantity }}</p>
            <p>Size:{{ item.size.key }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="order-total">
      <span>總金額:{{ totalP }}</span
      ><br />
      <button @click="cartStore.clearCart">結算</button>
    </div>
  </div>
</template>
<script lang="" setup>
import { useCarStore } from "../store/cart";
import { storeToRefs } from "pinia";
import { watch, onMounted, ref, reactive } from "vue";
const cartStore = useCarStore();
// const aaa = ref(cartStore.cartList);
console.log();
const bbb = ref({});
const totalP = ref("");
if (localStorage.getItem("cartListInfo")) {
  bbb.value = JSON.parse(localStorage.getItem("cartListInfo"));
}
if (localStorage.getItem("totalP")) {
  totalP.value = JSON.parse(localStorage.getItem("totalP"));
}
// const totalPrice = ()=>{
//   bbb.
// }
// const bbb = JSON.parse(localStorage.getItem('cartListInfo')
// onMounted(() => {
//         if (localStorage.getItem('cartListInfo') !== null) {
//             bbb.value= JSON.parse(localStorage.getItem('cartListInfo')!);
//           } else {
//             alert("ssss")
//           }
// });
// console.log(cartList);
// const data1 = storeToRefs(cartStore.cartList);
// console.log(data1);
// console.log(data1);
// watch(data1, (newval) => {
//   localStorage.setItem("data1", JSON.stringify(newval));
// });
// onMounted(() => {
//   localStorage.setItem("dataInfo", JSON.stringify(data));
// });
// var data1 = JSON.parse(localStorage.getItem("dataInfo"));
// cartStore.$subscribe((mutation, state) => {
//   localStorage.setItem(cartStore.cartList.name, JSON.stringify(state));
// });
// const data1 = JSON.parse(localStorage.getItem(cartStore.cartList.name));
// console.log(data1);

// console.log(val);
// const { cartList } = storeToRefs(cartStore);
// const isCartList = storeToRefs(cartStore.cartList);
// onMounted(() => {
//   localStorage.getItem("cartList");
//   console.log(isCartList);

//   if (localStorage.getItem("cartList")) {
//     isCartList.value = JSON.parse(localStorage.getItem("cartList"));
//   }
// });
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.order-card {
  width: 100%;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: aquamarine; */
}
.order-list {
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* background-color: aqua; */
}
.order-info {
  width: 100%;
  height: 300px;
  display: flex;
  border: 1px solid red;
  background-color: red;
}
.pic {
  width: 50%;
  height: 300px;
}
.pic img {
  width: 100%;
  height: 100%;
  /* vertical-align: middle; */
}
.txt {
  width: 50%;
}
.order-total {
  width: 100%;
  height: 10%;
  /* background-color: aqua; */
}
.order-total button {
  width: 70px;
  height: 30px;
}
.txt {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.txt h3 {
  width: 100%;
  height: 30%;
}
.txt span {
  width: 100%;

  height: 20%;
}
.txt p {
  width: 100%;

  height: 50%;
  font-size: 24px;
}
</style>
