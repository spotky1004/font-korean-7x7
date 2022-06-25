import generatePixelated from "./generatePixelated.js";
import PixelCanvas from "./PixelCanvas.js";
import parseExpression from "./parseExpression.js";

const input = document.getElementById("preview-input") as HTMLInputElement;
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

  let lineNr = 0;
  let charNr = 0;
  for (const [char, matrix] of charPixels) {
    if (char === "\n") {
      charNr = 0;
      lineNr++;
      continue;
    }
    const x = charNr*8;
    const y = lineNr*8;
    for (let dx = 0; dx < 7; dx++) {
      for (let dy = 0; dy < 7; dy++) {
        if (matrix[dy][dx] > 0) {
          canvas.fillPixel(x+dx, y+dy);
        }
      }
    }
    charNr++;
    if (charNr*8 > WIDTH-8) {
      charNr = 0;
      lineNr++;
    }
  }
  canvas.endFill();
}
