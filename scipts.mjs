document.getElementById('openPdfBtn').addEventListener('click', function() {
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = 'Biology-class-9.pdf';
    pdfViewer.style.display = 'block';
});