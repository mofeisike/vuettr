<template>
    <div class="translateform">
        <h5>这是输入</h5>
        <form action="" @submit.prevent="formSubmit">
            <!--点击提交时,触发方法-->
            <input type="text" placeholder="请输入内容" v-model="translateText">
            <select v-model="language" @change="formSubmit">
                <!--改变时,触发方法-->
                <option value="en">English</option>
                <option value="ru">Russion</option>
                <option value="ko">Koren</option>
                <option value="ja">Jappenese</option>
            </select>
            <input type="submit" value="翻译">
        </form>
    </div>
</template>

<script>
    export default {
        name: "translateForm",
        data() {
            return {
                translateText: '', //输出文本
                language: 'en' //默认是en
            }
        },
        components: {},
        methods: {
            formSubmit(){
                //存储到store
                this.$store.commit('modifyLanguage',this.language);
                this.$store.commit('addTranslateText',this.translateText);
            }
        }
    }
</script>

<style scoped>

</style>