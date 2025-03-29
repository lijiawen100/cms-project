// 从 './AppMain' 文件导入默认导出，再将其以命名导出 `AppMain` 的形式对外暴露
export {default as AppMain} from './AppMain'
// default: 表示导入目标模块的默认导出（export default ...）。
// as AppMain: 将导入的默认导出重命名为 AppMain，作为当前模块的命名导出。
// from './AppMain': 指定要导入的模块路径。
export {default as NavBar} from './NavBar'
export {default as Sliderbar} from './Sliderbar'


