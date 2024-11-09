document.getElementById("more-info-button").addEventListener("click", function() {
    const moreInfo = document.getElementById("more-info");
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        this.textContent = "Less Info";
    } else {
        moreInfo.style.display = "none";
        this.textContent = "More Info";
    }
});