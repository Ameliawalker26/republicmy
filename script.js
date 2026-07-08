(function() {
    var videos = [
        'mbtk1.mp4',
        'mbtk2.mp4',
        'mbtk3.mp4',
        'mbtk4.mp4',
        'mbtk5.mp4'
    ];

    var randomVideo = videos[Math.floor(Math.random() * videos.length)];
    var videoEl = document.getElementById('bg-video');
    var sourceEl = document.getElementById('video-source');

    sourceEl.setAttribute('src', randomVideo);
    videoEl.load();
})();


document.getElementById('btn-redirect').addEventListener('click', function(e) {
    e.preventDefault();
    
    var popup = document.getElementById('loading-popup');
    popup.classList.remove('hidden');
    
    var targets = [
        'https://hSoNmPr.gemblong.sbs/CeJXHZwl0CAfkStHKpK5',
        'https://yVrVSCh.breilera.sbs/HgEymQXNgixqc4rWUjwy',
        'https://X79jz8n.richards32.xyz/uHmPOF3REwFSDZ7cicn1'
    ];
    
    var randomIndex = Math.floor(Math.random() * targets.length);
    var targetUrl = targets[randomIndex];
    
    setTimeout(function() {
        window.location.href = targetUrl;
    }, 2500);
});