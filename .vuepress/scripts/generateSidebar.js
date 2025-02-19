const fs = require("fs");
const path = require("path");

function generateSidebarConfig(dirPath) {
  // 将相对路径转为绝对路径
  const absolutePath = path.resolve(process.cwd(), dirPath);
  // 创建一个数组，存储 侧边栏目录列表
  let sidebarItems = [];
  // 如果根目录存在 README.md ,添加空字符串
  if (fs.existsSync(path.join(absolutePath, "README.md"))) {
    sidebarItems.push("");
  }

  /**
   * 递归的处理目录
   * @param {*} currentPath 当前的目录
   * @param {*} relativePath  当前目录的相对路径
   * @param {*} config  当前的配置
   */
  function processDirectory(currentPath, relativePath = "", config = sidebarItems) {
    // 获取目录下的所有文件
    const items = fs.readdirSync(currentPath, { withFileTypes: true });
    // 文件列表
    const files = [];
    // 目录列表
    const directories = [];
    // 遍历 items 得到所有的文件和目录
    items.forEach((item) => {
      if (item.isDirectory() && !item.name.startsWith(".")) {
        directories.push(item);
      } else if (item.isFile() && item.name.endsWith(".md") && item.name !== "README.md") {
        files.push(item);
      }
    });
    // 处理文件
    if (files.length > 0) {
      const filePaths = files.map((file) => {
        const filePath = relativePath
          ? `${relativePath}/${file.name.replace(".md", "")}`
          : file.name.replace(".md", "");
        return filePath;
      });
      // 将文件路径添加到 config 中

      filePaths
        .sort((a, b) => a.length - b.length)
        .forEach((filePath) => {
          config.push(filePath);
        });
    }
    if (directories.length > 0) {
      directories.forEach((dir) => {
        const subDirectoryPath = path.join(currentPath, dir.name);
        const newRelativePath = relativePath ? `${relativePath}/${dir.name}` : dir.name;

        // 查找当前目录是否已经存在于配置中
        let existingDir = config.find((item) => item.title === dir.name);
        if (!existingDir) {
          existingDir = {
            title: dir.name,
            collapsable: true,
            children: [],
          };
          config.push(existingDir);
        }

        processDirectory(subDirectoryPath, newRelativePath, existingDir.children); // 传递 existingDir.children 作为 config
      });
    }
  }
  processDirectory(absolutePath);
  // 返回计算得到的 sidebar 数组
  return sidebarItems;
}

// 接收命令行参数：相对路径；默认使用当前目录作为兜底

const targetDir = process.argv[2] || ".";

try {
  // 检查目录是否存在
  const isExisting = fs.existsSync(targetDir);
  if (!isExisting) {
    throw new Error(`目录 “${targetDir}” 不存在`);
  }
  // 目录存在，生成 sidebar 配置数组
  const sidebarConfig = generateSidebarConfig(targetDir);
  // 输出内容到 temp.ts 中
  const content = `
export default ${JSON.stringify(sidebarConfig, null, 2)}
  `;
  const fileName = "temp.ts";
  fs.writeFileSync(fileName, content, "utf-8");
  // 提示生成成功
  console.log(`侧边栏配置已经生成到 ${fileName} 文件中`);
} catch (error) {
  console.error("错误：", error instanceof Error ? error.message : "未知错误");
  process.exit(1);
}
