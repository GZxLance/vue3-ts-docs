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
            { text: "学习笔记", link: "/notes/" },
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
                { text: "学习笔记", link: "/notes/" },
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
        "/notes/":[
            {
                text: "学习笔记",
                items: [
                    {text: "介绍", link:"/notes/"},
                    {text: "使用VitePress构建自己的站点", link:"/notes/使用VitePress构建自己的站点"},
                    {text: "1.在VSCode中编写TypeScript代码", link:"/notes/1.在VSCode中编写TypeScript代码"},
                    {text: "2.前端发展的几个时代", link:"/notes/2.前端发展的几个时代"},
                    {text: "3.掌握前端“三驾马车”", link:"/notes/3.掌握前端“三驾马车”"},
                    {text: "4.npm、pnpm和yarn", link:"/notes/4.npm、pnpm和yarn"},



                ]
            }
        ]
    },
    footer: {
        message: "用心学习 Vue3 和 TypeScript！",
        copyright: "Ccopyright © 2024 lance",
    },
},
});
