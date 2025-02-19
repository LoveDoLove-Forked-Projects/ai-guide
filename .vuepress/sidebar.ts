import { SidebarConfig4Multiple } from "vuepress/config";
import Deepseek from "./sidebars/deepseekSidebar";
// @ts-ignore
export default {
  "/Deepseek/": Deepseek,
  // 降级，默认根据文章标题渲染侧边栏
  "/": "auto",
} as SidebarConfig4Multiple;
