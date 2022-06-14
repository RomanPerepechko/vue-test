/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
function createTree(users) {
    return users.reduce((a, c) => {
        c.children = users.filter(i => i.chiefId === c.id)
        a.push(c)
        return a
    }, []).filter(i => i.chiefId === null)
}
class State {
    users = localStorage.getItem('users') === null
        ?
        [
            { id: 1, name: 'Пользователь1', phone: '+79041384310', chiefId: null },
            { id: 2, name: 'Бользователь2', phone: '+79041384310', chiefId: 1 },
            { id: 3, name: 'Аользователь3', phone: '+79041384310', chiefId: 1 },
            { id: 4, name: 'Бользователь4', phone: '+79041384310', chiefId: 2 },
            { id: 5, name: 'Пользователь5', phone: '+79041384310', chiefId: 1 }
        ]
        : JSON.parse(localStorage.getItem("users"));
    usersTree = createTree(this.users)
}
export default new Vuex.Store({
    state: new State(),
    mutations: {
        ADD_USER(state, payload) {
            state.users.push({ id: Math.random(), name: payload.name, phone: payload.phone, chiefId: payload.chiefId })
            localStorage.setItem("users", JSON.stringify(state.users))
            state.usersTree = createTree(state.users)
        },
        SORT_BY_NAME(state) {
            state.users = state.users.sort((a, b) => a.name.localeCompare(b.name))
            state.usersTree = createTree(state.users)
        },
        SORT_BY_PHONE(state) {
            state.users = state.users.sort((a, b) => {
                let tempA = parseInt(a.phone.split('+').join(''))
                let tempB = parseInt(b.phone.split('+').join(''))
                if (tempA > tempB) return 1;
                if (tempA === tempB) return 0;
                if (tempA < tempB) return -1;
            })
            state.usersTree = createTree(state.users)
        }
    },
    actions: {
        addUser({ commit }, payload) {
            commit('ADD_USER', payload)
        },
        sortData({ commit }, payload) {
            switch (payload) {
                case 'name': {
                    commit('SORT_BY_NAME', payload)
                    break
                }
                case 'phone': {
                    commit('SORT_BY_PHONE', payload)
                    break
                }
            }
        },
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getUsersTree(state) {
            return state.usersTree
        }
    }
})
