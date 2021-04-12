import Three from "../../utils/map";
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import { getSprite, createCube, addPerson } from "../../utils/model";
import { Group, Sprite } from "three";
import TWEEN from "@tweenjs/tween.js";
import { SettingFilled } from "@ant-design/icons-vue";
interface list {
  id: number;
  x: number;
  z: number;
}
let map: Three;
const spriteGrop = new Group(); //小人集合
const targetMap: Map<list, THREE.Sprite> = new Map(); //
let requestAnimationFrameID: number;
let setIntervalID: number;
let isOne = false; //是否是第一次
const state = reactive({
  slowMotion: false,
  name: "开启缓动",
});
watch(
  () => state.slowMotion,
  (a) => {
    a ? (state.name = "关闭缓动") : (state.name = "开启缓动");
  }
);
// 初始化map
function init() {
  let container: any = document.getElementById("map2");
  map = new Three(container, true, true);
  map.scene.add(spriteGrop);
  map.init();
  for (let i = 0; i < 10; i++) {
    const data = {
      id: i,
      x: Math.floor(Math.random() * 500 - 250),
      y: 0,
      z: Math.floor(Math.random() * 500 - 250),
    };
    addPerson(spriteGrop, data, targetMap);
  }
}

const add = () => {
  const data = {
    id: targetMap.size,
    x: Math.floor(Math.random() * 1000 - 250),
    z: Math.floor(Math.random() * 1000 - 250),
  };
  addPerson(spriteGrop, data, targetMap);
};

const deletePerson = () => {
  if (targetMap.size === 0) {
    return;
  }
  console.log(targetMap.keys());
  // spriteGrop.remove(targetMap.size);
  // spriteList.pop();
};
// 模拟更新位置
const changePosition = () => {
  targetMap.forEach((value, key) => {
    // console.log(key);
    key.x = Math.floor(Math.random() * 1000 - 250);
    key.z = Math.floor(Math.random() * 1000 - 250);
    // console.log(key);
    let x = record[`x${key.id}`];
    let z = record[`z${key.id}`];
    coords[`x${key.id}`] = x;
    coords[`z${key.id}`] = z;
    record[`x${key.id}`] = key.x;
    record[`z${key.id}`] = key.z;
  });
};
let coords: any = {};
let record: any = {};
let tween = new TWEEN.Tween(coords).to(record, 1000);
// 缓动
const tweens = () => {
  tween = new TWEEN.Tween(coords).to(record, 1000);
  tween
    .onUpdate((position) => {
      // console.log(position);
      targetMap.forEach((value, key) => {
        value.position.set(position[`x${key.id}`], 0, position[`y${key.id}`]);
      });
    })
    .start();
};
// 正常更新
const positionChange = () => {
  targetMap.forEach((value, key) => {
    value.position.set(key.x, 0, key.z);
  });
};
function animate() {
  requestAnimationFrameID = requestAnimationFrame(animate);
  tween.update();
}
animate();
const stopAnimation = () => {
  // cancelAnimationFrame(requestAnimationFrameID);
  clearInterval(setIntervalID);
};
const startAnimation = () => {
  changePosition(); //模拟位置数据更新
  if (state.slowMotion) {
    tweens();
  } else {
    positionChange();
  }
};
setIntervalID = setInterval(() => {
  startAnimation();
}, 1000);
onMounted(() => {
  init();
});
export {state,}