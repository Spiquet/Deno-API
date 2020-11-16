// A proper way to isolate business logic is by creating a service layer.
import autoInjectable from "https://deno.land/x/alosaur@v0.25.0/src/injection/decorators/auto-injectable.ts";
import { UserRepository } from "./user.repository.ts";

@autoInjectable()
export class UserService {


    constructor(private userRepository: UserRepository) { }


    getAll() {
        return this.userRepository.getAll();
    }
}
