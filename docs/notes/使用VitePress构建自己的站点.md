<h1 id="m67MR">前言</h1>
**——————————————————————————————**

_**<font style="color:rgba(60, 60, 60, 0.7);">学习是少数人的狂欢，亦是孤独者的游戏。</font>**_

_**<font style="color:rgba(60, 60, 60, 0.7);"></font>**_

**✨****  ****本文旨在学习记录如何使用 ****<font style="color:#DF2A3F;">VitePress</font>**** 构建**

**并逐步完成属于自己的Vue 3 + Typescript学习站点，**

**一起进入前端的快乐学习吧！****✨**

**——————————————————————————————**

****

<h1 id="bNYBz">1.什么是 VitePress</h1>
VitePress官网链接：[VitePress | Vite & Vue Powered Static Site Generator](https://vitepress.dev/)

**基本概念**：

<font style="color:rgb(60, 60, 67);">VitePress 是一个</font>[静态站点生成器](https://en.wikipedia.org/wiki/Static_site_generator)<font style="color:rgb(60, 60, 67);"> （SSG），专为构建快速、以内容为中心的网站而设计。简而言之，VitePress 获取用 </font>[Markdown](https://en.wikipedia.org/wiki/Markdown)<font style="color:rgb(60, 60, 67);"> 编写的源内容，为其应用主题，并生成可以轻松部署在任何地方的静态 HTML 页面。</font>

<font style="color:rgb(60, 60, 67);"></font>

<h1 id="YfOpY">2.VitePress 初步示例</h1>
接下来展示 <font style="color:rgb(60, 60, 67);">VitePress 初步示例。</font>

<h2 id="Hok8a">2.1初始化项目</h2>
**创建项目**：

在存放项目的文件夹内打开命令行并依次输入：

```bash
npm init vitepress@latest vue3-ts-docs
```

```bash
cd vue3-ts-docs
```

```bash
npm install
```

<h2 id="J7e3O">2.2启动并运行</h2>
输入`npm run dev`运行项目：

```bash
npm run dev
```

结果如图：

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728379010553-64dc5d09-8213-4ad1-9416-d6dc9e4b6db6.png)

Ctrl点击链接： [http://localhost:5173/](http://localhost:5173/)

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728378987857-f13187ea-c27c-4086-8fff-e34077ead77b.png)

_**✨**__**初始化项目成功！**__**✨**_

<h2 id="mxLaa">2.3构建和发布</h2>


<h1 id="eS4PC">3.VitePress 完整示例</h1>
<h2 id="LZJaH">3.1项目结构</h2>
项目大致框架如下：

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728379329270-9e76ab78-1e3e-4f49-9fa1-1615b8b5d9b5.png)

<h2 id="TVsux">3.2项目配置</h2>
1.在 package.json添加：

```java
{
  "name": "vitepress-project",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "serve": "vitepress serve docs",
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "1.0.0-alpha.28",
    "vue": "3.2.44"
  },
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": [
        "@algolia/client-search"
      ]
    }
  },
  "dependencies": {
    "vitepress-theme-demoblock": "^3.0.7"
  }
}
```

2.新建项目内容：

根据需求新建文件夹：api、components、faq、guide。然后，在每个文件夹内新建 `index.md` 作为首页。

<h3 id="nCOxK">3.2.1个性化首页</h3>
1.修改起始主页配置 docs/index.md ：

```markdown
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "前端工程化"
  text: "Vue 3 + Typescript 学习文档"
  tagline: "学习是少数人的狂欢，亦是孤独者的游戏"
  image:
    src: https://wanglanhua.oss-cn-beijing.aliyuncs.com/logo.png
    alt: Chrome 浏览器插件
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 常见问题
      link: /faq/

features:
  - icon: 🎯
    title: 轻松入门
    details: 从头开始，循序渐进地学习 Vue 3 和 TypeScript。
  - icon: 📐
    title: 最佳实践
    details: 涵盖从组件设计到代码优化的实际开发经验，
  - icon: ✏️
    title: 高效开发
    details: 通过 VitePress 和 TypeScript，快速搭建高效、可维护的Vue 3 应用。
---

<div style="text-align: center; margin-top: 50px;">
  <em> ✨Happy Coding!✨ </em>
</div>
```

2.页面样式修改：

 安装 vitepress-theme-demoblock：  

```bash
npm i vitepress-theme-demoblock 
```

新建 `var.css` 和 `index.ts` ：

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728380740963-defdc23a-9747-48f7-8251-72082517e1c2.png)

```css
:root {
  /* 标题 */
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #3ab394 10%, #138d6f 100%);

  /* 图标背景 */
  --vp-home-hero-image-background-image: linear-gradient(135deg , #5fcba9 10%,#138d73 100%);
  --vp-home-hero-image-filter: blur(150px);

  /* brand按钮 */
  --vp-button-brand-border: #5fcba9;
  --vp-button-brand-text: #fff;
  --vp-button-brand-bg: #138d73;

  --vp-button-brand-hover-border: #a0d5c4;
  --vp-button-brand-hover-text:  #fff;
  --vp-button-brand-hover-bg:  #247b60;

  --vp-button-brand-active-border: #F6CEEC;
}
```

```typescript
import DefaultTheme from 'vitepress/theme'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import './styles/var.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
  }
}
```

