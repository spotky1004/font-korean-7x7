export type ShapeTypes = "c2" | "c3" | "c5" | "v1" | "v2" | "v3" | "h1" | "h2";
type CharShape =
  `${ShapeTypes}` |
  `${ShapeTypes}${ShapeTypes}` |
  `${ShapeTypes}${ShapeTypes}${ShapeTypes}` |
  `${ShapeTypes}${ShapeTypes}${ShapeTypes}${ShapeTypes}` |
  `${ShapeTypes}${ShapeTypes}${ShapeTypes}${ShapeTypes}${ShapeTypes}`;
const vaildCharShapes = [
  "c2", "c3", "c5", "v1", "v2", "v3", "h1", "h2",
  "c2c3", "c3c2", "c3c3",
  "c2v1", "c3v1", "c5v1", "c2h1", "c3h1", "c5h1",
  "c2v2", "c3v2", "c5v2", "c2h2", "c3h2", "c5h2",
  "c2v1c2", "c2v1c3", "c2v1c2c3", "c2v1c3c2", "c2v1c3c3", "c2v2c2", "c2v2c3", "c2v2c2c3", "c2v2c3c2", "c2v2c3c3"
] as const;
type VaildCharShapes = Extract<
  CharShape,
  typeof vaildCharShapes[number]
>;
type PixelPos = `${number}_${number}`;
type KoreanAlphabet =
  "ㄱ" | "ㄴ" | "ㄷ" | "ㄹ" | "ㅁ" | "ㅂ" | "ㅅ" | "ㅇ" | "ㅈ" | "ㅊ" | "ㅋ" | "ㅌ" | "ㅍ" | "ㅎ" |
  "ㅏ" | "ㅑ" | "ㅓ" | "ㅕ" | "ㅗ" | "ㅛ" | "ㅜ" | "ㅠ" | "ㅡ" | "ㅣ" | "ㅐ" | "ㅒ" | "ㅔ" | "ㅖ" |
  "ㄲ" | "ㄸ" | "ㅃ" | "ㅆ" | "ㅉ";

const data: { [K in typeof vaildCharShapes[number]]: Map<`${number}_${KoreanAlphabet}`, [number, number][]> } = {} as any;
for (const vaildCharShape of vaildCharShapes) {
  data[vaildCharShape] = new Map();
}

function addData(shape: VaildCharShapes, pos: number, alphabet: KoreanAlphabet, pixels: PixelPos[]) {
  if (!(shape in data)) {
    data[shape] = new Map();
  }
  const shapeData = data[shape];
  if (!shapeData) return;
  shapeData.set(
    `${pos}_${alphabet}`,
    pixels.map(pixel => pixel.split("_").map(pos => +pos) as [number, number])
  );
}

