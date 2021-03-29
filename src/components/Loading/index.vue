<template>
  <div class="loading center">
    <div class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.loading {
  position: absolute;
  width: 100%;
  height: 100%;
}
.spinner {
  padding: 0px;
  margin: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* background-color: rgba(39, 36, 36,0.2); */
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}
.spinner > div {
  background-color: #48d1cc;
  height: 30px;
  width: 6px;
  display: inline-block;
  margin: 0 2px;
  -webkit-animation: stretchDelay 1.2s infinite ease-in-out;
  animation: stretchDelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
@-webkit-keyframes stretchDelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchDelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
