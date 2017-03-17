// make images zoomable
document.querySelectorAll('.post-image-container').forEach(function (img) {
    img.addEventListener('click', function () {
        this.classList.toggle('post-image-container--zoomed');
    });
});
