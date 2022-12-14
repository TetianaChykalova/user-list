class DataService {
    constructor(url) {
        this.url = url
    }

    async createUser(user) {
        try {
            const request = new Request(this.url + 'user.json', {
                method: 'post',
                body: JSON.stringify(user)
            })
            const response = await fetch(request)
            return await response.json()
        } catch (error) {
            console.error(error)
        }
    }
}

export const dataService = new DataService('https://newage-users-chykalova-default-rtdb.europe-west1.firebasedatabase.app/')