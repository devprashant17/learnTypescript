"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DelayedCall(fn) {
    setTimeout(fn, 1000);
}
DelayedCall(() => {
    console.log("HIII");
});
//# sourceMappingURL=index.js.map