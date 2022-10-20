<template>
  <div class="footer">
    <div class="footer-box">
      <div class="footer-txt">
        <p>
          Morning rain sprinkling the tea plantation with sunshine,<br />
          and welcomes all sprouts of the mountain.
        </p>
        <p>
          聯絡資訊<br />電話 \ (+886)938 810 425<br />
          地址 \ 520 新北市蘆洲區ＸＸ路ＸＸ巷
          <br />Email \ Abcdefghi@gmail.com
        </p>
        <p>追蹤我們</p>
      </div>
      <div class="footer-pic">
        <img
          src="https://i2.wp.com/lh6.googleusercontent.com/-9-yuSWFqLSI/TocVtbnvRHI/AAAAAAAAAc8/mXJZGXrY61I/s500/spiderman.png?ssl=1"
          alt=""
        />
      </div>
    </div>
    <div class="copyright">
      Copyright &copf; 2022 記得每天都要吃早餐和喝牛奶
    </div>
  </div>
</template>
<script lang="">
import { defineComponent } from "vue";
export default defineComponent({
  name: "footerA",
});
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.footer {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, rgb(18, 18, 21), rgb(18, 18, 18));
}
.footer-box {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid white;
}
.footer-txt {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4em;
}
.footer-pic {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-pic img {
  width: 50%;
  height: 60%;
  vertical-align: middle;
}
.footer-txt p {
  color: aliceblue;
  margin-top: 5%;
}
.copyright {
  height: 10%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
}
</style>
