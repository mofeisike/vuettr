import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // 待翻译的文本
        translateText: '',
        // 什么语言来翻译
        language: '',
        // 翻译好的语言
        translatedText: ''
    },

    mutations: {
        modifyLanguage(state,language){
            //添加要用什么语言来翻译
            state.language=language;
        },
        addTranslateText(state,text){
            //翻译text并且存储
            state.translateText = text;

            axios.get(`
            https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180501T064510Z.a4b6698f66740c3b.ed666d84b0d19194f97f638cdece7387152094a9&lang=${state.language}&text=${text}
            `)
            .then(res=>{
                state.translatedText = res.data.text[0]
            })
        }
    }
})
