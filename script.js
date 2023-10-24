document.getElementById('downloadButton').addEventListener('click', function() {
    
    const resumeContent = `
    resume
    `;
    const blob = new Blob([resumeContent], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href =window.URL.createObjectURL(blob);
    link.download = 'resume.pdf';
    link.click();
});