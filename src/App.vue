<script lang="ts">
import { defineComponent, ref } from 'vue'
import Modal from './components/Modal.vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  components: { Modal, HelloWorld },
  setup() {
    const modalIsOpen = ref(false)
    const openModal = () => {
      modalIsOpen.value = true
    }
    const onModalClose = () => {
      modalIsOpen.value = false
    }
    return {
      modalIsOpen,
      openModal,
      onModalClose
    }
  }
})
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" /><br>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /><br>
    <button style="margin-top:10px;" @click="openModal">open modal</button> <br>
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
