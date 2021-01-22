function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
const newGetCommonElements = [];
  for(const item of array1){
    if(array2.includes(item)){
 newGetCommonElements.push(item);
     }
   }
  return newGetCommonElements;
  // Пиши код выше этой строки
}