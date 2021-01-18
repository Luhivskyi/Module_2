function filterArray(numbers, value) {
  // Пиши код ниже этой строки
const arr = [];
  for(const number of numbers)
  if(number > value){
  arr.push(number)
  }
  return arr;
  // Пиши код выше этой строки
}