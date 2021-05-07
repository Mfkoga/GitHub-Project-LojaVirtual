var App = {
    init: function () {
        console.log("Inicio do app");

        this.controllers.createElements();
        this.controllers.renderCategoryFilter();
        this.controllers.renderAllProducts();
        
        // console.log(this.store.state.products);
        // for (var i = 0; i< this.store.state.products.length; i++) {
        //     var product = this.store.state.products [i];
        //     console.log("[]",product);
        // }

        console.log("Fim do app");
    },

     helpers: {
         childFInder: function(div, key) {
             //var div = App.elements.isMyProducts [productId];
             console.log("[]...", div);

             for(var i = 0; i < div.childNodes.length; i++) {
                 var child = div.childNodes [i];

            if (child.getAttribute("key") === key){
                 return child;
                 }
             } 

         }

     },

        

    helpers: helpers,
    store: store,
    events: events,
    controllers: controllers,
    elements: elements,
    

};


App.init();