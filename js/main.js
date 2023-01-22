let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let w = canvas.width / 8;
let h = w;
console.log(w, h)

const drawRect = (x, y, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x * w, y * h, w, h);
}
// drawRect(1,1, '#369');

const clearBoard = () => {
    const colorDark = '#369';
    const colorLight = '#fff';
    ctx.fillStyle = colorDark;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 8; i += 2) {
        for (let j = 0; j < 8; j += 2) {
            drawRect(i, j, colorLight);
            drawRect(i + 1, j + 1, colorLight);
        }
    }
}
clearBoard();
// ===== Пешка ==============
const pawn = (x, y, color) => {
    const koef = 10;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = '20';
    ctx.save();
    ctx.fillStyle = color;
    ctx.scale(1 / koef, 1 / koef);
    let path = new Path2D("M264 136c0 37.1-19.4 69.6-48.6 88H224c17.7 0 32 14.3 32 32s-14.3 32-32 32c0 96 24 128 24 128H72s24-32 24-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h8.5C75.4 205.6 56 173.1 56 136C56 78.6 102.6 32 160 32s104 46.6 104 104zM32 448H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z");
    ctx.translate(x * w * koef + 2 * w, y * h * koef + h);
    ctx.stroke(path);
    ctx.fill(path);
    ctx.restore();
}
// ======== Конь ============
const knight = (x, y, color) => {
    const koef = 10;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = '20';
    ctx.save();
    ctx.fillStyle = color;
    ctx.scale(1 / koef, 1 / koef);
    let path = new Path2D("M32 391.6V416H352V224c0-106-86-192-192-192H12.9C5.8 32 0 37.8 0 44.9c0 2 .5 4 1.4 5.8L16 80 9.4 86.6c-6 6-9.4 14.1-9.4 22.6V242.3c0 13.1 8 24.9 20.1 29.7l46.5 18.6c8.5 3.4 18 3 26.2-1.1l6.6-3.3c8-4 14-11.2 16.5-19.8l8.3-28.9c2.5-8.6 8.4-15.8 16.5-19.8L160 208v40.4c0 24.2-13.7 46.4-35.4 57.2L67.4 334.3C45.7 345.2 32 367.3 32 391.6zM72 148c0 11-9 20-20 20s-20-9-20-20s9-20 20-20s20 9 20 20zM352 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32z");
    ctx.translate(x * w * koef + 2 * w, y * h * koef + h);
    ctx.stroke(path);
    ctx.fill(path);
    ctx.restore();
}
// ======= Тура ==================
const rook = (x, y, color) => {
    const koef = 10;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = '20';
    ctx.save();
    ctx.fillStyle = color;
    ctx.scale(1 / koef, 1 / koef);
    let path = new Path2D("M0 204.2V48c0-8.8 7.2-16 16-16H72c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h56c8.8 0 16 7.2 16 16V204.2c0 12.1-6.8 23.2-17.7 28.6l-28.6 14.3c-10.8 5.4-17.7 16.5-17.5 28.6C322.2 360.7 336 416 336 416H48s13.8-55.3 15.8-140.2c.3-12.1-6.6-23.2-17.5-28.6L17.7 232.8C6.8 227.4 0 216.3 0 204.2zM176 320h32c8.8 0 16-7.2 16-16V256c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM32 448H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z");
    ctx.translate(x * w * koef + 2 * w, y * h * koef + h);
    ctx.stroke(path);
    ctx.fill(path);
    ctx.restore();
}
// =========  Слон =========
const bishop = (x, y, color) => {
    const koef = 10;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = '20';
    ctx.save();
    ctx.fillStyle = color;
    ctx.scale(1 / koef, 1 / koef);
    let path = new Path2D("M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 106.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V416H256V372.7c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32H128zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z");
    ctx.translate(x * w * koef + 2 * w, y * h * koef + h);
    ctx.stroke(path);
    ctx.fill(path);
    ctx.restore();
}
// ========= Королева ===========
const queen = (x, y, color) => {
    const koef = 10;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = '20';
    ctx.save();
    ctx.fillStyle = color;
    ctx.scale(1 / koef, 1 / koef);
    let path = new Path2D("M312 56c0-30.9-25.1-56-56-56s-56 25.1-56 56s25.1 56 56 56s56-25.1 56-56zM64 480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM34 169.4L9.2 185.8C3.5 189.7 0 196.2 0 203.1c0 3.2 .7 6.4 2.2 9.3L104 416H408L509.8 212.4c1.4-2.9 2.2-6.1 2.2-9.3c0-6.9-3.5-13.4-9.2-17.3L478 169.4c-8.2-5.4-19-4.4-26 2.6c-12.9 12.9-30.9 21.9-48 15.5c-17.9-6.7-28.1-20.1-32.8-35.8C367.5 139 357.3 128 344 128H328c-13.3 0-23.9 11.2-29.6 23.2C292.6 163.4 280.6 176 256 176s-36.6-12.6-42.4-24.8c-5.7-12-16.3-23.2-29.6-23.2H168c-13.3 0-23.5 11-27.3 23.7c-4.7 15.6-14.9 29.1-32.8 35.8c-17 6.4-35.1-2.7-48-15.5c-6.9-6.9-17.8-8-25.9-2.6z");
    ctx.translate(x * w * koef + 1 * w, y * h * koef + h);
    ctx.stroke(path);
    ctx.fill(path);
    ctx.restore();
}
// ========= Король ===========
const king = (x, y, color) => {
    const koef = 10;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = '20';
    ctx.save();
    ctx.fillStyle = color;
    ctx.scale(1 / koef, 1 / koef);
    let path = new Path2D("M391.9 464H55.95c-13.25 0-23.1 10.75-23.1 23.1S42.7 512 55.95 512h335.1c13.25 0 23.1-10.75 23.1-23.1S405.2 464 391.9 464zM448 216c0-11.82-3.783-23.51-11.08-33.17c-10.3-14.39-27-22.88-44.73-22.88L247.9 160V104h31.1c13.2 0 24.06-10.8 24.06-24S293.1 56 279.9 56h-31.1V23.1C247.9 10.8 237.2 0 223.1 0S199.9 10.8 199.9 23.1V56H167.9c-13.2 0-23.97 10.8-23.97 24S154.7 104 167.9 104h31.1V160H55.95C24.72 160 0 185.3 0 215.9C0 221.6 .8893 227.4 2.704 233L68.45 432h50.5L48.33 218.4C48.09 217.6 47.98 216.9 47.98 216.1C47.98 212.3 50.93 208 55.95 208h335.9c6.076 0 8.115 5.494 8.115 8.113c0 .6341-.078 1.269-.2405 1.887L328.8 432h50.62l65.1-199.2C447.2 227.3 448 221.7 448 216z");
    ctx.translate(x * w * koef + 1.5 * w, y * h * koef + h);
    ctx.stroke(path);
    ctx.fill(path);
    ctx.restore();
}

for (let i = 0; i < 8; i++)
    pawn(i, 6, '#fff');
for (let i = 0; i < 8; i++)
    pawn(i, 1, '#333');

knight(1, 0, '#333');
knight(6, 0, '#333');
knight(1, 7, '#fff');
knight(6, 7, '#fff');

rook(0, 0, '#333');
rook(7, 0, '#333');
rook(0, 7, '#fff');
rook(7, 7, '#fff');

bishop(2,0, '#333');
bishop(5,0, '#333');
bishop(2,7, '#fff');
bishop(5,7, '#fff');

queen(3, 0, '#333');
queen(3, 7, '#fff');

king(4, 0, '#333');
king(4, 7, '#fff');