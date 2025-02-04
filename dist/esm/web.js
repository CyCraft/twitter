import { WebPlugin } from "@capacitor/core";
export class TwitterWeb extends WebPlugin {
    constructor() {
        super({
            name: "Twitter",
            platforms: ["web"],
        });
    }
    isLogged() {
        throw this.unimplemented("Not implemented on web.");
    }
    login() {
        throw this.unimplemented("Not implemented on web.");
    }
    logout() {
        throw this.unimplemented("Not implemented on web.");
    }
}
const Twitter = new TwitterWeb();
export { Twitter };
//# sourceMappingURL=web.js.map