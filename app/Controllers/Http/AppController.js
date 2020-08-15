'use strict'

const User = use("App/Models/User")

class AppController {
    index() {
        return "Hello";
    }
}

module.exports = AppController
