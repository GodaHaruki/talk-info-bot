import { FollowEvent, JoinEvent } from "@line/bot-sdk";
import { reply } from "./line";

export function onJoinEvent(evt: JoinEvent) {
    reply(evt.replyToken, [{
        type: "text",
        text: JSON.stringify(evt.source)
    }]);
}

export function onFollowEvent(evt: FollowEvent) {
    reply(evt.replyToken, [{
        type: "text",
        text: JSON.stringify(evt.source)
    }]);
}