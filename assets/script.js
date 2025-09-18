document.querySelectorAll('.lightbox').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.cursor = 'pointer';
        const imgClone = img.cloneNode();
        imgClone.style.maxWidth = '90%';
        imgClone.style.maxHeight = '90%';
        overlay.appendChild(imgClone);
        document.body.appendChild(overlay);
        overlay.addEventListener('click', () => overlay.remove());
    });
});
