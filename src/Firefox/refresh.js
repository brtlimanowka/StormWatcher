console.log("[ STORM WATCHER ] : refresh.js loaded");
const btn_global = iframe.getElementsByClassName("menuitem")[7];    // global refresh
const btn_local = iframe.getElementsByClassName("btn header-icon icon-refresh") // in-pane refresh

function refresh() {
    button.click();
    console.log("[ STORM WATCHER ] : Data refreshed")
};

setInterval(refresh, 90000);