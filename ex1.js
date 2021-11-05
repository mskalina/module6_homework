function NumEvenOdd(){
  let arr = [4, null, -1.5, 3, undefined, 6, -5 ];
  let n_zero = 0;
  let n_number = 0;
  let n_even = 0;
  let n_odd = 0;
  for (let i = 0; i < arr.length; i=i+1) {
      if (typeof arr[i] === "number" && !isNaN(arr[i])) {
          n_number += 1;
          if (arr[i] === 0) {
              n_zero += 1;
          } else if (arr[i] % 2 === 0) {
              n_even += 1;
          } else {
              n_odd += 1;
          }
      }
  }
  console.log(`В массиве ${n_number} чисел, из них ${n_zero} нулей, ${n_even} чётных, ${n_odd} нечётных`);
}
NumEvenOdd();