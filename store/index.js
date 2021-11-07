export const state = () => ({
    name: '',
    notifications: []
})

export const getters = {
    getName (state) {
        return state.name
    },
    getUserId (state) {
        return state.userId
    },
    getNotification (state) {
        return state.notifications
    }
}

export const mutations = {
    setName (state, name) {
        state.name = name
    },
    setUserId (state, userId) {
        state.userId = userId
    },
    addNotification (state, noti) {
        state.notifications.push(noti)
    },
    removeNotification (state, id) {
        state.notifications.splice(id, 0)
    }
}

export const actions = {

}
