class Error{

   render(){
      const html = `
         <div class="error-container">
            <h1 class="error__title"> Net dostupa!!! </h1>
            <p class="error__subtitle"> poshe saidi</p>
        </div>
      `;

      RootError.innerHTML = html

   }
}

const errorPage = new Error();