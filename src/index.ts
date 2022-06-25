import generatePixelated from "./generatePixelated.js";
import PixelCanvas from "./PixelCanvas.js";
import parseExpression from "./parseExpression.js";

const input = document.getElementById("preview-input") as HTMLInputElement;
const monospace = document.getElementById("monospace-checkbox") as HTMLInputElement;
const canvas = new PixelCanvas({
  width: 400,
  height: 400
}, document.getElementById("preview-canvas") as HTMLCanvasElement);
const editorBlocks = [...document.getElementsByClassName("editor__block")] as HTMLSpanElement[];
const editorOutput = document.getElementById("editor-output") as HTMLDivElement;
editorBlocks.forEach((block, i) => block.addEventListener("click", () => {
  editorBlocks[i].classList.toggle("active");
  let datas: string[] = [];
  for (let i = 0; i < editorBlocks.length; i++) {
    const x = i%7+1;
    const y = Math.floor(i/7)+1;
    if (editorBlocks[i].classList.contains("active")) datas.push(`"${x}_${y}"`);
  }
  editorOutput.innerText = datas.join(", ");
}));

drawPreview(input.value);
input.addEventListener("keydown", () => {
  drawPreview(input.value);
});
input.addEventListener("keyup", () => {
  drawPreview(input.value);
});
monospace.addEventListener("change", () => {
  drawPreview(input.value);
})

function drawPreview(str: string) {
  const e = parseExpression(str);
  if (!isNaN(e[0])) str += "\n= " + e[0];

  const charPixels: [char: string, matrix: number[][]][] = [];
  for (const char of str) {
    charPixels.push([char, generatePixelated(char)]);
  }

  const WIDTH = Math.min(innerWidth, Math.max(200, innerWidth/8));
  const HEIGHT = Math.min(innerHeight, Math.max(200, innerHeight/8));
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  canvas.beginFill();
  canvas.fillStyle = [0, 0, 0];

  let x = 0;
  let y = 0;
  const isMonospace = monospace.checked;
  for (const [char, matrix] of charPixels) {
    if (char === "\n") {
      x = 0;
      y += 8;
      continue;
    }
    const monospaceMatrixWidth = matrix[0].length;
    const existLines: boolean[] = [];
    for (let i = 0; i < monospaceMatrixWidth; i++) {
      existLines[i] = false;
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][i] > 0) existLines[i] = true;
      }
    }
    const leftSpace = existLines.reduce((a, b, i) => a === i && b === false ? a + 1 : a, 0);
    const rightSpace = [...existLines].reverse().reduce((a, b, i) => a === i && b === false ? a + 1 : a, 0);
    const matrixWidth = isMonospace || (leftSpace === 7 && rightSpace === 7) ?
      7 :
      monospaceMatrixWidth - leftSpace - rightSpace;
    if (x > WIDTH-matrixWidth) {
      x = 0;
      y += 8;
    }
    for (let dx = 0; dx < matrixWidth; dx++) {
      for (let dy = 0; dy < 7; dy++) {
        if (matrix[dy][dx+leftSpace] > 0) {
          canvas.fillPixel(x+dx, y+dy);
        }
      }
    }
    x += matrixWidth+1;
  }
  canvas.endFill();
}
