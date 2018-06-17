"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Represent Tab class */
var Tab = /** @class */ (function () {
    function Tab(heading, title) {
        if (heading === void 0) { heading = ''; }
        if (title === void 0) { title = ''; }
        this.heading = heading;
        this.title = title;
        this.messageHistory = [];
    }
    return Tab;
}());
exports.Tab = Tab;
//# sourceMappingURL=tab.model.js.map