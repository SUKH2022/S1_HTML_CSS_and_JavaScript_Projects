// The first thing is to do is check to make sure that all the HTML is loaded.
// This to avoid any render blocking JavaScript.
document.addEventListener('DOMContentLoaded', (loaded) => {
    // This will only be able to be seen in the console log. To check this inspect element
    // in the browser and select the console tab.
    console.log('Document is ready!!!');
});
// jquery version of waiting until the document has loaded.
$(document).ready(function () {
    // now call the header.html, meta.html, & footer.html
    $(function () {
        $("#head").load("./assests/meta.html");
        $("#header").load("./assests/header.html");
        $("#footer").load("./assests/footer.html");
    });
});