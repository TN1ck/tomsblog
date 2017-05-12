// make images zoomable
document.querySelectorAll('.post-image-container').forEach(function (img) {
    img.addEventListener('click', function () {
        this.classList.toggle('post-image-container--zoomed');
    });
});


// load fonts async
var WebFontConfig = {
    google: {
        families: [ 'Noto+Sans:400,600,400italic' ]
    },
    timeout: 3000
};

(function(d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = 'true';
    s.parentNode.insertBefore(wf, s);
})(document);