// Kor Alphabets
(()=> {
  addData("c2", 0, "ㄱ", ["1_2", "2_2", "3_2", "4_2", "4_3", "4_4", "4_5", "4_6"]);
  addData("c2", 0, "ㄴ", ["1_2", "1_3", "1_4", "1_5", "1_6", "2_6", "3_6", "4_6"]);
  addData("c3", 0, "ㄷ", ["1_2", "2_2", "3_2", "4_2", "1_3", "1_4", "1_5", "1_6", "2_6", "3_6", "4_6"]);
  addData("c3", 0, "ㄹ", ["1_2", "2_2", "3_2", "4_2", "4_3", "1_4", "2_4", "3_4", "4_4", "1_5", "1_6", "2_6", "3_6", "4_6"]);
  addData("c3", 0, "ㅁ", ["1_2", "2_2", "3_2", "4_2", "1_3", "4_3", "1_4", "4_4", "1_5", "4_5", "1_6", "2_6", "3_6", "4_6"]);
  addData("c3", 0, "ㅂ", ["1_2", "4_2", "1_3", "4_3", "1_4", "2_4", "3_4", "4_4", "1_5", "4_5", "1_6", "2_6", "3_6", "4_6"]);
  addData("c3", 0, "ㅅ", ["1_2", "1_3", "2_3", "1_4", "3_4", "1_5", "3_5", "1_6", "4_6"]);
  addData("c3", 0, "ㅇ", ["2_2", "3_2", "1_3", "4_3", "1_4", "4_4", "1_5", "4_5", "2_6", "3_6"]);
  addData("c3", 0, "ㅈ", ["1_2", "2_2", "3_2", "4_2", "2_3", "1_4", "3_4", "1_5", "4_5", "1_6", "4_6"]);
  addData("c3", 0, "ㅊ", ["2_2", "1_3", "2_3", "3_3", "4_3", "2_4", "1_5", "3_5", "1_6", "4_6"]);
  addData("c3", 0, "ㅋ", ["1_2", "2_2", "3_2", "4_2", "4_3", "1_4", "2_4", "3_4", "4_4", "4_5", "4_6"]);
  addData("c3", 0, "ㅌ", ["1_2", "2_2", "3_2", "4_2", "1_3", "1_4", "2_4", "3_4", "4_4", "1_5", "1_6", "2_6", "3_6", "4_6"]);
  addData("c3", 0, "ㅍ", ["1_2", "2_2", "3_2", "4_2", "2_3", "3_3", "2_4", "3_4", "2_5", "3_5", "1_6", "2_6", "3_6", "4_6"]);
  addData("c3", 0, "ㅎ", ["2_2", "1_3", "2_3", "3_3", "4_3", "2_4", "3_4", "1_5", "4_5", "2_6", "3_6"]);
  addData("v2", 0, "ㅏ", ["1_2", "1_3", "1_4", "2_4", "3_4", "1_5", "1_6"]);
  addData("v2", 0, "ㅑ", ["1_2", "1_3", "2_3", "3_3", "1_4", "1_5", "2_5", "3_5", "1_6"]);
  addData("v2", 0, "ㅓ", ["3_2", "3_3", "1_4", "2_4", "3_4", "3_5", "3_6"]);
  addData("v2", 0, "ㅕ", ["3_2", "1_3", "2_3", "3_3", "3_4", "1_5", "2_5", "3_5", "3_6"]);
  addData("h2", 0, "ㅗ", ["3_3", "3_4", "1_5", "2_5", "3_5", "4_5", "5_5"]);
  addData("h2", 0, "ㅛ", ["2_3", "4_3", "2_4", "4_4", "1_5", "2_5", "3_5", "4_5", "5_5"]);
  addData("h2", 0, "ㅜ", ["1_3", "2_3", "3_3", "4_3", "5_3", "3_4", "3_5"]);
  addData("h2", 0, "ㅠ", ["1_3", "2_3", "3_3", "4_3", "5_3", "2_4", "4_4", "2_5", "4_5"]);
  addData("h1", 0, "ㅡ", ["1_4", "2_4", "3_4", "4_4", "5_4"]);
  addData("v1", 0, "ㅣ", ["1_2", "1_3", "1_4", "1_5", "1_6"]);
  addData("c5", 0, "ㄲ", ["1_2", "2_2", "3_2", "4_2", "2_3", "4_3", "2_4", "4_4", "2_5", "4_5", "2_6", "4_6"]);
  addData("c5", 0, "ㄸ", ["1_2", "2_2", "3_2", "4_2", "1_3", "3_3", "1_4", "3_4", "1_5", "3_5", "1_6", "2_6", "3_6", "4_6"]);
  addData("c5", 0, "ㅃ", ["1_2", "3_2", "5_2", "1_3", "2_3", "3_3", "4_3", "5_3", "1_4", "3_4", "5_4", "1_5", "3_5", "5_5", "1_6", "2_6", "3_6", "4_6", "5_6"]);
  addData("c5", 0, "ㅆ", ["1_2", "3_2", "1_3", "2_3", "3_3", "4_3", "1_4", "2_4", "3_4", "4_4", "1_5", "3_5", "5_5", "1_6", "3_6", "5_6"]);
  addData("c5", 0, "ㅉ", ["1_2", "2_2", "3_2", "4_2", "5_2", "2_3", "4_3", "2_4", "4_4", "1_5", "3_5", "5_5", "1_6", "3_6", "5_6"]);
  addData("v3", 0, "ㅐ", ["1_2", "3_2", "1_3", "3_3", "1_4", "2_4", "3_4", "1_5", "3_5", "1_6", "3_6"]);
  addData("v3", 0, "ㅒ", ["1_2", "3_2", "1_3", "2_3", "3_3", "1_4", "3_4", "1_5", "2_5", "3_5", "1_6", "3_6"]);
  addData("v3", 0, "ㅖ", ["2_2", "4_2", "1_3", "2_3", "4_3", "2_4", "4_4", "1_5", "2_5", "4_5", "2_6", "4_6"]);
  addData("c2c3", 0, "ㄱ", ["1_2", "2_2", "3_2", "3_3", "3_4", "3_5", "3_6"]);
  addData("c3c2", 1, "ㄱ", ["4_2", "5_2", "6_2", "6_3", "6_4", "6_5", "6_6"]);
  addData("c2c3", 0, "ㄱ", ["1_2", "2_2", "3_2", "3_3", "3_4", "3_5", "3_6"]);
  addData("c2c3", 0, "ㄴ", ["1_2", "1_3", "1_4", "1_5", "1_6", "2_6", "3_6"]);
  addData("c3c2", 0, "ㄹ", ["1_2", "2_2", "3_2", "3_3", "1_4", "2_4", "3_4", "1_5", "1_6", "2_6", "3_6"]);
  addData("c3c3", 0, "ㄹ", ["1_2", "2_2", "3_2", "3_3", "1_4", "2_4", "3_4", "1_5", "1_6", "2_6", "3_6"]);
  addData("c3c3", 1, "ㅁ", ["4_2", "5_2", "6_2", "4_3", "6_3", "4_4", "6_4", "4_5", "6_5", "4_6", "5_6", "6_6"]);
  addData("c3c3", 0, "ㅂ", ["1_2", "3_2", "1_3", "3_3", "1_4", "2_4", "3_4", "1_5", "3_5", "1_6", "2_6", "3_6"]);
  addData("c3c3", 1, "ㅂ", ["4_2", "6_2", "4_3", "6_3", "4_4", "5_4", "6_4", "4_5", "6_5", "4_6", "5_6", "6_6"]);
  addData("c2c3", 1, "ㅅ", ["5_2", "5_3", "4_4", "6_4", "4_5", "6_5", "4_6", "6_6"]);
  addData("c3c3", 1, "ㅅ", ["5_2", "5_3", "4_4", "6_4", "4_5", "6_5", "4_6", "6_6"]);
  addData("c2c3", 1, "ㅈ", ["4_2", "5_2", "6_2", "5_3", "5_4", "4_5", "6_5", "4_6", "6_6"]);
  addData("c3c3", 1, "ㅌ", ["4_2", "5_2", "6_2", "4_3", "4_4", "5_4", "6_4", "4_5", "4_6", "5_6", "6_6"]);
  addData("c3c3", 1, "ㅍ", ["4_2", "5_2", "6_2", "5_3", "6_3", "5_4", "6_4", "5_5", "6_5", "4_6", "5_6", "6_6"]);
  addData("c2c3", 1, "ㅎ", ["5_2", "4_3", "5_3", "6_3", "5_4", "4_5", "6_5", "5_6"]);
  addData("c3c3", 1, "ㅎ", ["5_2", "4_3", "5_3", "6_3", "5_4", "4_5", "6_5", "5_6"]);
})();

