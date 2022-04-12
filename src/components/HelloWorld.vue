<script setup lang="ts">
import { ref, computed, watch } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const increase = () => {
  count.value++
}
const doubleCount = computed(() => {
  // 计算属性记得return出去
  return count.value * 2
})


// 监听多个值用数组形式[value1,value2,...]
watch([count, doubleCount], (newValue, oldValue) => {
  document.title = 'hello' + count.value
  console.log(newValue, oldValue)
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <h2>count: {{ count }}</h2>
  <h2>double count: {{ doubleCount }}</h2>

  <button type="button" @click="increase">count is: {{ count }}</button>

</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
