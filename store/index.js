export const state = () => ({
    name: '',
    userId: ''
})

export const getters = {
    getName (state) {
        return state.name
    },
    getUserId (state) {
        return state.userId
    }
}

export const mutations = {
    setName (state, name) {
        state.name = name
    },
    setUserId (state, userId) {
        state.userId = userId
    }
}

export const actions = {

}
