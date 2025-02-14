import { SidebarConfig4Multiple } from "vuepress/config";
import Deeepseek from "./sidebars/deepseek";
// @ts-ignore
export default {
  // 降级，默认根据文章标题渲染侧边栏
  "/Deepseek/": Deeepseek,
  "/": "auto",
} as SidebarConfig4Multiple;
