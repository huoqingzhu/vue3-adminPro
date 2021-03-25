
import {BoxGeometry,Mesh,MeshLambertMaterial} from "three"
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
const createCube=(color:number=0x0000ff):Mesh=>{
  let cube:Mesh
  let geometry = new BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
  let material = new MeshLambertMaterial({
      color:color ,
  }); 
  cube = new Mesh(geometry, material); //网格模型对象Mesh
  return cube
}



export {createCube}