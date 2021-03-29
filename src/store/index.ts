import { createStore } from "vuex";
export default createStore({
  state: {
    num:10,
    isLoading:false,
  },
  mutations: {
    changeLoading(state,value){
      state.isLoading=value;
    },
    addNum(state){
      state.num=state.num+10
    }
  },
  actions: {
    setData(context,value){
      context.commit('setData',value)
    },
  },
  modules: {}
});
