import {defineComponent,ref,reactive, toRefs} from "vue"
import  "./grid.less"
export default defineComponent({
    setup(){
      const listData=ref<number[]>([1,2,3,4,5,6,7,8,9])
      const addData=(value:number)=>{
        console.log(value)
        listData.value.push(listData.value.length+1)
      }
      const state =reactive({
        autoFlow:false,
      }) 
      return{listData,addData,...toRefs(state)}
    },
    render(){
      return  <>
                <h1>grid</h1>
                <div>
                  <button onClick={()=>this.addData(2)}>+</button>
                  <button onClick={()=>this.autoFlow=!this.autoFlow}>{this.autoFlow?"横向":"纵向"}</button>
                </div>
                <div class="grid-container" style={this.autoFlow?`grid-auto-flow:column`:`grid-auto-flow:''`}>
                  {this.listData.map(item=>{
                    return <div class={item%2===0?"grid-item1":"grid-item2"}>{item}</div>
                  })}
                </div>
              </>
    }
})
