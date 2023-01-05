class Header{
   hendlerOpenShoppingPage() {
      shoppingPage.render();
   }

   // render - отображает данные на экран/ count - число товаров в корзине
   render(count){
      const html =`
         <div class="header-container">
            <div class="header-counter" onclick="headerPage.hendlerOpenShoppingPage();">
                🗑 ${count}
            </div>
         </div>
      `;

      RootHeader.innerHTML = html;
   }
}

const headerPage = new Header();

