# Akiba - 一个简单的 Astro 博客主题

该主题由 [Date](https://github.com/JustGoodUI/dante-astro-theme) 修改而来，感谢原作者的开源。这是一款单作者的博客主题，使用 [Astro.js](https://astro.build/) 构建，使用 [Tailwind CSS](https://tailwindcss.com/) 作为样式框架。增加了主题对中文的支持，以及一些其他的功能。如果你喜欢，或是正在使用这个项目，可以为我点一个免费的 🌟Star 嘛~谢谢你啦(/////)

## 快速上手

### 1. 使用模板

编辑 `src/data/site-config.ts` 文件中的配置，然后开始写作吧！

*注意：友情链接页面需要自行前往 `src/components/links` 修改 vue 组件*

## 主题特性

- ✅ 改进的中文支持
- ✅ 支持使用 KaTeX 渲染数学公式
- ✅ Graphviz*
- ✅ Mermaid* (非默认开启: 需要在 `astro.config.mjs` 手动取消注释)(初次使用需要先运行 `npx playwright install`)
- ✅ 支持中文文章标签
- ✅ 全站过渡动画
- ✅ 暗色模式
- ✅ 支持首页自介和简单的 bio，更可以添加 [Hitokoto](https://hitokoto.cn/)
- ✅ 支持作品集（需要手动开启）
- ✅ 集成评论系统，使用 [Giscus](https://giscus.app/)，支持 GitHub 登录
- ✅ 友好的 SEO
- ✅ 支持 RSS 订阅
- ✅ 支持 Sitemap
- ✅ 支持 Markdown 和 MDX
- ✅ 支持 Tailwind CSS
- ✅ 支持移动端响应式布局
- ✅ 高度个性化的主题配置
- ✅ 支持自定义页面
- ✅ Vue 3 自定义组件

*目前 Graphviz 和 Mermaid 和语法高亮冲突，需要在 `astro.config.mjs` 添加 `syntaxHighlight: false` （已注释）关闭语法高亮才可正常渲染。

## 模板集成

- @astrojs/tailwind - https://docs.astro.build/en/guides/integrations-guide/tailwind/
- @astrojs/sitemap - https://docs.astro.build/en/guides/integrations-guide/sitemap/
- @astrojs/mdx - https://docs.astro.build/en/guides/markdown-content/
- @astrojs/rss - https://docs.astro.build/en/guides/rss/

## 🚀 项目结构

在主题文件夹中，你会看到以下文件夹和文件：

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── icons/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

Astro 会在 `src/pages/` 目录中寻找 `.astro` 或 `.md` 文件。每个页面都会根据其文件名作为路由暴露。

`src/components/` 目录中没有特殊之处，但这是我们喜欢放置任何 Astro（`.astro`）组件的地方。

`src/content/` 目录包含相关 Markdown 和 MDX 文档的“集合”。使用 `getCollection()` 从 `src/content/blog/` 检索文章，并使用可选的模式检查你的 frontmatter。查看 [Astro 的内容集合文档](https://docs.astro.build/en/guides/content-collections/) 以了解更多信息。

任何静态资源，例如图片，都可以放在 `public/` 目录中。

## npm 命令

所有命令都是从项目根目录的终端运行的：

| 指令| 动作|
| :------------------------ | :----------------------------------------------- |
| `npm install` | 安装项目依赖 |
| `npm run new` | 创建新的博客文章 |
| `npm run dev` | 在 `localhost:4321` 启动测试服务器 |
| `npm run build` | 构建你的博客静态文件至 `./dist/` 文件夹 |
| `npm run preview` | 在发布静态文件之前本地预览 |
| `npm run astro ...` | 运行例如 `astro add`, `astro check` 等 Astro 任务 |

## 想要了解更多关于 Astro.js 的信息？

查看 [Astro.js 文档](https://docs.astro.build) 或者加入我们的 [Discord 服务器](https://astro.build/chat)。

## 鸣谢

- [JustGoodUI](https://github.com/JustGoodUI/)

## 许可证

该项目依照原项目的许可证 [GPL-3.0](https://github.com/mitian233/astro-theme-akiba/blob/main/LICENSE) 进行开源，后续开发也将遵循该许可证进行。
