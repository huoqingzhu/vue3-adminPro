
import {WebGLRenderer,Scene,Vector3,Camera,Object3D,Raycaster,Vector2,OrthographicCamera,PerspectiveCamera,AmbientLight,Matrix4} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
class Three {
  public camera:Camera//相机
  public scene:Scene=new Scene();//场景
  public renderer:WebGLRenderer=new WebGLRenderer({ antialias: true, alpha: true });//渲染
  public controls:any//鼠标控制系统
  public container:HTMLElement//渲染场景
  public callBack?:Function//在reader执行的回调参数
  public raycaster = new Raycaster();//用来选择对象
  public mouse = new Vector2();//鼠标在场景中的位置
  public seleteName:string=''//鼠标选中的名字
  /**
   * 
   * @param container dome 元素
   * @param camera true 是透视投影 false 正向投影
   * @param Light true预先设置光照 
   * @param lizi  是否开启粒子效果
   */
  constructor(container:HTMLElement,camera:boolean=true,Light:boolean=true,) {
    this.container = container

    /**
     * 相机设置
     */
    let width = this.container.clientWidth; //窗口宽度
    let height = this.container.clientHeight; //窗口高度
    let k = (width / height); //窗口宽高比
    let s = 650; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象 
    // 正向投影
    if(!camera){
      this.camera = new OrthographicCamera(-s * k, s * k, s, -s, 1,10000);
    }else{//透视投影
      this.camera = new PerspectiveCamera( 50, width/height, 1, 10000 );
    }
    //渲染器我们需要阴影效果：
    this.renderer.shadowMap.enabled = true;
    /**
     * 创建渲染器对象
     */
    //辅助三维坐标系AxisHelper
    // let axisHelper = new AxesHelper(450);
    // this.scene.add(axisHelper);
    // 右 左 上 下  前后
    // this.scene.background = new CubeTextureLoader().load([ '3.jpg', '6.jpg', '5.jpg','2.jpg','1.jpg', '4.jpg',])
    // this.scene.background = new CubeTextureLoader().load([ '6.jpg', '3.jpg', '5.jpg','2.jpg','4.jpg', '1.jpg',])
    this.renderer.setSize(width, height); //设置渲染区域尺寸
    // 初始化控制系统
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    // 缩放范围
    // 是否预先设置光照
    if(Light){
      let ambient = new AmbientLight(0xffffff);
      this.scene.add(ambient); //环境光对象添加到scene场景中
    }

    // 0, -400, 500
    // this.camera.position.set(0, -1300,900); //设置相机位置
    this.camera.position.set(0, 0, 2300); //设置相机位置
    this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
  }
  // 初始化
  init = () => {
    //点光源
    this.renderer.setClearColor(0xEEEEEE, 0.0);//设置背景颜色(0x4169E1, 1)
    this.container.appendChild(this.renderer.domElement); //body元素中插入canvas对象
    this.createControls()//监听窗口变化
    this.render()
    this.controls.minZoom = 0;
    this.controls.maxZoom = 0;
    // 上下旋转范围
  }

