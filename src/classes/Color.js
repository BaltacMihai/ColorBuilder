export default class Color {
  constructor() {
    this.red = 0;
    this.green = 0;
    this.blue = 0;
  }
  value(colorHex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex);

    if (result) {
      this.red = parseInt(result[1], 16);
      this.green = parseInt(result[2], 16);
      this.blue = parseInt(result[3], 16);
    } else {
      throw new Error("Invalid Hex");
    }
  }

  printHex() {
    this.red = parseInt(this.red);
    this.green = parseInt(this.green);
    this.blue = parseInt(this.blue);

    return (
      "#" +
      [this.red, this.green, this.blue]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  }

  addColors(secondColor, opacity) {
    opacity = parseInt(opacity) / 10;
    let newColor = new Color();
    newColor.red = (
      opacity * this.red +
      (1 - opacity) * secondColor.red
    ).toFixed();
    newColor.green = (
      opacity * this.green +
      (1 - opacity) * secondColor.green
    ).toFixed();
    newColor.blue = (
      opacity * this.blue +
      (1 - opacity) * secondColor.blue
    ).toFixed();

    return newColor.printHex();
  }
}
