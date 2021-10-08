import { WebPlugin } from "@capacitor/core";
import { TwitterPlugin } from "./definitions";
export declare class TwitterWeb extends WebPlugin implements TwitterPlugin {
    constructor();
    isLogged(): Promise<{
        in: boolean;
        out: boolean;
    }>;
    login(): Promise<{
        authToken: string;
        authTokenSecret: string;
        userName: string;
        userID: string;
    }>;
    logout(): Promise<void>;
}
declare const Twitter: TwitterWeb;
export { Twitter };