  // 渲染函数
  render = () => {
    requestAnimationFrame(this.render); //请求再次执行渲染函数render
    this.renderer.render(this.scene, this.camera);//执行渲染操作
    // this.controls.update()
  }
  createControls = () => {
    // 监听浏览器窗口的变化
    addEventListener('resize', (e) => {
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }, false);
  }
  // 监控点击事件
  onMouseMove = (value:{name:string,x:number,y:number},spriteData:Object3D[]) => {
    addEventListener("click", (event: { clientX: number; clientY: number; }) => {
       // 拿到鼠标在屏幕的坐标
        let mouseX = event.clientX;//鼠标单击位置横坐标
        let mouseY = event.clientY;//鼠标单击位置纵坐标 
        const rect=this.container.getBoundingClientRect();//拿到div相对屏幕坐标的偏移量
        //屏幕坐标转标准设备坐标
        const x = ((mouseX - rect.left) / this.container.clientWidth) * 2 - 1;
        const y = - ((mouseY - rect.top) / this.container.clientHeight) * 2 + 1;
        let standardVector  = new Vector3(x, y);//标准设备坐标
        //标准设备坐标转世界坐标
        let worldVector = standardVector.unproject(this.camera);
        //射线投射方向单位向量(worldVector坐标减相机位置坐标)
        let ray = worldVector.sub(this.camera.position).normalize();
        //创建射线投射器对象
        let raycaster = new Raycaster(this.camera.position, ray);//光线投射的起点向量。  光线投射的方向向量，应该是被归一化的。
        raycaster.camera=this.camera//设置一下相机
        //返回射线选中的对象 找到第一个精灵  返回
        let intersects:any = raycaster.intersectObjects(spriteData,true);
        if (intersects.length > 0) {
          for (let i = 0; i < intersects.length; i++) {
            if (intersects[i].object.type === "Sprite") {
              intersects[i].object.material.color.set(0x00FF00);
              this.seleteName=intersects[i].object.name
              value.name=intersects[i].object.name
              let worldPosition = new Vector3();
              intersects[i].object.getWorldPosition(worldPosition)
              // console.log("本地坐标:"+intersects[i].object.position.x,intersects[i].object.position.y,intersects[i].object.position.z)
              // console.log("世界坐标:"+worldPosition.x,worldPosition.y,worldPosition.z)
              const pot=this.wordPosToScreen(intersects[i].object,this.camera)
              value.x=mouseX-rect.left
              value.y=mouseY-rect.top
              break
            }
            
          }
        }
    });
    addEventListener("touchstart",(e:{changedTouches:any})=>{
             // 拿到鼠标在屏幕的坐标
            let mouseX = e.changedTouches[0].clientX;//鼠标单击位置横坐标
            let mouseY = e.changedTouches[0].clientY;//鼠标单击位置纵坐标 
            const rect=this.container.getBoundingClientRect();//拿到div相对屏幕坐标的偏移量
             //屏幕坐标转标准设备坐标
             const x = ((mouseX - rect.left) / this.container.clientWidth) * 2 - 1;
             const y = - ((mouseY - rect.top) / this.container.clientHeight) * 2 + 1;
             let standardVector  = new Vector3(x, y);//标准设备坐标
             //标准设备坐标转世界坐标
             let worldVector = standardVector.unproject(this.camera);
             //射线投射方向单位向量(worldVector坐标减相机位置坐标)
             let ray = worldVector.sub(this.camera.position).normalize();
             //创建射线投射器对象
             let raycaster = new Raycaster(this.camera.position, ray);//光线投射的起点向量。  光线投射的方向向量，应该是被归一化的。
             raycaster.camera=this.camera//设置一下相机
             //返回射线选中的对象 找到第一个精灵  返回
             let intersects:any = raycaster.intersectObjects(spriteData,true);
             if (intersects.length > 0) {
               for (let i = 0; i < intersects.length; i++) {
                 if (intersects[i].object.type === "Sprite") {
                   intersects[i].object.material.color.set(0x00FF00);
                   this.seleteName=intersects[i].object.name
                   value.name=intersects[i].object.name
                   let worldPosition = new Vector3();
                   intersects[i].object.getWorldPosition(worldPosition)
                   // console.log("本地坐标:"+intersects[i].object.position.x,intersects[i].object.position.y,intersects[i].object.position.z)
                   // console.log("世界坐标:"+worldPosition.x,worldPosition.y,worldPosition.z)
                  //  const pot=this.wordPosToScreen(intersects[i].object,this.camera)
                   value.x=mouseX-rect.left
                   value.y=mouseY-rect.top
                   break
                 }
                 
               }
             }
    })   
  }
  // 添加动态模型
  addMesh(Mesh:any) {
    this.scene.add(Mesh)
  }
  // 获取屏幕坐标系
  wordPosToScreen(object: { updateMatrixWorld: () => void; matrixWorld: Matrix4; },camera: Camera):{x: number,y:number}{
    let vector = new Vector3();
    let widthHalf = 0.5 * window.innerWidth;
    let heightHalf = 0.5 * window.innerHeight;
    object.updateMatrixWorld();        /*这段代码是重要的在获取前先更新下对象的世界坐标/世界矩阵*/
    vector.setFromMatrixPosition(object.matrixWorld);
    vector.project(camera);
    vector.x = (vector.x * widthHalf) + widthHalf;
    vector.y = -(vector.y * heightHalf) + heightHalf;
    return {
        x: vector.x,
        y: vector.y
    }
  }
}
export default Three



