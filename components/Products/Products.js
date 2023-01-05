class Products{
   constructor(){
      this.classNameActive = "products-element__btn_active";
      this.labelAdd = "Добавить в корзину";
      this.labelRemove = "Удалить из корзины";
   }
   // метод для обработчика событий / хранение местоположения набора дескрипторов
   // Чтобы получить доступ к этому методу. Нужно сначала вызвать экземпляр класса "productsPage" в HTML коде
   // А здесь принимаем аргументы element и id для его вывода
   hendlerSetLocationStorage(element, id){
      const {pushProduct, products} = localStorageUtil.putProducts(id);
      
      if(pushProduct){
         // если pushProduct = true
         element.classList.add(this.classNameActive);
         element.innerHTML = this.labelRemove;
      }else{
         element.classList.remove(this.classNameActive);
         element.innerHTML = this.labelAdd;
      }

      headerPage.render(products.length);
   }

   render(){
      // Создаём конст. для хранилищапродуктов и вызваем метод "getProducts" из файла "localStorageUtil"
      const productsStore = localStorageUtil.getProducts();
      let htmlCatalog = '';
      // forEach() выполняет указанную функцию один раз для каждого элемента в массиве
      CATALOG.forEach(({ id, name, price, img}) => {
         // Для активации класса
         let activeClass = '';
         // Для обновления текста
         let activeText = '';

         if(productsStore.indexOf(id) === -1){
            // Если совападений не найдено/ Вызываю из конструктора
            activeText = this.labelAdd;
         }else{   // Совападения найдены
            // Присваеваем название класса к кнопке
            activeClass = ' '+this.classNameActive;
            activeText = this.labelRemove;
         }
         // каждый раз будем добавлять в него новый контент 
         // И где теги мы подствляем аргумент который будет передаваться
         htmlCatalog +=`
            <li class="products-element">
               <span class="products-element__name">${name}</span>
               <img class="products-element__img" src='${img}'/>
               <span class="products-element__price">
                  ❗️❗️❗️ ${price.toLocaleString()} RU
               </span>
               <!--this - указывает на то - какой элемент мы нажали-->
               <button class="products-element__btn${activeClass}" onclick="productsPage.hendlerSetLocationStorage(this, '${id}')">
                  ${activeText}
               </button>
            </li>
         `;
      });
      // toLocaleString() - позваляет разделять цифры(10000 => 10 000)
      // Ещё одну переменную куда будет вложен блок  li
      let html = `
         <ul class="products-container">
            ${htmlCatalog}
         </ul>
      `;

      // добавляет html к элементу
      RootProducts.innerHTML = html;
   }
}

// создаём экземпляр
const productsPage = new Products();
