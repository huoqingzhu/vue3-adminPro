
import { createFromIconfontCN } from '@ant-design/icons-vue';

// 自己的icon地址
let iconfontUrljs = `//at.alicdn.com/t/font_1877468_envyz1sjpeb.js`
// 新增 导出
 const IconFont = createFromIconfontCN({
    scriptUrl: iconfontUrljs
});
export default IconFont
// 动态插入
