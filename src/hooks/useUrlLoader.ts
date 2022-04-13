import { ref } from 'vue'
import axios from 'axios'

// 为函数添加泛型
export const useUrlLoader = <T>(url: string) => {
    // 声明几个ref，代表不同状态好结果
    const result = ref<T | null>(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)

    // 发送异步请求
    axios.get(url).then((res) => {
        loading.value = false
        loaded.value = true
        result.value = res.data
    }).catch(e => {
        loading.value = false
        error.value = e
    })

    return {
        result,
        loading,
        loaded,
        error
    }
}