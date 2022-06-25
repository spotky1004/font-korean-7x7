const data = {};
function addData(shape, pos, alphabet, pixels) {
    if (!(shape in data)) {
        data[shape] = new Map();
    }
    const shapeData = data[shape];
    if (!shapeData)
        return;
    shapeData.set(`${pos}_${alphabet}`, pixels.map(pixel => pixel.split("_").map(pos => +pos)));
}
// "c2"
addData("c2", 0, "ㄱ", []);
export {};
