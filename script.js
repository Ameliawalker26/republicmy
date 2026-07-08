// ===== ANTI INSPECT =====
(function() {

    // 1. Blokir klik kanan
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // 2. Blokir shortcut keyboard (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S)
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (Inspect)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+C (Element Picker)
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
            e.preventDefault();
            return false;
        }
        // Ctrl+S (Save Page)
        if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Deteksi DevTools terbuka (ukuran window)
    var devtoolsOpen = false;
    var threshold = 160;

    setInterval(function() {
        var widthDiff = window.outerWidth - window.innerWidth;
        var heightDiff = window.outerHeight - window.innerHeight;

        if (widthDiff > threshold || heightDiff > threshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                document.body.innerHTML = '';
                window.location.href = 'about:blank';
            }
        } else {
            devtoolsOpen = false;
        }
    }, 1000);

    // 4. Deteksi via debugger (untuk Chrome/Edge)
    var checkDevTools = function() {
        var start = performance.now();
        debugger;
        var end = performance.now();
        if (end - start > 100) {
            document.body.innerHTML = '';
            window.location.href = 'about:blank';
        }
    };

    // Jalankan debugger check saat ada interaksi
    document.addEventListener('click', function() {
        setTimeout(checkDevTools, 0);
    });

    // 5. Blokir drag gambar/video
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // 6. Blokir copy/cut/select
    document.addEventListener('copy', function(e) { e.preventDefault(); });
    document.addEventListener('cut', function(e) { e.preventDefault(); });
    document.addEventListener('selectstart', function(e) { e.preventDefault(); });

})();


// ===== RANDOM VIDEO BACKGROUND =====
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


// ===== BUTTON REDIRECT =====
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
