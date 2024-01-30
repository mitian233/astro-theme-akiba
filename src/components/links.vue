<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from 'vue';

const isLoading = ref<boolean>(true);
const links = ref<Array<Link>>([]);

type Link = {
    name: string;
    site: string;
    siteURL: string;
    icon: string;
}
const loadData = () => {
    axios.get("https://api-mfl.bangdream.moe/myLinks.json").then((resp) => {
        links.value = resp.data;
        isLoading.value = false;
    })
}

onMounted(() => {
    loadData();
})

</script>

<template>
    <div>
        <div v-if="isLoading">
            <p class="text-center">Loading……</p>
        </div>
        <div v-else class="grid grid-cols-1 gap-3.5 md:grid-cols-2 mb-3">
            <div v-for="(card, index) in links" class="card-hover">
                <a :href="card.siteURL">
                    <div class="relative overflow-hidden border-b-2 border-r-2 border-main">

                      <img v-if="card.icon === ''" class="absolute h-full"
                                                                                           src="../assets/img/default.jpg" :id="'avatar' + index" :alt="'avatar' + card.name" />
                      <img v-else class="absolute h-full" :src="card.icon"
                           :id="'avatar' + index" :key="index" :alt="'avatar' + card.name" />
                      <div class="min-w-0 py-5 pl-28 pr-5">
                        <div class="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                          {{ card.name }}
                        </div>
                        <div
                            class="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                          {{ card.site }}
                        </div>
                      </div>
                    </div>
                </a>
            </div>
        </div>
        <p class="text-xs text-right">📧:
            <a class="link" href="mailto:kasumi@bangdream.moe">
                kasumi@bangdream.moe
            </a>
        </p>
    </div>
</template>

<style scoped>
.card-hover {
  position: relative;
  transform: translateY(0);
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-5px);
}
</style>
