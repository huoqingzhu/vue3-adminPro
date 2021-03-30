<template>
  <div>
    <div class="animation">animation</div>
    <button class="button">请点击我</button>
  </div>
</template>
<style lang="less" scoped>
.hover {
  height: 40px;
  width: 60px;
  transition: 1s height, 1s 1s width;
  background-color: #ccc;
}
.hover:hover {
  height: 60px;
  width: 80px;
}
// infinite 无限播放
.animation {
  width: 2rem;
  height: 1rem;
  background-color: pink;
}
.animation {
  animation: 2s rainbow infinite;
}
@keyframes rainbow {
  0% {
    background: #c00;
  }
  50% {
    background: orange;
  }
  100% {
    background: yellowgreen;
    transform: translateX(2rem);
  }
}
.button {
  position: relative;
  background-color: #4caf50;
  border: none;
  font-size: 28px;
  color: #ffffff;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 9px #999;
  cursor: pointer;
}
.button:hover {
  background-color: #3e8e41;
}

.button:after {
  content: "";
  background: #f1f1f1;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}
</style>
