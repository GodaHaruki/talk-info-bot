import { WebhookRequestBody } from "@line/bot-sdk";
import { onFollowEvent, onJoinEvent } from "./webhookActionHandlers";
export function doPost(evt: GoogleAppsScript.Events.DoPost) {
  const webhookReq: WebhookRequestBody = JSON.parse(evt.postData.contents);

  webhookReq.events.forEach(webhookEvt => {
    switch (webhookEvt.type) {
      case "follow":
        onFollowEvent(webhookEvt);
        break;
      case "join":
        onJoinEvent(webhookEvt)
        break;
    }
  })
}