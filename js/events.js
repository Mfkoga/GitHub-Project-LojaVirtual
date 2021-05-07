var events = {
    linkMouseOverHandler: function (e) {
        e.target.style.textDecoration = "underline";
    },

    linkMouseOutHandler: function (e) {
        e.target.style.textDecoration = "none";
    },

    buy: function (e) {
        var productId = parseInt(e.target.id);
        var product = App.store.getters.productById(productId);

        //  console.log(productId, product);

        var conf = confirm (
        `Deseja realmente comprar o produto: ${product.title}?\n Valor: R$ ${product.price}`);
   
    if (conf) {
        console.log("confirmado");
        

        //Novo estoque
         var newCount = product.count -1;
        
         //Verifica se tem estoque
         if (newCount < 0) {
             alert ("Produto esgotado!");
             return;
         }
        
         //1. Subtrair count do produto 
         App.store.mutations.ChangeCount(productId, newCount); 
         console.log(App.store.state);

         //2. Altera o count do elemento renderizado
          const div = App.elements.products[productId];
          for(var i=0; i< div.childNodes.length; i++){
              var child = div.childNodes[i];
            
              if(child.getAttribute("key")==="count") {
                  console.log("[]...", child);
                  child.innerHTML = `Qtd: ${newCount}`;
             
         }
        //   var child = App.helpers.childFinder(App.elements.products[productId], "count");
        //   if (child) {
        //       child.innerHTML = `Qtd: ${newCount}`;
          }
         //3. Adiciona produto na lista
         App.store.mutations.buy(product);

         //4. renderiza produto novo
         App.controllers.renderMyProducts();   
         
        }
    },
};