3.配置顶部导航 docs\.vitepress\config.ts  ：

```typescript
import { defineConfig } from 'vitepress';

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Vue 3+ Typescript 学习文档",
    description: "详细学习 Vue 3 和 Typescript 的指南",
    themeConfig: {   
        siteTitle: "前端学习",
        logo: "/assets/logo.png",
        nav: [
            { text: "首页", link: "/" },
            { text: "指南", link: "/guide/" },
            { text: "组件", link: "/components/" },
            { text: "API 参考", link: "/api/" },
            { text: "常见问题", link: "/faq/" },
        ],

    socialLinks: [
        { icon: "github", link: "https://github.com/vuejs/vitepress"},
    ],
    sidebar: {
        "/guide/":[
        {
            text:"开始",
            collapsible: true,
            items:[
                { text: "介绍", link:"/guide/"}, 
                { text: "安装", link:"/guide/installation" },
                { text: "基本概念", link:"/guide/concepts" },
                ],
            },
        ],
        "/components/": [
            {
                text: "常用组件",
                items: [
                    { text: "介绍", link:"/components/"}, 
                    { text: "按钮 Button", link:"/components/button" },
                    { text: "基本概念", link:"/components/table" },
                ],
            },
        ],
    },
    footer: {
        message: "用心学习 Vue3 和 TypeScript！",
        copyright: "Ccopyright © 2024 lance",
    },
},
});

```

<h3 id="wTOlp">3.2.2效果</h3>
运行项目，展示页面效果如图：

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728381033829-69c8817f-2e66-430e-9895-c46336f1a104.png)

<h2 id="iMMui">3.3文档页面</h2>
详细内容后续添加，每天完善自己的学习内容！

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728381190996-a362eae8-f9ab-4e04-b337-bc392e1870e4.png)

<h2 id="sLmNg">3.4Vercel部署步骤</h2>
1.部署 Vercel 前，先创建新的git仓库，把项目提交到git仓库中：

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728381963287-8db085bd-3058-4c9f-828c-ff082732c50a.png)

```bash
git init 
git add .
git commit -m "前端工程化学习文档仓库初始化"
git branch -M main
git remote add origin https://github.com/GZxLance/vue3-ts-docs.git
git push -u origin main
```

上传成功如图：

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728382015737-318f6680-d14d-4ce4-9044-147cbeecca02.png)



2.部署 Vercel ，进入网站：[https://vercel.com/](https://vercel.com/)

使用github登录（或创建新用户）

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728382219179-381431b2-2a06-497c-90d2-ec50a7dd1aa8.png)

点击右上角创建新的项目：

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728382259235-d3d12561-681b-462f-b902-aeba314f628e.png)

找到我们所需的项目，点击部署：

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728382320206-4e778731-4643-4897-b083-9c69edc8f0dd.png)

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728382357131-68e11752-1ce6-48e1-833d-c8c5132dac62.png)

部署成功，即可点击链接访问页面：

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728382419245-3d938db4-bb0d-4a7b-940f-2eda8ca3e09b.png)

页面展示：

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728382455143-af1e8387-b7c9-4c54-b6bd-9908737fb6fd.png)

<h2 id="QVBQ9">3.5编写标准的 README</h2>
1.README.md文件：

```markdown
<p align="center">
<img src="https://wanglanhua.oss-cn-beijing.aliyuncs.com/%E5%8B%8B%E7%AB%A0%E8%A1%A8%E5%BD%B0.png" style="width:200px;">
</p>
<h1 align="center">Vue 3 + TypeScript 学习文档</h1>
<p align="center">
无论你是初学者还是有经验的开发者，这个站点都会帮助你掌握最新的 Vue 3 技术与 TypeScript
实践，从基础到进阶，全方位提升你的前端开发能力。
</p>

<p>
<!-- 后面可以加入 ？color=red 这样的参数改变徽章颜色，默认为绿色 -->

![GitHub License](https://img.shields.io/github/license/GZxLance/vue3-ts-docs?label=liense&color=%2325c2a0)
![GitHub Stars](https://img.shields.io/github/stars/GZxLance/vue3-ts-docs)
![GitHub Forks](https://img.shields.io/github/forks/GZxLance/vue3-ts-docs)
![Build Status](https://img.shields.io/github/workflow/status/GZxLance/vue3-ts-docs/CI)
![NPM Version](https://img.shields.io/npm/v/vue)
![NPM Downloads](https://img.shields.io/npm/dw/vue)
![Maintenance](https://img.shields.io/maintenance/yes/2024)

</p>

## 🔥 features

- 从头开始，循序渐进地学习 Vue 3和 TypeScript。
- 涵盖从组件设计到代码优化的实际开发经验。
- 通过 VitePress 和 TypeScript，快速搭建高效、可维护的 Vue 3 应用。

```

生成GitHub许可证的网址：[GitHub License | Shields.io](https://shields.io/badges/git-hub-license)

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728382683861-a3b46422-e38f-4a94-9a39-4f1bbc93809f.png)

在git页面效果如图：

![](https://cdn.nlark.com/yuque/0/2024/png/38980237/1728382760058-db9a24b6-540d-4b8b-b5af-9bd45e35be49.png)



2.LICENSE 文件：

```markdown
MIT License

Copyright (c) 2024 lance

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

