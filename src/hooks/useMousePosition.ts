
import { ref, onMounted, onUnmounted } from 'vue'

export const useMousePosition = () => {
    const pageX = ref(0)
    const pageY = ref(0)
    const updateMouse = (e: MouseEvent) => {
        pageX.value = e.pageX
        pageY.value = e.pageY
    }

    onMounted(() => {
        document.addEventListener('click', updateMouse)
    })

    onUnmounted(() => {
        document.removeEventListener('click', updateMouse)
    })

    return {
        pageX,
        pageY
    }
}
