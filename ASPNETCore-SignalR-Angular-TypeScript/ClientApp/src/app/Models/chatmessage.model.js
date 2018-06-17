"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** represent chat message class */
var ChatMessage = /** @class */ (function () {
    function ChatMessage(user, message, room) {
        if (user === void 0) { user = ''; }
        if (message === void 0) { message = ''; }
        if (room === void 0) { room = ''; }
        this.user = user;
        this.message = message;
        this.room = room;
    }
    return ChatMessage;
}());
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=chatmessage.model.js.map