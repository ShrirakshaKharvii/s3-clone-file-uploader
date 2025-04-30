document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        document.getElementById('message').textContent = data.message || 'File upload failed.';
    } catch (error) {
        document.getElementById('message').textContent = 'Error uploading file.';
    }
});
