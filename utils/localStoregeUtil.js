// Здесь будет класс для работы с локальным хранилищем
class LocalStoregeUtil{
   constructor(){
      // this - этот
      this.keyName = 'products';
   }

   // Для получения продукта
   getProducts(){
      // Нужно воспользоваться методом getItem - это объект который позваляет долговреммено схранять данные
      const productsLocalStorage = localStorage.getItem(this.keyName);
      // Делаем проверку. Если productsLocalStorage не пустой то...
      if(productsLocalStorage !== null){
         // Возращем JSON parse
         return JSON.parse(productsLocalStorage);
      }
      return[];   
   }

   // Для добавления значенися в хранилище. И он будет принмать id
   putProducts(id){
      // Объявляем переменую для передачи знач. метода getProducts
      let products = this.getProducts();
      let pushProduct = false;
      
      // Идёт проверка на совпадение indexOf - возвращет -1 если есть совпадение
      const index = products.indexOf(id);
      if(index === -1){
         products.push(id);
         pushProduct = true;
      }
      else{
         // Иначи удаляем совпадение
         products.splice(index, 1);
      }
      // JSON.stringify - переобразует из массива в строку
      localStorage.setItem(this.keyName, JSON.stringify(products));

      return{ pushProduct, products }
   }
}
// Теперь можем вызывать метод
const localStorageUtil = new LocalStoregeUtil();


