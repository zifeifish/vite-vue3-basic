<script lang="ts">
import { defineComponent, ref, provide, inject } from 'vue'
import Modal from './components/Modal.vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  components: { Modal, HelloWorld },
  setup() {
    const modalIsOpen = ref(false)
    /**
     * provide 提供数据
     * 无论组件层次结构有多深，父组件都可以作为其所有子组件的依赖提供者。
     * 这个特性有两个部分：父组件有一个 provide 选项来提供数据，
     * 子组件有一个 inject 选项来开始使用这些数据。
     */
    provide('modalIsOpen', modalIsOpen)
    const userInfo = inject<{ name: string }>('userInfo')
    const openModal = () => {
      modalIsOpen.value = true
    }
    const onModalClose = () => {
      modalIsOpen.value = false
    }
    return {
      modalIsOpen,
      openModal,
      onModalClose,
      userInfo
    }
  }
})
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" /><br>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /><br>
    <button style="margin-top:10px;" @click="openModal">open modal</button> <br>
    <h1>username: {{ userInfo.name }}</h1>
    <Modal :isOpen="modalIsOpen" @close-modal="onModalClose">my modal !!!!</Modal>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
