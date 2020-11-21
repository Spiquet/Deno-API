// A proper way to isolate business logic is by creating a service layer.
import AutoInjectable from "https://deno.land/x/alosaur@v0.25.0/src/injection/decorators/auto-injectable.ts";
import { getCustomRepository } from "https://denolib.com/denolib/typeorm@v0.2.23-rc6/src/index.ts";
import { UserRepository } from "./user.repository.ts";

@AutoInjectable()
export class UserService {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }
    getAll() {
        return this.userRepository.find();
    }
}