// "c2v1", "c3v1", "c5v1"
(() => {
  addData("c2v1", 0, "ㄱ", ["1_1", "2_1", "3_1", "4_1", "4_2", "4_3", "4_4", "4_5", "4_6", "4_7"]);
  addData("c2v1", 0, "ㄴ", ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v1", 0, "ㄷ", ["1_1", "2_1", "3_1", "4_1", "1_2", "1_3", "1_4", "1_5", "1_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v1", 0, "ㄹ", ["1_1", "2_1", "3_1", "4_1", "4_2", "4_3", "1_4", "2_4", "3_4", "4_4", "1_5", "1_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v1", 0, "ㅁ", ["1_1", "2_1", "3_1", "4_1", "1_2", "4_2", "1_3", "4_3", "1_4", "4_4", "1_5", "4_5", "1_6", "4_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v1", 0, "ㅂ", ["1_1", "4_1", "1_2", "4_2", "1_3", "4_3", "1_4", "2_4", "3_4", "4_4", "1_5", "4_5", "1_6", "4_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v1", 0, "ㅅ", ["1_1", "1_2", "2_2", "1_3", "2_3", "1_4", "3_4", "1_5", "3_5", "1_6", "4_6", "1_7", "4_7"]);
  addData("c3v1", 0, "ㅇ", ["2_1", "3_1", "1_2", "4_2", "1_3", "4_3", "1_4", "4_4", "1_5", "4_5", "1_6", "4_6", "2_7", "3_7"]);
  addData("c3v1", 0, "ㅈ", ["1_1", "2_1", "3_1", "4_1", "2_2", "2_3", "1_4", "3_4", "1_5", "3_5", "1_6", "4_6", "1_7", "4_7"]);
  addData("c3v1", 0, "ㅊ", ["2_1", "1_2", "2_2", "3_2", "4_2", "2_3", "2_4", "1_5", "3_5", "1_6", "3_6", "1_7", "4_7"]);
  addData("c3v1", 0, "ㅋ", ["1_1", "2_1", "3_1", "4_1", "4_2", "4_3", "1_4", "2_4", "3_4", "4_4", "4_5", "4_6", "4_7"]);
  addData("c3v1", 0, "ㅌ", ["1_1", "2_1", "3_1", "4_1", "1_2", "1_3", "1_4", "2_4", "3_4", "4_4", "1_5", "1_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v1", 0, "ㅍ", ["1_1", "2_1", "3_1", "4_1", "2_2", "3_2", "2_3", "3_3", "2_4", "3_4", "2_5", "3_5", "2_6", "3_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v1", 0, "ㅎ", ["2_1", "1_2", "2_2", "3_2", "4_2", "2_3", "3_3", "1_4", "4_4", "1_5", "4_5", "1_6", "4_6", "2_7", "3_7"]);
  addData("c5v1", 0, "ㄲ", ["1_1", "2_1", "3_1", "4_1", "2_2", "4_2", "2_3", "4_3", "2_4", "4_4", "2_5", "4_5", "2_6", "4_6", "2_7", "4_7"]);
  addData("c5v1", 0, "ㄸ", ["1_1", "2_1", "3_1", "4_1", "1_2", "3_2", "1_3", "3_3", "1_4", "3_4", "1_5", "3_5", "1_6", "3_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c5v1", 0, "ㅃ", ["1_1", "3_1", "5_1", "1_2", "3_2", "5_2", "1_3", "2_3", "3_3", "4_3", "5_3", "1_4", "3_4", "5_4", "1_5", "3_5", "5_5", "1_6", "3_6", "5_6", "1_7", "2_7", "3_7", "4_7", "5_7"]);
  addData("c5v1", 0, "ㅆ", ["1_1", "3_1", "1_2", "2_2", "3_2", "4_2", "1_3", "2_3", "3_3", "4_3", "1_4", "3_4", "5_4", "1_5", "3_5", "5_5", "1_6", "3_6", "5_6", "1_7", "3_7", "5_7"]);
  addData("c5v1", 0, "ㅉ", ["1_1", "2_1", "3_1", "4_1", "5_1", "2_2", "4_2", "2_3", "4_3", "1_4", "3_4", "5_4", "1_5", "3_5", "5_5", "1_6", "3_6", "5_6", "1_7", "3_7", "5_7"]);
  addData("c2v1", 1, "ㅣ", ["6_1", "6_2", "6_3", "6_4", "6_5", "6_6", "6_7"]);
  addData("c3v1", 1, "ㅣ", ["6_1", "6_2", "6_3", "6_4", "6_5", "6_6", "6_7"]);
  addData("c5v1", 1, "ㅣ", ["7_1", "7_2", "7_3", "7_4", "7_5", "7_6", "7_7"]);
})();

// "c2h1", "c3h1", "c5h1"
(() => {
  addData("c2h1", 0, "ㄱ", ["2_1", "3_1", "4_1", "5_1", "6_1", "6_2", "6_3", "6_4"]);
  addData("c2h1", 0, "ㄴ", ["2_1", "2_2", "2_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h1", 0, "ㄷ", ["2_1", "3_1", "4_1", "5_1", "6_1", "2_2", "2_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h1", 0, "ㄹ", ["2_1", "3_1", "4_1", "5_1", "6_1", "5_2", "6_2", "2_3", "3_3", "4_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h1", 0, "ㅁ", ["2_1", "3_1", "4_1", "5_1", "6_1", "2_2", "6_2", "2_3", "6_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h1", 0, "ㅂ", ["2_1", "6_1", "2_2", "3_2", "4_2", "5_2", "6_2", "2_3", "6_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h1", 0, "ㅅ", ["2_1", "2_2", "3_2", "2_3", "4_3", "5_3", "2_4", "6_4"]);
  addData("c3h1", 0, "ㅇ", ["3_1", "4_1", "5_1", "2_2", "6_2", "2_3", "6_3", "3_4", "4_4", "5_4"]);
  addData("c3h1", 0, "ㅈ", ["2_1", "3_1", "4_1", "5_1", "6_1", "3_2", "4_2", "3_3", "5_3", "2_4", "6_4"]);
  addData("c3h1", 0, "ㅊ", ["4_1", "2_2", "3_2", "4_2", "5_2", "6_2", "3_3", "5_3", "2_4", "6_4"]);
  addData("c3h1", 0, "ㅋ", ["2_1", "3_1", "4_1", "5_1", "6_1", "6_2", "3_3", "4_3", "5_3", "6_3", "6_4"]);
  addData("c3h1", 0, "ㅌ", ["2_1", "3_1", "4_1", "5_1", "6_1", "2_2", "3_2", "4_2", "5_2", "2_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h1", 0, "ㅍ", ["2_1", "3_1", "4_1", "5_1", "6_1", "3_2", "5_2", "3_3", "5_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h1", 0, "ㅎ", ["4_1", "2_2", "3_2", "4_2", "5_2", "6_2", "3_3", "5_3", "4_4"]);
  addData("c5h1", 0, "ㄲ", ["2_2", "3_2", "4_2", "5_2", "6_2", "4_3", "6_3", "4_4", "6_4", "4_5", "6_5"]);
  addData("c5h1", 0, "ㄸ", ["2_2", "3_2", "4_2", "5_2", "6_2", "2_3", "4_3", "2_4", "4_4", "2_5", "3_5", "4_5", "5_5", "6_5"]);
  addData("c5h1", 0, "ㅃ", ["2_2", "4_2", "6_2", "2_3", "3_3", "4_3", "5_3", "6_3", "2_4", "4_4", "6_4", "2_5", "3_5", "4_5", "5_5", "6_5"]);
  addData("c5h1", 0, "ㅆ", ["2_2", "4_2", "2_3", "3_3", "4_3", "5_3", "2_4", "4_4", "6_4", "2_5", "4_5", "6_5"]);
  addData("c5h1", 0, "ㅉ", ["2_2", "3_2", "4_2", "5_2", "6_2", "3_3", "5_3", "2_4", "4_4", "6_4", "2_5", "4_5", "6_5"]);
  addData("c2h1", 1, "ㅡ", ["1_7", "2_7", "3_7", "4_7", "5_7", "6_7", "7_7"]);
  addData("c3h1", 1, "ㅡ", ["1_7", "2_7", "3_7", "4_7", "5_7", "6_7", "7_7"]);
  addData("c5h1", 1, "ㅡ", ["1_7", "2_7", "3_7", "4_7", "5_7", "6_7", "7_7"]);
})();

// "c2v2", "c3v2", "c5v2"
(() => {
  addData("c2v2", 0, "ㄱ", ["1_1", "2_1", "3_1", "4_1", "4_2", "4_3", "4_4", "4_5", "4_6", "4_7"]);
  addData("c2v2", 0, "ㄴ", ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v2", 0, "ㄷ", ["1_1", "2_1", "3_1", "4_1", "1_2", "1_3", "1_4", "1_5", "1_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v2", 0, "ㄹ", ["1_1", "2_1", "3_1", "4_1", "4_2", "4_3", "1_4", "2_4", "3_4", "4_4", "1_5", "1_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v2", 0, "ㅁ", ["1_1", "2_1", "3_1", "4_1", "1_2", "4_2", "1_3", "4_3", "1_4", "4_4", "1_5", "4_5", "1_6", "4_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v2", 0, "ㅂ", ["1_1", "4_1", "1_2", "4_2", "1_3", "2_3", "3_3", "4_3", "1_4", "4_4", "1_5", "4_5", "1_6", "4_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v2", 0, "ㅅ", ["1_1", "1_2", "2_2", "1_3", "2_3", "1_4", "3_4", "1_5", "3_5", "1_6", "4_6", "1_7", "4_7"]);
  addData("c3v2", 0, "ㅇ", ["2_1", "3_1", "1_2", "4_2", "1_3", "4_3", "1_4", "4_4", "1_5", "4_5", "1_6", "4_6", "2_7", "3_7"]);
  addData("c3v2", 0, "ㅈ", ["1_1", "2_1", "3_1", "4_1", "2_2", "2_3", "1_4", "3_4", "1_5", "3_5", "1_6", "4_6", "1_7", "4_7"]);
  addData("c3v2", 0, "ㅊ", ["2_1", "1_2", "2_2", "3_2", "4_2", "2_3", "2_4", "1_5", "3_5", "1_6", "3_6", "1_7", "4_7"]);
  addData("c3v2", 0, "ㅋ", ["1_1", "2_1", "3_1", "4_1", "4_2", "4_3", "1_4", "2_4", "3_4", "4_4", "4_5", "4_6", "4_7"]);
  addData("c3v2", 0, "ㅌ", ["1_1", "2_1", "3_1", "4_1", "1_2", "1_3", "1_4", "2_4", "3_4", "4_4", "1_5", "1_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v2", 0, "ㅍ", ["1_1", "2_1", "3_1", "4_1", "2_2", "3_2", "2_3", "3_3", "2_4", "3_4", "2_5", "3_5", "2_6", "3_6", "1_7", "2_7", "3_7", "4_7"]);
  addData("c3v2", 0, "ㅎ", ["2_1", "1_2", "2_2", "3_2", "4_2", "2_3", "3_3", "1_4", "4_4", "1_5", "4_5", "1_6", "4_6", "2_7", "3_7"]);
  addData("c5v2", 0, "ㄲ", ["1_1", "2_1", "3_1", "4_1", "5_1", "3_2", "5_2", "3_3", "5_3", "3_4", "5_4", "3_5", "5_5", "3_6", "5_6", "3_7", "5_7"]);
  addData("c5v2", 0, "ㄸ", ["1_1", "2_1", "3_1", "4_1", "5_1", "1_2", "3_2", "1_3", "3_3", "1_4", "3_4", "1_5", "3_5", "1_6", "3_6", "1_7", "2_7", "3_7", "4_7", "5_7"]);
  addData("c5v2", 0, "ㅃ", ["1_1", "3_1", "5_1", "1_2", "3_2", "5_2", "1_3", "2_3", "3_3", "4_3", "5_3", "1_4", "3_4", "5_4", "1_5", "3_5", "5_5", "1_6", "3_6", "5_6", "1_7", "2_7", "3_7", "4_7", "5_7"]);
  addData("c5v2", 0, "ㅆ", ["1_1", "3_1", "1_2", "2_2", "3_2", "4_2", "1_3", "2_3", "3_3", "4_3", "1_4", "3_4", "5_4", "1_5", "3_5", "5_5", "1_6", "3_6", "5_6", "1_7", "3_7", "5_7"]);
  addData("c5v2", 0, "ㅉ", ["1_1", "2_1", "3_1", "4_1", "5_1", "2_2", "4_2", "2_3", "4_3", "1_4", "3_4", "5_4", "1_5", "3_5", "5_5", "1_6", "3_6", "5_6", "1_7", "3_7", "5_7"]);
  addData("c2v2", 1, "ㅏ", ["6_1", "6_2", "6_3", "6_4", "7_4", "6_5", "6_6", "6_7"]);
  addData("c3v2", 1, "ㅏ", ["6_1", "6_2", "6_3", "6_4", "7_4", "6_5", "6_6", "6_7"]);
  addData("c5v2", 1, "ㅏ", ["6_1", "6_2", "6_3", "6_4", "7_4", "6_5", "6_6", "6_7"]);
  addData("c2v2", 1, "ㅑ", ["6_1", "6_2", "6_3", "7_3", "6_4", "6_5", "7_5", "6_6", "6_7"]);
  addData("c3v2", 1, "ㅑ", ["6_1", "6_2", "6_3", "7_3", "6_4", "6_5", "7_5", "6_6", "6_7"]);
  addData("c5v2", 1, "ㅑ", ["6_1", "6_2", "6_3", "7_3", "6_4", "6_5", "7_5", "6_6", "6_7"]);
  addData("c2v2", 1, "ㅓ", ["7_1", "7_2", "7_3", "6_4", "7_4", "7_5", "7_6", "7_7"]);
  addData("c3v2", 1, "ㅓ", ["7_1", "7_2", "7_3", "6_4", "7_4", "7_5", "7_6", "7_7"]);
  addData("c5v2", 1, "ㅓ", ["7_1", "7_2", "7_3", "6_4", "7_4", "7_5", "7_6", "7_7"]);
  addData("c2v2", 1, "ㅕ", ["7_1", "7_2", "6_3", "7_3", "7_4", "6_5", "7_5", "7_6", "7_7"]);
  addData("c3v2", 1, "ㅕ", ["7_1", "7_2", "6_3", "7_3", "7_4", "6_5", "7_5", "7_6", "7_7"]);
  addData("c5v2", 1, "ㅕ", ["7_1", "7_2", "6_3", "7_3", "7_4", "6_5", "7_5", "7_6", "7_7"]);
})();

// "c2h2", "c3h2", "c5v2"
(() => {
  addData("c2h2", 0, "ㄱ", ["2_1", "3_1", "4_1", "5_1", "6_1", "6_2", "6_3", "6_4"]);
  addData("c2h2", 0, "ㄴ", ["2_1", "2_2", "2_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h2", 0, "ㄷ", ["2_1", "3_1", "4_1", "5_1", "6_1", "2_2", "2_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h2", 0, "ㄹ", ["2_1", "3_1", "4_1", "5_1", "6_1", "5_2", "6_2", "2_3", "3_3", "4_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h2", 0, "ㅁ", ["2_1", "3_1", "4_1", "5_1", "6_1", "2_2", "6_2", "2_3", "6_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h2", 0, "ㅂ", ["2_1", "6_1", "2_2", "3_2", "4_2", "5_2", "6_2", "2_3", "6_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h2", 0, "ㅅ", ["2_1", "2_2", "3_2", "2_3", "4_3", "5_3", "2_4", "6_4"]);
  addData("c3h2", 0, "ㅇ", ["3_1", "4_1", "5_1", "2_2", "6_2", "2_3", "6_3", "3_4", "4_4", "5_4"]);
  addData("c3h2", 0, "ㅈ", ["2_1", "3_1", "4_1", "5_1", "6_1", "3_2", "4_2", "3_3", "5_3", "2_4", "6_4"]);
  addData("c3h2", 0, "ㅊ", ["4_1", "2_2", "3_2", "4_2", "5_2", "6_2", "3_3", "5_3", "2_4", "6_4"]);
  addData("c3h2", 0, "ㅋ", ["2_1", "3_1", "4_1", "5_1", "6_1", "6_2", "3_3", "4_3", "5_3", "6_3", "6_4"]);
  addData("c3h2", 0, "ㅌ", ["2_1", "3_1", "4_1", "5_1", "6_1", "2_2", "3_2", "4_2", "5_2", "2_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h2", 0, "ㅍ", ["2_1", "3_1", "4_1", "5_1", "6_1", "3_2", "5_2", "3_3", "5_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c3h2", 0, "ㅎ", ["4_1", "2_2", "3_2", "4_2", "5_2", "6_2", "3_3", "5_3", "4_4"]);
  addData("c5h2", 0, "ㄲ", ["2_1", "3_1", "4_1", "5_1", "6_1", "4_2", "6_2", "4_3", "6_3", "4_4", "6_4"]);
  addData("c5h2", 0, "ㄸ", ["2_1", "3_1", "4_1", "5_1", "6_1", "2_2", "4_2", "2_3", "4_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c5h2", 0, "ㅃ", ["2_1", "4_1", "6_1", "2_2", "3_2", "4_2", "5_2", "6_2", "2_3", "4_3", "6_3", "2_4", "3_4", "4_4", "5_4", "6_4"]);
  addData("c5h2", 0, "ㅆ", ["2_1", "4_1", "2_2", "3_2", "4_2", "5_2", "2_3", "4_3", "6_3", "2_4", "4_4", "6_4"]);
  addData("c5h2", 0, "ㅉ", ["2_1", "3_1", "4_1", "5_1", "6_1", "3_2", "5_2", "2_3", "4_3", "6_3", "2_4", "4_4", "6_4"]);
  addData("c2h2", 1, "ㅜ", ["1_6", "2_6", "3_6", "4_6", "5_6", "6_6", "7_6", "4_7"]);
  addData("c3h2", 1, "ㅜ", ["1_6", "2_6", "3_6", "4_6", "5_6", "6_6", "7_6", "4_7"]);
  addData("c5h2", 1, "ㅜ", ["1_6", "2_6", "3_6", "4_6", "5_6", "6_6", "7_6", "4_7"]);
  addData("c2h2", 1, "ㅠ", ["1_6", "2_6", "3_6", "4_6", "5_6", "6_6", "7_6", "3_7", "5_7"]);
  addData("c3h2", 1, "ㅠ", ["1_6", "2_6", "3_6", "4_6", "5_6", "6_6", "7_6", "3_7", "5_7"]);
  addData("c5h2", 1, "ㅠ", ["1_6", "2_6", "3_6", "4_6", "5_6", "6_6", "7_6", "3_7", "5_7"]);
  addData("c2h2", 1, "ㅗ", ["4_6", "1_7", "2_7", "3_7", "4_7", "5_7", "6_7", "7_7"]);
  addData("c3h2", 1, "ㅗ", ["4_6", "1_7", "2_7", "3_7", "4_7", "5_7", "6_7", "7_7"]);
  addData("c5h2", 1, "ㅗ", ["4_6", "1_7", "2_7", "3_7", "4_7", "5_7", "6_7", "7_7"]);
  addData("c2h2", 1, "ㅛ", ["3_6", "5_6", "1_7", "2_7", "3_7", "4_7", "5_7", "6_7", "7_7"]);
  addData("c3h2", 1, "ㅛ", ["3_6", "5_6", "1_7", "2_7", "3_7", "4_7", "5_7", "6_7", "7_7"]);
  addData("c5h2", 1, "ㅛ", ["3_6", "5_6", "1_7", "2_7", "3_7", "4_7", "5_7", "6_7", "7_7"]);
})();

// "c2v1c2", "c2v1c3", "c2v1c2c3", "c2v1c3c2", "c2v1c3c3", "c2v2c2", "c2v2c3", "c2v2c2c3", "c2v2c3c2", "c2v2c3c3"
(() => {
  addData("c2v1c2", 0, "ㄱ", ["2_1", "3_1", "4_1", "4_2", "4_3"]);
  addData("c2v1c3", 0, "ㄱ", ["2_1", "3_1", "4_1", "4_2"]);
  addData("c2v2c2", 0, "ㄱ", ["2_1", "3_1", "4_1", "4_2", "4_3"]);
  addData("c2v2c3", 0, "ㄱ", ["2_1", "3_1", "4_1", "4_2"]);
  addData("c2v1c2c3", 0, "ㄱ", ["2_1", "3_1", "4_1", "4_2"]);
  addData("c2v1c3c2", 0, "ㄱ", ["2_1", "3_1", "4_1", "4_2"]);
  addData("c2v1c3c3", 0, "ㄱ", ["2_1", "3_1", "4_1", "4_2"]);
  addData("c2v2c2c3", 0, "ㄱ", ["2_1", "3_1", "4_1", "4_2"]);
  addData("c2v2c3c2", 0, "ㄱ", ["2_1", "3_1", "4_1", "4_2"]);
  addData("c2v2c3c3", 0, "ㄱ", ["2_1", "3_1", "4_1", "4_2"]);
  addData("c2v1c2", 0, "ㄴ", ["2_1", "2_2", "2_3", "3_3", "4_3"]);
  addData("c2v1c3", 0, "ㄴ", ["2_1", "2_2", "3_2", "4_2"]);
  addData("c2v2c2", 0, "ㄴ", ["2_1", "2_2", "2_3", "3_3", "4_3"]);
  addData("c2v2c3", 0, "ㄴ", ["2_1", "2_2", "3_2", "4_2"]);
  addData("c2v1c2c3", 0, "ㄴ", ["2_1", "2_2", "3_2", "4_2"]);
  addData("c2v1c3c2", 0, "ㄴ", ["2_1", "2_2", "3_2", "4_2"]);
  addData("c2v1c3c3", 0, "ㄴ", ["2_1", "2_2", "3_2", "4_2"]);
  addData("c2v2c2c3", 0, "ㄴ", ["2_1", "2_2", "3_2", "4_2"]);
  addData("c2v2c3c2", 0, "ㄴ", ["2_1", "2_2", "3_2", "4_2"]);
  addData("c2v2c3c3", 0, "ㄴ", ["2_1", "2_2", "3_2", "4_2"]);

  addData("c2v1c2", 1, "ㅣ", ["6_1", "6_2", "6_3", "6_4"]);
  addData("c2v1c3", 1, "ㅣ", ["6_1", "6_2", "6_3"]);
  addData("c2v1c2c3", 1, "ㅣ", ["6_1", "6_2", "6_3"]);
  addData("c2v1c3c2", 1, "ㅣ", ["6_1", "6_2", "6_3"]);
  addData("c2v1c3c3", 1, "ㅣ", ["6_1", "6_2", "6_3"]);
  addData("c2v2c2", 1, "ㅏ", ["6_1", "6_2", "7_2", "6_3", "6_4"]);
  addData("c2v2c3", 1, "ㅏ", ["6_1", "6_2", "7_2", "6_3"]);
  addData("c2v2c2c3", 1, "ㅏ", ["6_1", "6_2", "7_2", "6_3"]);
  addData("c2v2c3c2", 1, "ㅏ", ["6_1", "6_2", "7_2", "6_3"]);
  addData("c2v2c3c3", 1, "ㅏ", ["6_1", "6_2", "7_2", "6_3"]);
  addData("c2v2c2", 1, "ㅑ", ["6_1", "6_2", "7_2", "6_3", "7_3", "6_4"]);
  addData("c2v2c3", 1, "ㅑ", ["6_1", "6_2", "7_2", "6_3", "7_3"]);
  addData("c2v2c2c3", 1, "ㅑ", ["6_1", "6_2", "7_2", "6_3", "7_3"]);
  addData("c2v2c3c2", 1, "ㅑ", ["6_1", "6_2", "7_2", "6_3", "7_3"]);
  addData("c2v2c3c3", 1, "ㅑ", ["6_1", "6_2", "7_2", "6_3", "7_3"]);
  addData("c2v2c2", 1, "ㅓ", ["7_1", "6_2", "7_2", "7_3", "7_4"]);
  addData("c2v2c3", 1, "ㅓ", ["7_1", "6_2", "7_2", "7_3"]);
  addData("c2v2c2c3", 1, "ㅓ", ["7_1", "6_2", "7_2", "7_3"]);
  addData("c2v2c3c2", 1, "ㅓ", ["7_1", "6_2", "7_2", "7_3"]);
  addData("c2v2c3c3", 1, "ㅓ", ["7_1", "6_2", "7_2", "7_3"]);
  addData("c2v2c2", 1, "ㅕ", ["7_1", "6_2", "7_2", "6_3", "7_3", "7_4"]);
  addData("c2v2c3", 1, "ㅕ", ["7_1", "6_2", "7_2", "6_3", "7_3"]);
  addData("c2v2c2c3", 1, "ㅕ", ["7_1", "6_2", "7_2", "6_3", "7_3"]);
  addData("c2v2c3c2", 1, "ㅕ", ["7_1", "6_2", "7_2", "6_3", "7_3"]);
  addData("c2v2c3c3", 1, "ㅕ", ["7_1", "6_2", "7_2", "6_3", "7_3"]);

  addData("c2v1c2", 2, "ㄱ", ["3_5", "4_5", "5_5", "5_6", "5_7"]);
  addData("c2v2c2", 2, "ㄱ", ["3_5", "4_5", "5_5", "5_6", "5_7"]);
  addData("c2v1c2", 2, "ㄴ", ["3_5", "3_6", "3_7", "4_7", "5_7"]);
  addData("c2v2c2", 2, "ㄴ", ["3_5", "3_6", "3_7", "4_7", "5_7"]);
  addData("c2v1c3", 2, "ㄷ", ["3_4", "4_4", "5_4", "3_5", "3_6", "3_7", "4_7", "5_7"]);
  addData("c2v2c3", 2, "ㄷ", ["3_4", "4_4", "5_4", "3_5", "3_6", "3_7", "4_7", "5_7"]);
  addData("c2v1c3", 2, "ㄹ", ["3_4", "4_4", "5_4", "6_4", "5_5", "6_5", "3_6", "4_6", "3_7", "4_7", "5_7", "6_7"]);
  addData("c2v2c3", 2, "ㄹ", ["3_4", "4_4", "5_4", "6_4", "5_5", "6_5", "3_6", "4_6", "3_7", "4_7", "5_7", "6_7"]);
  addData("c2v1c3", 2, "ㅁ", ["3_4", "4_4", "5_4", "6_4", "3_5", "6_5", "3_6", "6_6", "3_7", "4_7", "5_7", "6_7"]);
  addData("c2v2c3", 2, "ㅁ", ["3_4", "4_4", "5_4", "6_4", "3_5", "6_5", "3_6", "6_6", "3_7", "4_7", "5_7", "6_7"]);
  addData("c2v1c3", 2, "ㅂ", ["3_4", "6_4", "3_5", "4_5", "5_5", "6_5", "3_6", "6_6", "3_7", "4_7", "5_7", "6_7"]);
  addData("c2v2c3", 2, "ㅂ", ["3_4", "6_4", "3_5", "4_5", "5_5", "6_5", "3_6", "6_6", "3_7", "4_7", "5_7", "6_7"]);
  addData("c2v1c3", 2, "ㅅ", ["3_4", "3_5", "4_5", "3_6", "5_6", "3_7", "6_7"]);
  addData("c2v2c3", 2, "ㅅ", ["3_4", "3_5", "4_5", "3_6", "5_6", "3_7", "6_7"]);
  addData("c2v1c3", 2, "ㅇ", ["4_4", "5_4", "3_5", "6_5", "3_6", "6_6", "4_7", "5_7"]);
  addData("c2v2c3", 2, "ㅇ", ["4_4", "5_4", "3_5", "6_5", "3_6", "6_6", "4_7", "5_7"]);
  addData("c2v1c3", 2, "ㅈ", ["3_4", "4_4", "5_4", "6_4", "4_5", "3_6", "5_6", "3_7", "6_7"]);
  addData("c2v2c3", 2, "ㅈ", ["3_4", "4_4", "5_4", "6_4", "4_5", "3_6", "5_6", "3_7", "6_7"]);
  addData("c2v1c3", 2, "ㅊ", ["4_4", "3_5", "4_5", "5_5", "6_5", "4_6", "3_7", "5_7", "6_7"]);
  addData("c2v2c3", 2, "ㅊ", ["4_4", "3_5", "4_5", "5_5", "6_5", "4_6", "3_7", "5_7", "6_7"]);
  addData("c2v1c3", 2, "ㅋ", ["3_4", "4_4", "5_4", "6_4", "6_5", "4_6", "5_6", "6_6", "6_7"]);
  addData("c2v2c3", 2, "ㅋ", ["3_4", "4_4", "5_4", "6_4", "6_5", "4_6", "5_6", "6_6", "6_7"]);
  addData("c2v1c3", 2, "ㅌ", ["3_4", "4_4", "5_4", "6_4", "3_5", "4_5", "5_5", "3_6", "3_7", "4_7", "5_7", "6_7"]);
  addData("c2v2c3", 2, "ㅌ", ["3_4", "4_4", "5_4", "6_4", "3_5", "4_5", "5_5", "3_6", "3_7", "4_7", "5_7", "6_7"]);
  addData("c2v1c3", 2, "ㅍ", ["3_4", "4_4", "5_4", "6_4", "4_5", "5_5", "4_6", "5_6", "3_7", "4_7", "5_7", "6_7"]);
  addData("c2v2c3", 2, "ㅍ", ["3_4", "4_4", "5_4", "6_4", "4_5", "5_5", "4_6", "5_6", "3_7", "4_7", "5_7", "6_7"]);
  addData("c2v1c3", 2, "ㅎ", ["5_4", "3_5", "4_5", "5_5", "6_5", "4_6", "6_6", "5_7"]);
  addData("c2v2c3", 2, "ㅎ", ["5_4", "3_5", "4_5", "5_5", "6_5", "4_6", "6_6", "5_7"]);
})();

console.log(data);
export default data;