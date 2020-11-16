// A proper way to isolate business logic is by creating a service layer.

export class UserService {
    getAll() {
        return [{ id: 1, name: "Denver" }];
    }
}
