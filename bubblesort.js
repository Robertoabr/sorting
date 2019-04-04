let skips = 0;

function bubbleSort(array) {
  /* your code here */

  while (skips < array.length - 1) {
    for (let i = 0; i < array.length; i++) {
      let currVal = array[i];
      let nextVal = array[i + 1];
      swap(currVal, nextVal);
    }
  }

  return array;
}

function swap(currVal, nextVal) {
  if (currVal > nextVal) {
    array[i] = nextVal;
    array[i + 1] = currVal;
  } else {
    skips++;
  }
}
