import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import vue from "@astrojs/vue";
import sitemap from '@astrojs/sitemap';
import { proseRemarkPlugin } from './prose-remark-plugin.mjs';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkgraphviz from 'remark-graphviz';
import rehypeMermaid from 'rehype-mermaid';
import rehypeGraphviz from "rehype-graphviz";
import redotStringify from "redot-stringify";
import robotsTxt from 'astro-robots-txt';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.bangdream.moe/',

  integrations: [
    mdx(),
    sitemap(),
    vue(),
    robotsTxt({
      sitemap: [
        'https://blog.bangdream.moe/sitemap-index.xml'
      ]
    }),
  ],

  markdown: {
    redotPlugins: [
      redotStringify,
    ],
    processor: unified({
      remarkPlugins: [
        proseRemarkPlugin,
        remarkMath,
        remarkgraphviz,
      ],
      rehypePlugins: [
        rehypeKatex,
        [rehypeMermaid, { strategy: 'pre-mermaid' }],
        rehypeGraphviz,
      ],
    }),
    // syntaxHighlight: false,
  },

  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});