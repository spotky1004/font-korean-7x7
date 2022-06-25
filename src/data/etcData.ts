const data: Map<string, [number, number][]> = new Map();

type PixelPos = `${number}_${number}`;
function addData(char: string, pixels: PixelPos[]) {
  data.set(
    char,
    pixels.map(pixel => pixel.split("_").map(pos => +pos) as [number, number])
  );
}

addData("0", ["2_1", "3_1", "1_2", "4_2", "1_3", "2_3", "4_3", "1_4", "3_4", "4_4", "1_5", "4_5", "1_6", "4_6", "2_7", "3_7"]);
addData("1", ["2_1", "3_1", "3_2", "3_3", "3_4", "3_5", "3_6", "2_7", "3_7", "4_7"]);
addData("2", ["2_1", "3_1", "1_2", "4_2", "4_3", "3_4", "2_5", "1_6", "1_7", "2_7", "3_7", "4_7"]);
addData("3", ["2_1", "3_1", "1_2", "4_2", "4_3", "2_4", "3_4", "4_5", "1_6", "4_6", "2_7", "3_7"]);
addData("4", ["3_1", "4_1", "2_2", "4_2", "1_3", "4_3", "1_4", "2_4", "3_4", "4_4", "4_5", "4_6", "4_7"]);
addData("5", ["1_1", "2_1", "3_1", "4_1", "1_2", "1_3", "1_4", "2_4", "3_4", "4_5", "4_6", "1_7", "2_7", "3_7"]);
addData("6", ["2_1", "3_1", "1_2", "4_2", "1_3", "1_4", "2_4", "3_4", "1_5", "4_5", "1_6", "4_6", "2_7", "3_7"]);
addData("7", ["1_1", "2_1", "3_1", "4_1", "1_2", "4_2", "4_3", "3_4", "3_5", "2_6", "2_7"]);
addData("8", ["2_1", "3_1", "1_2", "4_2", "1_3", "4_3", "2_4", "3_4", "1_5", "4_5", "1_6", "4_6", "2_7", "3_7"]);
addData("9", ["2_1", "3_1", "1_2", "4_2", "1_3", "4_3", "2_4", "3_4", "4_4", "4_5", "1_6", "4_6", "2_7", "3_7"]);

addData(".", ["1_7"]);
addData("?", ["2_1", "3_1", "1_2", "4_2", "1_3", "4_3", "3_4", "3_5", "3_7"]);
addData("!", ["1_1", "1_2", "1_3", "1_4", "1_5", "1_7"]);
addData("@", ["2_1", "3_1", "4_1", "1_2", "5_2", "1_3", "2_3", "3_3", "5_3", "1_4", "2_4", "4_4", "5_4", "1_5", "2_5", "3_5", "4_5", "5_5", "1_6", "5_6", "2_7", "3_7", "4_7"]);
addData("#", ["2_1", "4_1", "2_2", "4_2", "1_3", "2_3", "3_3", "4_3", "5_3", "2_4", "4_4", "1_5", "2_5", "3_5", "4_5", "5_5", "2_6", "4_6", "2_7", "4_7"]);
addData("$", ["2_1", "3_1", "4_1", "1_2", "3_2", "5_2", "1_3", "3_3", "2_4", "3_4", "4_4", "3_5", "5_5", "1_6", "3_6", "5_6", "2_7", "3_7", "4_7"]);
addData("%", ["1_1", "2_1", "3_1", "5_1", "1_2", "3_2", "5_2", "1_3", "2_3", "4_3", "3_4", "2_5", "4_5", "5_5", "1_6", "3_6", "5_6", "1_7", "3_7", "4_7", "5_7"]);
addData("^", ["3_1", "2_2", "4_2"]);
addData("&", ["2_1", "3_1", "1_2", "4_2", "1_3", "3_3", "2_4", "5_4", "1_5", "3_5", "5_5", "1_6", "4_6", "2_7", "3_7", "5_7"]);
addData("*", ["2_3", "4_3", "3_4", "2_5", "4_5"]);
addData("(", ["4_1", "3_2", "3_3", "3_4", "3_5", "3_6", "4_7"]);
addData(")", ["3_1", "4_2", "4_3", "4_4", "4_5", "4_6", "3_7"]);
addData("{", ["4_1", "3_2", "3_3", "2_4", "3_5", "3_6", "4_7"]);
addData("}", ["2_1", "3_2", "3_3", "4_4", "3_5", "3_6", "2_7"]);
addData("[", ["3_1", "4_1", "3_2", "3_3", "3_4", "3_5", "3_6", "3_7", "4_7"]);
addData("]", ["3_1", "4_1", "4_2", "4_3", "4_4", "4_5", "4_6", "3_7", "4_7"]);
addData("<", ["4_1", "3_2", "2_3", "1_4", "2_5", "3_6", "4_7"]);
addData(">", ["1_1", "2_2", "3_3", "4_4", "3_5", "2_6", "1_7"]);
addData("+", ["3_3", "2_4", "3_4", "4_4", "3_5"]);
addData("-", ["2_4", "3_4", "4_4"]);
addData("_", ["1_7", "2_7", "3_7", "4_7"]);
addData("=", ["2_3", "3_3", "4_3", "2_5", "3_5", "4_5"]);
addData(":", ["1_3", "1_5"]);
addData(";", ["1_3", "1_5", "1_6"]);
addData("'", ["1_1", "1_2"]);
addData("\"", ["1_1", "3_1", "1_2", "3_2"]);
addData("/", ["4_1", "4_2", "3_3", "3_4", "2_5", "2_6", "1_7"]);
addData(",", ["2_6", "1_7"]);

