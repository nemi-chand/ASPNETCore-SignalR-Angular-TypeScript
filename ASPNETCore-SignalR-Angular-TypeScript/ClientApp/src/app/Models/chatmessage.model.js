"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChatMessage = /** @class */ (function () {
    function ChatMessage(user, text, room) {
        if (user === void 0) { user = ''; }
        if (text === void 0) { text = ''; }
        if (room === void 0) { room = ''; }
        this.user = user;
        this.text = text;
        this.room = room;
    }
    return ChatMessage;
}());
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=chatmessage.model.js.map