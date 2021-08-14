function quickSort(array) {

    const copy = [...array];

    if (copy.length <= 1) {
        return copy;
    }

    const leftPart = [];
    const rightPart = [];

    const pivot = copy.shift();
    const centerPart = [pivot];

    while (copy.length) {
        const currentElement = copy.shift();

        if (currentElement === pivot) {
            centerPart.push(currentElement);
        } else if (currentElement < pivot) {
            leftPart.push(currentElement);
        } else {
            rightPart.push(currentElement);
        }
    }

    const leftPartSorted = quickSort(leftPart);
    const rightPartSorted = quickSort(rightPart);

    return leftPartSorted.concat(centerPart, rightPartSorted);
}