addData("a", ["2_4", "3_4", "4_4", "1_5", "4_5", "1_6", "4_6", "2_7", "3_7", "4_7"]);
addData("b", ["1_2", "1_3", "1_4", "2_4", "3_4", "1_5", "4_5", "1_6", "4_6", "1_7", "2_7", "3_7"]);
addData("c", ["2_4", "3_4", "1_5", "1_6", "2_7", "3_7"]);
addData("d", ["4_2", "4_3", "2_4", "3_4", "4_4", "1_5", "4_5", "1_6", "4_6", "2_7", "3_7", "4_7"]);
addData("e", ["2_4", "3_4", "1_5", "4_5", "1_6", "2_6", "3_6", "2_7", "3_7", "4_7"]);
addData("f", ["3_2", "4_2", "2_3", "1_4", "2_4", "3_4", "4_4", "2_5", "2_6", "2_7"]);
addData("g", ["2_2", "3_2", "4_2", "1_3", "4_3", "1_4", "4_4", "2_5", "3_5", "4_5", "4_6", "2_7", "3_7"]);
addData("h", ["1_2", "1_3", "1_4", "2_4", "3_4", "1_5", "4_5", "1_6", "4_6", "1_7", "4_7"]);
addData("i", ["2_2", "2_4", "2_5", "2_6", "2_7"]);
addData("j", ["4_2", "4_4", "4_5", "1_6", "4_6", "2_7", "3_7"]);
addData("k", ["1_2", "1_3", "1_4", "3_4", "1_5", "2_5", "1_6", "3_6", "1_7", "4_7"]);
addData("l", ["1_2", "1_3", "1_4", "1_5", "1_6", "1_7"]);
addData("m", ["1_4", "2_4", "3_4", "4_4", "1_5", "3_5", "5_5", "1_6", "3_6", "5_6", "1_7", "3_7", "5_7"]);
addData("n", ["1_4", "2_4", "3_4", "1_5", "4_5", "1_6", "4_6", "1_7", "4_7"]);
addData("o", ["2_4", "3_4", "1_5", "4_5", "1_6", "4_6", "2_7", "3_7"]);
addData("p", ["2_3", "3_3", "1_4", "4_4", "1_5", "4_5", "1_6", "2_6", "3_6", "1_7"]);
addData("q", ["2_3", "3_3", "1_4", "4_4", "1_5", "4_5", "2_6", "3_6", "4_6", "4_7"]);
addData("r", ["1_4", "2_4", "3_4", "1_5", "4_5", "1_6", "1_7"]);
addData("s", ["2_4", "3_4", "1_5", "2_5", "3_6", "4_6", "2_7", "3_7"]);
addData("t", ["1_3", "1_4", "2_4", "3_4", "1_5", "1_6", "2_7", "3_7"]);
addData("u", ["1_4", "4_4", "1_5", "4_5", "1_6", "4_6", "2_7", "3_7", "4_7"]);
addData("v", ["1_4", "4_4", "1_5", "4_5", "1_6", "3_6", "2_7"]);
addData("w", ["1_4", "3_4", "5_4", "1_5", "3_5", "5_5", "1_6", "3_6", "5_6", "2_7", "3_7", "4_7", "5_7"]);
addData("x", ["1_4", "4_4", "2_5", "4_5", "1_6", "3_6", "1_7", "4_7"]);
addData("y", ["1_2", "4_2", "1_3", "4_3", "1_4", "4_4", "2_5", "3_5", "4_5", "4_6", "2_7", "3_7"]);
addData("z", ["1_4", "2_4", "3_4", "4_4", "3_5", "2_6", "1_7", "2_7", "3_7", "4_7"]);

