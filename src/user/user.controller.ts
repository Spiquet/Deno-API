import { Get } from "https://deno.land/x/alosaur@v0.25.0/src/decorator/Get.ts";
import { Controller } from "https://deno.land/x/alosaur@v0.25.0/src/decorator/Controller.ts";

// we use the Controller decorator with the parameter “/users” 
// to declare our class in charge of requests on the “/users” endpoint.
@Controller('/users')
export class UserController {

    // getAll method which is decorated with a the Get decorator.
    @Get('')
    getAll() {
        return [{ id: 1, name: "Denver" }];
    }
}