<template>
  <div>
    <h1>Grid网格布局</h1>
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item">8</div>
      <div class="grid-item">9</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: column;
  background-color: #2196f3;
  /*  声明行间距和列间距  */
  grid-gap: 20px;
  // padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
}
</style>
