# 自定义的uniapp项目包

>由于从uniapp的github库中下载zip包得vue3版本和tsconfig版本较低，故需要主动升级版本
>
>本包使用全局pnpm
>
>本包在uniapp基础模板的基础上添加了'uniapp-vue3-ts-template'专业版模板的部分内容，该模板下载地址:[该链接](https://gitee.com/Rjiazhen/uniapp-vue3-ts-template/archive/refs/tags/v1.0.0.zip)gitee仓库代码或：
>```bash
>npx degit RJiazhen/uniapp-vue3-ts-template my-project
## 📥初期准备

1.更新```package.json```内容

>在🔗模板的基础上对package.json进行版本调整(2025/8/9)
>
>出现版本不兼容问题:
>
>```bash
>#删除node_modules
>Remove-Item -Recurse -Force node_modules
>#删除package-lock.json
>rm package-lock.json
>#安装依赖
>pnpm install
>```

3.本体升级ts版本(慎用)

```bash
pnpm install typescript@latest -D
```
4.运行至微信微信小程序是否顺畅（看需求）

```bash
pnpm run dev:mp-weixin
```

## 📥npm包（已安装）
* @dcloudio/uni-ui：uniapp官方ui库；
* @vue/tsconfig: Vue官方提供的Vue3项目的ts配置；
* pinia：Vue官方推荐状态管理包；
* sass、sass-loader：scss语法支持，uni-ui必备；
* @types/wechat-miniprogram: 微信小程序官方提供的ts类型定义文件；

>推荐使用VsCode编译器

## 🔥推荐的VsCode插件
- Auto Rename Tag
- Vue(official)

## 🤔在链接项目基础上的更改

- 调整package.json文件的版本依赖架构

## 📃项目结构
```
uniapp-vue3-ts-template
├─ .eslintrc.config.js                # ESLint 配置文件，用于代码规范检查
├─ .gitignore                         # Git 文件
├─ .vscode                            # VS Code 编辑器配置目录
├─ index.html                         # H5 端的入口文件
├─ pnpm-lock.yaml                     # pnpm 依赖锁定文件，确保依赖版本一致
├─ package.json                       # 项目配置文件，包含项目信息、脚本和依赖
├─ README.md                          # 项目说明文件
├─ shims-uni.d.ts                     # TypeScript 的类型声明文件
├─ src                                # 项目源代码目录
│  ├─ App.vue                         # 应用根组件，用于配置全局生命周期钩子
│  ├─ components                      # 自定义组件目录
│  ├─ main.ts                         # Vue 应用入口文件
│  ├─ manifest.json                   # uni-app 平台配置文件，配置 AppId、权限等
│  ├─ pages                           # 页面文件目录
│  │  └─ index.vue                    # 首页示例文件
│  ├─ pages.json                      # uni-app 页面路由和窗口样式配置
│  ├─ static                          # 静态资源目录
│  │  ├─ icons                        # 图标资源
│  │  ├─ images                       # 图片资源
│  │  └─ styles                       # 样式文件
│  │     └─ common.scss               # 全局通用样式文件
│  ├─ stores                          # Pinia 状态管理目录
│  │  └─ user-store.ts                # 用户状态管理示例文件
│  ├─ subpkg                          # 分包目录
│  │  └─ subpkg-example.vue           # 分包页面示例文件
│  ├─ types                           # TypeScript 类型声明文件
│  │  ├─ auto-imports.d.ts            # unplugin-auto-import 自动生成文件
│  │  ├─ env.d.ts                     # 全局类型声明文件，包含 Vite 客户端和自定义类型
│  │  └─ shime-uni.d.ts               # uni-app 提供的类型声明文件
├─ tsconfig.json                      # TypeScript 配置文件
├─ vite.config.ts                     # Vite 配置文件
└─ vue.config.js                      # Vue CLI 配置文件 (部分 uni-app 项目仍会保留)
```

## 💎开发规范

### 优先使用`async/await`

在处理异步操作时，应优先使用 `async/await` 语法。

仅在需要将一个不支持 Promise 的老式回调函数（如部分 uni-app API 的旧用法）转换为 Promise 时，才使用 `new Promise()` 进行封装。

### 页面文件和组件文件的命名

**页面 (Pages)**：使用**短横线命名法 (kebab-case)**。

**组件 (Components)**：使用**大驼峰命名法 (PascalCase)**。

### 文件头部添加基本说明

在所有代码文件中添加类似以下的注释，以方便快速分辨文件作用：
```
<!-- 首页 -->

// 页面展示相关的常量

```

### 给函数、变量添加注释

所有从模块中 `export` 的、供外部使用的函数、变量或类型，都需要编写 **TSDoc** 风格的注释。

通过给函数或变量添加如下TSDoc风格注释，可以直接通过鼠标悬停就查看代码相关注释，以方便开发：
``` typescript
/**
 * 向用户显示一个轻量级的消息提示框。
 * @param title - 提示框的标题内容。
 * @param icon - 提示框的图标，默认为 'none'。
 */
export const showToast = (
  title: string,
  icon: 'none' | 'success' | 'loading' | 'error' = 'none',
) => {
  uni.showToast({ title, icon });
}
```

详细编写方法可以参考[TSDoc官方文档](https://tsdoc.org/)。

## 🔑微信小程序相关配置
- **云函数相关:** 目前推荐使用hbuilderx的阿里云(开发者免费)部署云函数
- **数据相关：** 图片等数据上传到阿里云，微信云开发的'cloud://'改为阿里云的'https://'
  
  
  
  