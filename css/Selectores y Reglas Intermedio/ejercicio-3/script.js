function startProgress() {
    var progressBar = document.getElementById("myProgressBar");
    var progressText = document.getElementById("progressText");

    var width = 0;
    var interval = setInterval(frame, 50);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + "%";
            progressText.innerHTML = width + "%";
        }
    }
}
