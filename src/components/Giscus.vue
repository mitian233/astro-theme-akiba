<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Giscus from '@giscus/vue';
import siteConfig from '../data/site-config';
const gc = siteConfig.giscusConfig;

const theme = ref<string>('light');

onMounted(() => {
    theme.value = localStorage.getItem('theme') || 'light';
    window.addEventListener('storage', (e) => {
        console.log(e);
    });
})


</script>

<template>
    <Giscus v-if="gc" id="comments" :repo="gc.dataRepo" :repoId="gc.dataRepoId" :category="gc.dataCategory"
        :categoryId="gc.dataCategoryId" :mapping="gc.dataMapping" :strict="gc.dataStrict"
        :reactionsEnabled="gc.dataReactionsEnabled" :emitMetadata="gc.dataEmitMetadata"
        :inputPosition="gc.dataInputPosition" :theme="theme === 'light' ? gc.dataTheme : gc.dataThemeDark"
        :lang="gc.dataLang" :loading="gc.dataLoading"></Giscus>
</template>

<style scoped></style>