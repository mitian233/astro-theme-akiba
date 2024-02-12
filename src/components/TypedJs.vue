<script setup lang="ts">
import { VueTypedJs } from "vue3-typed-ts";
import axios from "axios";
import { onMounted, ref } from "vue";

const strings = ref<Array<string>>([]);

onMounted(() => {
  axios.get('https://v1.hitokoto.cn/').then((res: any) => {
    const hitokotoRes = JSON.parse(JSON.stringify(res.data));
    strings.value = [hitokotoRes.hitokoto, hitokotoRes.from];
    console.log(strings)
  })
})
</script>

<template>
  <section class="w-full flex flex-col gap-8 mb-16 sm:mb-24">
    <div class="hero hero__bg">
      <div class="hero__content h-[40vh] flex flex-col justify-center items-center">
        <VueTypedJs :strings="strings" :type-speed="50" :start-delay="300" :loop="true" :show-cursor="true">
          <span class="typing"></span>
        </VueTypedJs>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero__bg {
  position: relative;
}

.hero__bg::before {
  z-index: -1;
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url('/welcome-cover.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
}
</style>
