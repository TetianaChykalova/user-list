let store = {
    usersCount: 0,

    changeUserCount(count) {
        this.usersCount = count
        this.callSubscriber()
    },

    callSubscriber() {},
    subscriber(observer) {
        this.callSubscriber = observer
    }
}

export default store