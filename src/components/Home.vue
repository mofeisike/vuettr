<template>
    <div class="home">
        <h1>在线翻译</h1>
        <h5>简单 / 易容 / 便捷</h5>
        <translate-form></translate-form>
        <translate-output></translate-output>
    </div>
</template>

<script>
import translateForm from './translateForm'
import translateOutput from './translateOutput'

export default {
    name: "Home",
    data() {
        return {}
    },
    components: {
        translateForm,
        translateOutput
    },
    methods: {}
}
</script>

<style scoped>

</style>