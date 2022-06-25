import korData from "./data/korData.js";
import etcData from "./data/etcData.js";
const koreanCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
export default function generatePixelated(char) {
    char = char[0];
    if (koreanCheck.test(char)) {
        return generatedKorPixelated(char);
    }
    const charData = etcData.get(char);
    const charShape = getPixelMatrix();
    if (!charData)
        return charShape;
    for (const [x, y] of charData) {
        charShape[y - 1][x - 1] = 1;
    }
    return charShape;
}
function getPixelMatrix() {
    return Array(7).fill(null).map(_ => Array(7).fill(0));
}
const shapeTypes = ["c2", "c3", "c5", "v1", "v2", "v3", "h1", "h2"];
function isKoreanShape(shape) {
    return shape.filter(s => !shapeTypes.includes(s)).length === 0;
}
function isVaildShape(shape) {
    return shape in korData;
}
const korConsonants2 = ["ㄱ", "ㄴ"];
const korConsonants3 = ["ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const korConsonants5 = ["ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ"];
const korVowelsV1 = ["ㅣ"];
const korVowelsV2 = ["ㅏ", "ㅑ", "ㅓ", "ㅕ"];
const korVowelsV3 = ["ㅐ", "ㅒ", "ㅔ", "ㅖ"];
const korVowelsH1 = ["ㅡ"];
const korVowelsH2 = ["ㅗ", "ㅛ", "ㅜ", "ㅠ"];
const korAlphabetTypes = [
    [korConsonants2, "c2"], [korConsonants3, "c3"], [korConsonants5, "c5"],
    [korVowelsV1, "v1"], [korVowelsV2, "v2"], [korVowelsV3, "v3"],
    [korVowelsH1, "h1"], [korVowelsH2, "h2"]
];
function generatedKorPixelated(char) {
    char = char[0];
    const splited = Hangul.disassemble(char);
    const baseShape = splited.map(s => {
        for (const [alphabets, typeName] of korAlphabetTypes) {
            if (alphabets.includes(s))
                return typeName;
        }
        return -1;
    });
    const charShape = getPixelMatrix();
    if (!isKoreanShape(baseShape))
        return charShape;
    const shapeType = baseShape.join("");
    // console.log(char, shapeType);
    if (!isVaildShape(shapeType))
        return charShape;
    const shapeData = korData[shapeType];
    for (let pos = 0; pos < splited.length; pos++) {
        const key = `${pos}_${splited[pos]}`;
        const alphabetData = shapeData.get(key);
        if (!alphabetData)
            continue;
        for (const [x, y] of alphabetData) {
            charShape[y - 1][x - 1] = 1;
        }
    }
    return charShape;
}
