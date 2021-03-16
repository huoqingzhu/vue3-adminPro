import {
  Input,
  Button,
  Menu,
  Card,

} from "ant-design-vue";
const ant = {
  install(Vue: {
    component: (arg0: string, arg1: any) => void;
    use: (arg0: any,) => void;
  }) {
    Vue.component(Button.name, Button);
    Vue.component(Input.name, Input);
    Vue.use(Card)
    Vue.use(Menu)
  }
};
export default ant;
