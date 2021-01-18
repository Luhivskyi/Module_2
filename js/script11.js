function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
  const word = message.split(' ');
  
  let totalPrice = word.length * pricePerWord;
  
  return totalPrice;
  // Пиши код выше этой строки
}