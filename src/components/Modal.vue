<template>
    <!-- vue3 新添加了一个默认的组件就叫 Teleport，
    我们可以拿过来直接使用，它上面有一个 to 的属性，
    它接受一个css query selector 作为参数，
    这就是代表要把这个组件渲染到哪个 dom 元素中 -->
    <teleport to="#modal">
        <div id="center" v-if="isOpen">
            <h2>
                <slot>this is a modal</slot>
            </h2>
            <h2>modalIsOpen: {{ modalIsOpen }}</h2>
            <button @click="buttonClick">Close</button>
        </div>
    </teleport>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
    props: {
        isOpen: Boolean,
    },
    emits: {
        'close-modal': null
    },
    setup(props, context) {
        // inject 拿到provide提供的数据
        const modalIsOpen = inject('modalIsOpen')
        const buttonClick = () => {
            context.emit('close-modal')
        }
        return {
            buttonClick,
            modalIsOpen
        }
    }
})
</script>
<style>
#center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
}
</style>

