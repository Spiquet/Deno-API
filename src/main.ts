import { App, Area } from 'https://deno.land/x/alosaur/mod.ts';
import { UserController } from "./user/user.controller.ts";
// Declare module
@Area({
    controllers: [UserController],

})
export class MainArea { }
// Create alosaur application
const app = new App({
    areas: [MainArea],
});



app.listen();