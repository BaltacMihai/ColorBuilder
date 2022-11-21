class Color {
  constructor(colorHex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex);

    if (result) {
      this.r = parseInt(result[1], 16);
      this.g = parseInt(result[2], 16);
      this.b = parseInt(result[3], 16);
    } else {
      throw new Error("Invalid Hex");
    }
  }

  rgbToHex() {
    return (
      "#" +
      [this.r, this.g, this.b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  }
}
