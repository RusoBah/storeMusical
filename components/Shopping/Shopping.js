class Shopping{
   handleClear(){
      // Для выхода из окна, присваеваем к html пустое значение
      RootShopping.innerHTML = "";
   };
   render(){
      const productsStore = localStorageUtil.getProducts();
      let htmlCatalog = '';
      let sumCatalog = 0;

      CATALOG.forEach(({ id, name, price}) => {
         // Пишем проверку товаров в хранилище
         if(productsStore.indexOf(id) !== -1){
            htmlCatalog += `
            <tr>
               <td class="shopping-element__name">❗️❗️❗️ ${name}</td>
               <td class="shopping-element__price">${price.toLocaleString()} RU</td>
            </tr>
            `;

            sumCatalog += price;
         }
      });
      const html = `
         <div class="shopping-container">
            
            <table>
               ${htmlCatalog}
               <tr>
                  <td class="shopping-element__name">❗️❗️❗️ Сумма: </td>
                  <td class="shopping-element__price">${sumCatalog.toLocaleString()} RU</td>
            </tr>
            </table>
            <div class="shopping__close" onclick="shoppingPage.handleClear();">
            </div>
         </div>
      `;

      RootShopping.innerHTML = html;
   }
}

const shoppingPage = new Shopping();