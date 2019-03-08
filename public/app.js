{
    const PSEUDO_PIXEL_SIZE = 10;
    const DISPLAY = {
        width: 480,
        height: 320
    };

    const container = document.getElementById("container");

    function onClickHandler({ target }) {
        target.style.backgroundColor = "blue";
    }

    function generatePseudoPixel() {
        const pixel = document.createElement("span");
        const sizeWithBorderDiscount = PSEUDO_PIXEL_SIZE - 2;

        pixel.style.backgroundColor = "red";
        pixel.style.border = `1px solid #ccc`;
        pixel.style.display = "inline-block";
        pixel.style.height = `${sizeWithBorderDiscount}px`;
        pixel.style.width = `${sizeWithBorderDiscount}px`;

        pixel.onclick = onClickHandler;

        return pixel;
    }

    function calculateAmountOfPlixels(height, width, size) {
        return (height * width) / (size * size);
    }

    let amountOfPseudoPixels = calculateAmountOfPlixels(DISPLAY.height, DISPLAY.width, PSEUDO_PIXEL_SIZE);

    while (amountOfPseudoPixels--) {
        container.appendChild(generatePseudoPixel());
    }
}
