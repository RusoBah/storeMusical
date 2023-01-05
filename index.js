// Здесь будет ф.render, которая будет рендереть первоначальные данные
// Также это общая точко
function render(){
   // Сначала идёт получение кол-во товаров
   const productsStore = localStorageUtil.getProducts();
  
   // Потом идёт Рендер продуктов и корзины
   headerPage.render(productsStore.length);
   productsPage.render();  
}

spinnerPage.render();

let CATALOG = [];

debugger

// AJAX - запрос

fetch('server/catalog.json')
   .then(res => res.json())
   .then(body => {
      CATALOG = body;
      spinnerPage.handleClear();
      render();   
   })
   .catch(error => {
      spinnerPage.handleClear();
      errorPage.render();
   });
