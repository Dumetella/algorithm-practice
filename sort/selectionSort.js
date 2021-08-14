function selectionSort(array) {
    const copy = [...array];

    for (let i = 0; i < copy.length - 1; i += 1) {
        let minIndex = i;

        for (let j = i + 1; j < copy.length; j += 1) {
            if (copy[j] < copy[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [copy[i], copy[minIndex]] = [copy[minIndex], copy[i]];
        }
    }
    return copy;
}