addData("A", ["2_1", "3_1", "4_1", "1_2", "5_2", "1_3", "5_3", "1_4", "2_4", "3_4", "4_4", "5_4", "1_5", "5_5", "1_6", "5_6", "1_7", "5_7"]);
addData("B", ["1_1", "2_1", "3_1", "4_1", "1_2", "5_2", "1_3", "5_3", "1_4", "2_4", "3_4", "4_4", "1_5", "5_5", "1_6", "5_6", "1_7", "2_7", "3_7", "4_7"]);
addData("C", ["2_1", "3_1", "4_1", "1_2", "5_2", "1_3", "1_4", "1_5", "1_6", "5_6", "2_7", "3_7", "4_7"]);
addData("D", ["1_1", "2_1", "3_1", "4_1", "1_2", "5_2", "1_3", "5_3", "1_4", "5_4", "1_5", "5_5", "1_6", "5_6", "1_7", "2_7", "3_7", "4_7"]);
addData("E", ["1_1", "2_1", "3_1", "4_1", "5_1", "1_2", "1_3", "1_4", "2_4", "3_4", "1_5", "1_6", "1_7", "2_7", "3_7", "4_7", "5_7"]);
addData("F", ["1_1", "2_1", "3_1", "4_1", "5_1", "1_2", "1_3", "1_4", "2_4", "3_4", "1_5", "1_6", "1_7"]);
addData("G", ["2_1", "3_1", "4_1", "1_2", "5_2", "1_3", "1_4", "4_4", "5_4", "1_5", "5_5", "1_6", "5_6", "2_7", "3_7", "4_7"]);
addData("H", ["1_1", "5_1", "1_2", "5_2", "1_3", "5_3", "1_4", "2_4", "3_4", "4_4", "5_4", "1_5", "5_5", "1_6", "5_6", "1_7", "5_7"]);
addData("I", ["1_1", "2_1", "3_1", "4_1", "5_1", "3_2", "3_3", "3_4", "3_5", "3_6", "1_7", "2_7", "3_7", "4_7", "5_7"]);
addData("J", ["1_1", "2_1", "3_1", "4_1", "5_1", "4_2", "4_3", "4_4", "4_5", "1_6", "4_6", "2_7", "3_7"]);
addData("K", ["1_1", "5_1", "1_2", "4_2", "1_3", "3_3", "1_4", "2_4", "1_5", "3_5", "1_6", "4_6", "1_7", "5_7"]);
addData("L", ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6", "1_7", "2_7", "3_7", "4_7", "5_7"]);
addData("M", ["1_1", "2_1", "4_1", "5_1", "1_2", "3_2", "5_2", "1_3", "3_3", "5_3", "1_4", "5_4", "1_5", "5_5", "1_6", "5_6", "1_7", "5_7"]);
addData("N", ["1_1", "5_1", "1_2", "2_2", "5_2", "1_3", "3_3", "5_3", "1_4", "3_4", "5_4", "1_5", "3_5", "5_5", "1_6", "4_6", "5_6", "1_7", "5_7"]);
addData("O", ["2_1", "3_1", "4_1", "1_2", "5_2", "1_3", "5_3", "1_4", "5_4", "1_5", "5_5", "1_6", "5_6", "2_7", "3_7", "4_7"]);
addData("P", ["1_1", "2_1", "3_1", "4_1", "1_2", "5_2", "1_3", "5_3", "1_4", "2_4", "3_4", "4_4", "1_5", "1_6", "1_7"]);
addData("Q", ["2_1", "3_1", "4_1", "1_2", "5_2", "1_3", "5_3", "1_4", "5_4", "1_5", "3_5", "5_5", "1_6", "4_6", "2_7", "3_7", "5_7"]);
addData("R", ["1_1", "2_1", "3_1", "4_1", "1_2", "5_2", "1_3", "5_3", "1_4", "2_4", "3_4", "4_4", "1_5", "2_5", "1_6", "3_6", "1_7", "4_7", "5_7"]);
addData("S", ["2_1", "3_1", "4_1", "1_2", "5_2", "1_3", "2_4", "3_4", "4_4", "5_5", "1_6", "5_6", "2_7", "3_7", "4_7"]);
addData("T", ["1_1", "2_1", "3_1", "4_1", "5_1", "3_2", "3_3", "3_4", "3_5", "3_6", "3_7"]);
addData("U", ["1_1", "5_1", "1_2", "5_2", "1_3", "5_3", "1_4", "5_4", "1_5", "5_5", "1_6", "5_6", "2_7", "3_7", "4_7"]);
addData("V", ["1_1", "5_1", "1_2", "5_2", "1_3", "5_3", "1_4", "5_4", "1_5", "5_5", "2_6", "4_6", "3_7"]);
addData("W", ["1_1", "5_1", "1_2", "5_2", "1_3", "5_3", "1_4", "5_4", "1_5", "3_5", "5_5", "1_6", "3_6", "5_6", "2_7", "3_7", "4_7"]);
addData("X", ["1_1", "5_1", "1_2", "5_2", "2_3", "4_3", "3_4", "2_5", "4_5", "1_6", "5_6", "1_7", "5_7"]);
addData("Y", ["1_1", "5_1", "1_2", "5_2", "2_3", "4_3", "3_4", "3_5", "3_6", "3_7"]);
addData("Z", ["1_1", "2_1", "3_1", "4_1", "5_1", "5_2", "4_3", "3_4", "2_5", "1_6", "1_7", "2_7", "3_7", "4_7", "5_7"]);

addData("⚀", ["2_1", "3_1", "4_1", "5_1", "6_1", "1_2", "7_2", "1_3", "7_3", "1_4", "4_4", "7_4", "1_5", "7_5", "1_6", "7_6", "2_7", "3_7", "4_7", "5_7", "6_7"]);
addData("⚁", ["2_1", "3_1", "4_1", "5_1", "6_1", "1_2", "7_2", "1_3", "5_3", "7_3", "1_4", "7_4", "1_5", "3_5", "7_5", "1_6", "7_6", "2_7", "3_7", "4_7", "5_7", "6_7"]);
addData("⚂", ["2_1", "3_1", "4_1", "5_1", "6_1", "1_2", "7_2", "1_3", "5_3", "7_3", "1_4", "4_4", "7_4", "1_5", "3_5", "7_5", "1_6", "7_6", "2_7", "3_7", "4_7", "5_7", "6_7"]);
addData("⚃", ["2_1", "3_1", "4_1", "5_1", "6_1", "1_2", "7_2", "1_3", "3_3", "5_3", "7_3", "1_4", "7_4", "1_5", "3_5", "5_5", "7_5", "1_6", "7_6", "2_7", "3_7", "4_7", "5_7", "6_7"]);
addData("⚄", ["2_1", "3_1", "4_1", "5_1", "6_1", "1_2", "7_2", "1_3", "3_3", "5_3", "7_3", "1_4", "4_4", "7_4", "1_5", "3_5", "5_5", "7_5", "1_6", "7_6", "2_7", "3_7", "4_7", "5_7", "6_7"]);
addData("⚅", ["2_1", "3_1", "4_1", "5_1", "6_1", "1_2", "7_2", "1_3", "3_3", "5_3", "7_3", "1_4", "3_4", "5_4", "7_4", "1_5", "3_5", "5_5", "7_5", "1_6", "7_6", "2_7", "3_7", "4_7", "5_7", "6_7"]);

export default data;
