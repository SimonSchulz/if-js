export default function bubbleSort(arr, key) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j][key] > arr[j + 1][key]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            return arr;
        }
    }
    return arr;
}
