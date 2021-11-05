function SimpleOrNot(number){
    let answer = 'Данные неверны'
    if (number == 0||number == 1){
      answer = 'Число простое'
      return answer
    }
    let i = 1
    while (i < number/2) {
        i=i+1
        if (number%i==0) {
          answer = 'Число не простое'
          return answer
          } else {
          answer = 'Число простое'
        }
    }
    return answer
}
console.log(SimpleOrNot(11));