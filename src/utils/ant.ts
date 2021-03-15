import {
  // Input,
  Button,
  Menu,
  Affix,
  Divider,
  // Tabs,
  // Spin,
  // Row,
  // Col,
  Card,
  // Layout,
  // Breadcrumb
  // Popover,
  // Table,
  // Statistic,
  // DatePicker,
  Dropdown,
  Drawer,
  // Form,
  // Select,
  // Modal,
  // Popconfirm
} from "ant-design-vue";

const ant = {
  install(Vue: {
    component: (arg0: string, arg1: any) => void;
    use: (arg0: any,) => void;
  }) {
    Vue.component(Button.name, Button);
    // Vue.component(Input.name, Input);
    // Vue.component(Card.name, Card);
    // Vue.component(Popover.name, Popover);
    // Vue.component(Table.name, Table);
    Vue.component(Dropdown.name, Dropdown);
    // Vue.component(Spin.name, Spin);
    // Vue.component(Statistic.name, Statistic);
    // Vue.component(Modal.name,Modal)
    // Vue.use(Popconfirm)
    // Vue.use(DatePicker)
    // Vue.use(Select)
    // Vue.use(Row)
    // Vue.use(Col)
    Vue.use(Divider)
    Vue.use(Menu)
    Vue.use(Drawer)
    Vue.use(Affix)
    // Vue.use(Layout)
    Vue.use(Card)
    // Vue.use(Breadcrumb)

  }
};
export default ant;
