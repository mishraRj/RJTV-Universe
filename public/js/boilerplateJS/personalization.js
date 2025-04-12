const avatar = document.querySelector('.personalization');
const panel = document.getElementById('userPanel');

let panelVisible = false;

avatar.addEventListener('click', () => {
    if (!panelVisible) {
        panel.style.display = 'block';
        panelVisible = true;
    }
});

avatar.addEventListener('dblclick', () => {
    panel.style.display = 'none';
    panelVisible = false;
});

document.addEventListener('click', function (e) {
    if (!avatar.contains(e.target) && !panel.contains(e.target)) {
        panel.style.display = 'none';
        panelVisible = false;
    }
});
