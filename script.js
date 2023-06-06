const button = document.getElementById("btn");
var shareOptionsDiv = document.querySelector(".share-options");
shareOptionsDiv.style.display = "none";
function toggleShareOptions() {
    if (shareOptionsDiv.style.display === "none") {
        shareOptionsDiv.style.display = "flex";
    } else {
        shareOptionsDiv.style.display = "none";
    }
}
button.onclick = toggleShareOptions