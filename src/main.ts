import { App, Area } from 'https://deno.land/x/alosaur@v0.25.0/mod.ts';
import { initTypeORM } from "./loader/init-typeorm.ts";
import { UserController } from "./user /user.controller.ts";
// Declare module
@Area({
    controllers: [UserController],

})
export class MainArea { }


await initTypeORM(); // Init before creating the app



// Create alosaur application
const app = new App({
    areas: [MainArea],
});



app.listen();