import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { proseRemarkPlugin } from './prose-remark-plugin.mjs';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.bangdream.moe/',
  integrations: [mdx(), sitemap(), vue(), tailwind({
    applyBaseStyles: false
  })],
  markdown: {
    remarkPlugins: [proseRemarkPlugin],
    rehypePlugins: [],
  },

});