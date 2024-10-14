export class Crud {
    constructor() {
        if(this.constructor === 'Crud') {
            throw new Error("Can't instantiate abstract class!");
        }
    }

    Create() {
        throw new Error("Method must be implemented")
    }

    FindAll() {
        throw new Error("Method must be implemented")
    }

    FindById() {
        throw new Error("Method must be implemented")
    }

    Update() {
        throw new Error("Method must be implemented")
    }

    Patch() {
        throw new Error("Method must be implemented")
    }

    Delete() {
        throw new Error("Method must be implemented")
    }
}