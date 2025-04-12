
document.getElementById('avatar').addEventListener('change', function (event) {
    const file = event.target.files[0];
    
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const maxSizeMB = 2;

    // Type check
    if (!allowedTypes.includes(file.type)) {
        alert('❌ Only JPG, PNG, and WEBP images are allowed.');
        event.target.value = ''; // clear the input
        return;
    }

    // Size check
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
        alert('⚠️ Max file size is 2MB.');
        event.target.value = '';
        return;
    }

    // Optional: Show preview or toast
    console.log('✅ Avatar validated:', file.name);
});
