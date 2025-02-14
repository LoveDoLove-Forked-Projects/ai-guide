import { SidebarConfig4Multiple } from "vuepress/config";
import AboutDeeepseek from "./sidebars/aboutDeepseek";
import DeeepseekTechAnalysis from "./sidebars/deepseekTechAnalysis";
import DeeepseekUseGuide from "./sidebars/deepseekUseGuide";
import DeeepseekInfo from "./sidebars/deepseekInfo";
import DeeepseekApp from "./sidebars/deepseekApp";
import DeeepseekSource from "./sidebars/deepseekSource";
// @ts-ignore
export default {
  "/关于DeepSeek/": AboutDeeepseek,
  "/DeepSeek技术解析/": DeeepseekTechAnalysis,
  "/DeepSeek使用指南/": DeeepseekUseGuide,
  "/Deepseek行业资讯/": DeeepseekInfo,
  "/DeepSeek应用场景/": DeeepseekApp,
  "/DeepSeek资源汇总/": DeeepseekSource,
  // 降级，默认根据文章标题渲染侧边栏
  "/": "auto",
} as SidebarConfig4Multiple;
