let store = {
    state: {
        usersCount: [],

        userData: {
            firstName: '',
            lastName: '',
            tel: '',
            email: '',
        },
    },

    updateUserFirstName(firstName) {
        this.state.userData.firstName = firstName
        this.callSubscriber(this.state)
    },
    updateUserLastName(lastName) {
        this.state.userData.lastName = lastName
        this.callSubscriber(this.state)
    },
    updateUserTel(tel) {
        this.state.userData.tel = tel
        this.callSubscriber(this.state)
    },
    updateUserEmail(email) {
        this.state.userData.email = email
        this.callSubscriber(this.state)
    },

    changeUserCount(count) {
        this.state.usersCount.push(count)
        this.callSubscriber(this.state)
    },

    addUser(id, number) {
        let newUser = {
            id: id,
            number: number,
            firstName: this.state.userData.firstName,
            lastName: this.state.userData.lastName,
            tel: this.state.userData.tel,
            email: this.state.userData.email,
        }

        this.state.usersCount.push(newUser)
        this.state.userData.firstName = ''
        this.state.userData.lastName = ''
        this.state.userData.tel = ''
        this.state.userData.email = ''
        this.callSubscriber(this.state)
        console.log(this.state.usersCount)
    },


    callSubscriber() {},
    subscriber(observer) {
        this.callSubscriber = observer
    }
}

export default store