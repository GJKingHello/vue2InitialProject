import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    display(context, value) {
        context.commit('display', '');
    },
    hidden(context, value) {
        context.commit('display', 'loadingVisible');
    }
}
const mutations = {
    display(state, value) {
        state.loadingVisible = value;
    }
}
const state = {
    loadingVisible: 'loadingVisible'
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})