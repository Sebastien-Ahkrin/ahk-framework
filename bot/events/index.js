class Events {

    constructor(client){
        this._client = client
    }

    addEvent(e, action){
        this._client.on(e, action)
    }

}

module.exports = Events
