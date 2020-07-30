console.log("[ STORM WATCHER ] : stormwatch.js loaded");
// const iframe = document.getElementById("gsft_main").contentWindow.document;
const header = document.getElementsByClassName("grid-widget-header noselect perm-icons-right-1 ui-draggable-handle");
const title = document.getElementsByClassName("grid-widget-header-title center");
const frame = document.getElementsByClassName("grid-stack-item-content  grid-stack-item-no-border ");
const table = document.getElementsByClassName("list2_body");
const data = document.getElementsByClassName("grid-widget-content")

palette = "Beach";

    if (palette == "Material") {
        color_background = "#9e9e9e";
        color_nav = "#ffffff";
        color_alert = "#ff5722";
        color_header = "#607d8b"
    } else if (palette == "Beach") {
        color_background = "#ffcc5c";
        color_nav = "#88d8b0";
        color_alert = "#ff6f69";
        color_header = "#ffeead"
    } else if (palette == "test") {
        color_background = "#25A591";
        color_nav = "#31323E";
        color_alert = "#F1563F";
        color_header = "#D8E7D1"
    } else if (palette == "") {
        color_background = "#";
        color_nav = "#";
        color_alert = "#";
        color_header = "#"
    };

document.getElementsByClassName("grid-stack-container")[0].style.scrollbarWidth = "none";
document.getElementsByClassName("grid-stack-container")[0].style.backgroundColor = color_background;
document.getElementById("navbar").style.backgroundColor = color_nav;
header[6].style.backgroundColor = color_header;

for (let i = 0; i < frame.length; i++) {
    frame[i].style.borderRadius = "5px";
    frame[i].style.boxShadow = "5px 5px 3px rgb(0, 0, 0, 0.2)";
    frame[i].style.margin = "3px"
};

for (let i = 0; i < data.length; i++) {
    data[i].style.scrollbarWidth = "none"
}

function monitorConditions() {
    for (let i = 0; i < table.length - 1; i++) {
        if (table[i].firstElementChild.innerText != "No records to display") {
            header[i].style.backgroundColor = color_alert;
            title[i].style.color = "#fff";
        } else {
            header[i].style.backgroundColor = color_header;
            title[i].style.color = "#343d47";
            table[i].firstElementChild.style.color = "#fff";
        };
    };
    console.log("[ STORM WATCHER ] : Formatting applied");
};

setInterval(monitorConditions, 20000);