const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function clear_screen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawRect(color, w, h, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}