import { App, Area } from 'https://deno.land/x/alosaur/mod.ts';
// Declare module
@Area({
})
export class MainArea { }
// Create alosaur application
const app = new App({
    areas: [MainArea],
});
app.listen();