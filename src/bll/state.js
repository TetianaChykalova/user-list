let store = {
    state: {
        usersCount: [],

        userData: {
            name: '',
            tel: '',
        },
    },

    updateUserName(name) {
        this.state.userData.name = name
        this.callSubscriber(this.state)
    },
    updateUserTel(tel) {
        this.state.userData.tel = tel
        this.callSubscriber(this.state)
    },

    changeUserCount(count) {
        this.state.usersCount.push(count)
        this.callSubscriber(this.state)
    },

    addUser(id) {
        let newUser = {
            id: id,
            name: this.state.userData.name,
            tel: this.state.userData.tel
        }

        this.state.usersCount.push(newUser)
        this.state.userData.name = 'Your name'
        this.state.userData.tel = '+380999999999'
        this.callSubscriber(this.state)
        console.log(this.state.usersCount)
    },


    callSubscriber() {},
    subscriber(observer) {
        this.callSubscriber = observer
    }
}

export default store