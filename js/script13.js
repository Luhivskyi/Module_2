function slugify(title) {
  // Пиши код ниже этой строки
const words = title.toLowerCase().split(' ');
const slug = words.join('-');

 return slug;
}