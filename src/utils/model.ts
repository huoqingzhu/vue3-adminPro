
import {BoxGeometry,Mesh,MeshLambertMaterial,TextureLoader,SpriteMaterial,Sprite,Group} from "three"
interface list {
  id: number;
  x: number;

  z: number;
}
// 生成随机色
function randomColor(): string {
  let colorStr: any = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .toUpperCase();
  let str = "#" + "000000".substring(0, 6 - colorStr) + colorStr;
  if (str.length < 7) {
    return "#ffffff";
  } else {
    return str;
  }
}
// 创建一个立方体
const createCube=(color:string=randomColor()):Mesh=>{
  let cube:Mesh
  let geometry = new BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
  let material = new MeshLambertMaterial({
      color:color ,
  }); 
  cube = new Mesh(geometry, material); //网格模型对象Mesh
  return cube
}
const getSprite=(url:string="person.png", color = randomColor()):THREE.Sprite=> {
  let texture = new TextureLoader().load(url);
  var spriteMaterial = new SpriteMaterial({
    color,//设置精灵矩形区域颜色
    rotation: 0,//旋转精灵对象45度，弧度值
    map: texture,//设置精灵纹理贴图
  });
  // 创建精灵模型对象，不需要几何体geometry参数
  let sprite = new Sprite(spriteMaterial);
  sprite.scale.set(20, 20, 20);
  return sprite
}
const addPerson = (node: Group,value:list,targetMap:Map<list, Sprite>) => {
  const sprite = getSprite();
  sprite.position.set(
    value.x,
    0,
    value.z
  );
  // console.log(`当前数组长度:${list.length}`)
  targetMap.set(value,sprite)
  node.add(sprite);
};

export {createCube,getSprite,addPerson}