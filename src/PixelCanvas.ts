interface Size {
  width: number;
  height: number;
}
export type FillStyle = [r: number, g: number, b: number, a?: number];

export default class PixelCanvas {
  private _size: [number, number];
  private canvas: HTMLCanvasElement;
  private _fillStyle: FillStyle;
  private ctx: CanvasRenderingContext2D;
  private imageData: ImageData | null;

  constructor(size: Size, canvas?: HTMLCanvasElement) {
    this._size = [size.width, size.height];
    this.canvas = canvas ?? document.createElement("canvas");
    this.canvas.width = size.width;
    this.canvas.height = size.height;
    this._fillStyle = [0, 0, 0, 255];

    const ctx = this.canvas.getContext("2d");
    if (ctx === null) throw Error("Canvas not supported!");
    this.ctx = ctx;
    this.imageData = null;
  }

  set width(value: number) {
    this.canvas.width = value;
    this.clearCanvas("#fff");
  }

  set height(value: number) {
    this.canvas.height = value;
    this.clearCanvas("#fff");
  }

  get width() {
    return this._size[0];
  }
  get height() {
    return this._size[1];
  }

  get fillStyle(): FillStyle {
    return [...this._fillStyle];
  }
  set fillStyle(fillStyle: FillStyle) {
    fillStyle = [...fillStyle];
    if (typeof fillStyle[3] === "undefined") {
      fillStyle[3] = 255;
    }
    this._fillStyle = fillStyle.map(value => Math.floor(value as number)) as FillStyle;
  }
  
  beginFill() {
    this.imageData = this.ctx.getImageData(0, 0, this.width, this.height);
  }
  endFill() {
    if (this.imageData === null) return;
    this.ctx.putImageData(this.imageData, 0, 0);
    this.imageData = null;
  }

  fillPixel(x: number, y: number) {
    if (this.imageData === null) return;

    const width = this.width;
    const height = this.height;
    if (
      0 > x || x >= width ||
      0 > y || y >= height
    ) return;

    const imageData = this.imageData.data;
    const fillStyle = this._fillStyle;
    const dataIdx = (x + y*this.width)*4;    
    
    imageData[dataIdx + 0] = fillStyle[0];
    imageData[dataIdx + 1] = fillStyle[1];
    imageData[dataIdx + 2] = fillStyle[2];
    imageData[dataIdx + 3] = fillStyle[3] ?? 255;
  }

  getImageData() {
    return this.ctx.getImageData(0, 0, this.width, this.height);
  }

  clearCanvas(color: string | undefined) {
    this.imageData = null;
    if (color) {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(0, 0, this.width, this.height);
    } else {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }
}
