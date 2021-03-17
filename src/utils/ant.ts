import {
  Input,
  Button,
  Menu,
  Card,
} from "ant-design-vue";
import IconFont from "../components/Icon/createFromIcon";//自定义图标库
const ant = {
  install(Vue: {
    component: (arg0: string, arg1: any) => void;
    use: (arg0: any,) => void;
  }) {
    Vue.component(Button.name, Button);
    Vue.component(Input.name, Input);
    Vue.component("Icon-font", IconFont);
    Vue.use(Card)
    Vue.use(Menu)
    
  }
};
export default ant;
