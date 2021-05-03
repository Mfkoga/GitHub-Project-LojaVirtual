var controllers = {
    createElements: function () {
        console.log("Vamos renderizar");

        this.setStyle(App.elements.app, {
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
        }),

        //---------Header---------//
        App.elements.header.classList.add("header-container");
        App.elements.app.appendChild(App.elements.header);

        var headerimg = document.createElement("div");
        App.elements.headerimg.classList.add("headerimg");
        App.elements.headerimg.src="https://i.pinimg.com/originals/e5/04/48/e5044899cb87f2e2dd6f8caa9e433f3d.jpg"
        //"https://data.whicdn.com/images/266774596/original.gif"
        //"https://i.pinimg.com/originals/63/04/69/630469019b533e0318ca89842793322d.jpg";
        //"https://kidzdecor.co.za/wp-content/uploads/2020/02/Peony-Bouquet1-scaled.jpg";
        App.elements.header.appendChild(App.elements.headerimg);

        
        //---------Body---------//

       var bodyContainer = document.createElement("div");
       App.elements.bodyContainer.classList.add("bodyContainer");
       App.elements.app.appendChild(App.elements.bodyContainer);

       //App.elements.categoryContainer.classList.add("categoryContainer");
       App.elements.bodyContainer.appendChild(App.elements.categoryContainer);
       

       App.elements.category.classList.add("category");
       App.elements.categoryContainer.appendChild(App.elements.category);
       App.elements.category.innerHTML="Selecione por categoria: ";
        
       App.elements.iconsContainer.classList.add("iconsContainer");
       App.elements.bodyContainer.appendChild(App.elements.iconsContainer);

    
       App.elements.iconsContainer.appendChild(App.elements.iconsbody);

       App.elements.bodyImgClothes.classList.add("iconsbody");
       App.elements.bodyImgClothes.src="https://i.pinimg.com/236x/0c/cf/d5/0ccfd5d8c0158af047a12c253aa10403.jpg";
       App.elements.iconsbody.appendChild(App.elements.bodyImgClothes);

       App.elements.bodyImgShoes.classList.add("iconsbody");
       App.elements.bodyImgShoes.src="https://i.pinimg.com/originals/64/80/16/648016f3e2db66dce071407443838edd.jpg";
       App.elements.iconsbody.appendChild(App.elements.bodyImgShoes);

       App.elements.bodyImgAcessories.classList.add("iconsbody");
       App.elements.bodyImgAcessories.src="https://i.pinimg.com/736x/22/20/3f/22203fdb04883c7b05105133e7286592--paper-bags-watercolor-painting.jpg";
       App.elements.iconsbody.appendChild(App.elements.bodyImgAcessories);

       App.elements.bodyMyProductsLabel.classList.add("bodyMyProductsLabel");
       App.elements.bodyMyProductsLabel.innerHTML = "Minha Comprinha:";
       App.elements.bodyContainer.appendChild(App.elements.bodyMyProductsLabel);


        
       App.elements.bodyMyProducts.classList.add("bodyMyProducts");
       App.elements.bodyMyProductsLabel.appendChild(App.elements.bodyMyProducts);

       //App.elements.bodyProductsLabel.innerHTML= "Produtos:";
       //App.elements.body.appendChild(App.elements.bodyProductsLabel);

       App.elements.bodyProducts.classList.add("product-container");
       //product-container");
       App.elements.body.appendChild(App.elements.bodyProducts);
    
       App.elements.body.classList.add("body");
       App.elements.bodyContainer.appendChild(App.elements.body);

       
        //---------Footer---------//
       
     App.elements.footer.classList.add("footer");
     App.elements.app.appendChild(App.elements.footer);
     
     App.elements.quemLink.classList.add("linkStyle");
     App.elements.quemLink.innerHTML="Quem somos nós";
     App.elements.footer.appendChild(App.elements.quemLink);

     App.elements.multiLink.classList.add("linkStyle");
     App.elements.multiLink.innerHTML="Multimarcas";
     App.elements.footer.appendChild(App.elements.multiLink);

     App.elements.whatsLink.classList.add("linkStyle");
     App.elements.whatsLink.innerHTML="Falar via WhatsApp";
     App.elements.footer.appendChild(App.elements.whatsLink);



    console.log("Componentes redenrizados");
    },

    setStyle: function (el, obj) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            el.style[key] = obj[key];
        }
    },

    renderImages: function(parent, images){
        for (var i = 0; i < images.length; i++) {
            var imgURL = images [i];

            var el = document.createElement("img")
            el.src = imgURL
            el.classList.add("product-item-img");

            parent.appendChild(el);
        }
    },

    renderCategoryFilter: function (){
        var categories = App.store.getters.categories(); 
        console.log("[Categorias]...", categories);

        for (var i = 0; i < categories.length; i++){
            var category = categories [i];
            var el = this.createCategory(category);
            // el.innerHTML = category.name;

            // var img = document.createElement("img")
            // img.src = category.image_url // App.elements.iconsbody
            // el.appendChild(img);

            // console.log ("[Categorias]...", category, el)
            App.elements.bodyCategories.appendChild(el);
        }
    },

    removeAllProducts: function() {
        App.elements.bodyProducts.innerHTML = "";
        App.elements.products = {};
    },
    
    renderAllProducts: function() {
        console.log("Vamos renderizar todos os produtos");
        var products = App.store.getters.products();
         

        console.log(products.length);
            for (var i = 0; i < products.length; i++) {
            var product = products[i];

            if (!App.elements.products[product.id]) {
                var el = this.createProduct(product);
                App.elements.products[product.id] = el;
                App.elements.bodyProducts.appendChild(el);

             }
        }

            console.log ("Todos os produtos renderizados");   
    }, 

           //el.innerHTML = product.title;
           //this.setStyle(el,{
           //  padding: "10px",
           // justifyContent: "space-between",
           // float:"center",
           //});
           //  el.classList.add("product-item");
           // console.log(product);
           // this.renderImages(el, product.images)
           // for(var i=0; i<product.images.length; i++){
           //     var imgURL= product.images[i]
           //     console.log(imgURL)
           // }
           
        //    var imgContainer = document.createElement("div");
        //    imgContainer.style.width = "200px";
        //    imgContainer.style.height = "200px";
                      
        //    var carrossel = new Carrossel ({el:el, images: product.images});
        //    el. appendChild(imgContainer);
        
        //    var title = document.createElement("div")
        //    title.innerHTML = product.title
        //    title.setAttribute("key","title");
        //    this.setStyle(title,{border: "1px solid blue",
        //                        //display: "flex",
        //                        color: "red",
        //                        //padding: "0px 0px 100px 0px",
        //                        height:"100px",
        //                        width:"300px"});//////////////////////////////
        //    el.appendChild(title);


         //  var description = document.createElement("div")
         //  description.innerHTML = product.description;
         //   description.setAttribute("key","description");
         //  this.setStyle(description,{
         //                        display: "flex",
         //                       color: "red",
         //                      padding: "20px",
         //                      height:"100px",});//////////////////////////////
         // el.appendChild(description);
            

    //         var price = document.createElement("div")
    //         price.innerHTML = `R$ ${product.price}`;
    //         price.setAttribute("key","price");
    //         el.appendChild (price);

    //         var count = document.createElement("div")
    //         count.innerHTML = `Qtde:  ${product.count}`;
    //         count.setAttribute("key","count");
    //         el.appendChild (count);

    //         var buyBtn = document.createElement("button");
    //         buyBtn.innerHTML = "Comprar";
    //         buyBtn.id = product.id
    //         buyBtn.onclick = App.events.buy;
            
    //         el.appendChild(buyBtn);

    //         console.log("[]...",el);

    //         App.elements.products[product.id] = el;
    //         App.elements.bodyProducts.appendChild(el);
                        
    //         }
        
    

    //     console.log("Produtos renderizados!");
    // },

    renderMyProducts: function () {
    var myProducts = App.store.state.myProducts;

    var els = App.elements.myProducts;

    for (var i=0; i < myProducts.length; i++) {
        var myProduct = myProducts [i];
        var product = App.store.getters.productById(myProduct.productId);
        console.log(myProduct, product);

    if (els[product.id]) {

        var child = App.helpers.childFinder (App.elements.myProducts [product.id], "count");
        if (child) {
            var newCount = App.store.getters.myProductCount(product.id);

            child.innerHTML = `Qtd: ${newCount}`;

        }
    }else {
        var el = this.createProduct(product,true);
        els[product.id] = el;
        App.elements.bodyMyProducts.appendChild(el);//bodyMyProducts.appendChild(el);///////////////////////////////////////////////////////
    }
    }
    },

    createProduct: function (product, isMyList) {
    var el = document.createElement("div");
    el.classList.add("product-item");

    var imgContainer = document.createElement("div");//
    imgContainer.style.width = "200px";//
    imgContainer.style.height = "200px";//
    var carrossel = new Carrossel ({el: imgContainer, images: product.images});//
    el.appendChild(imgContainer);//

    var title = document.createElement("div");//
    title.innerHTML = product.title;//
    title.setAttribute("key", "title");//
    el.appendChild(title);//

    var price = document.createElement("div");
    price.innerHTML = `R$ ${product.price}`;
    price.setAttribute("key", "price");
    el.appendChild(price);

    if(!isMyList) {
        var count = document.createElement("div");
        count.innerHTML = `Qtd: ${product.count}`;
        count.setAttribute("key", "count");
        el.appendChild(count);

        var buyBtn = document.createElement ("button");
        buyBtn.innerHTML = "Comprar";
        buyBtn.id = product.id;
        buyBtn.onclick = App.events.buy;
        el.appendChild(buyBtn);
    }else {
        var count = document.createElement("div");
        count.innerHTML = `Qt:1`;
        count.setAttribute("key", "count");
        el.appendChild(count);
    }

    console.log("[]...", el);
    return el;

    },

    createCategory: function (category){
            var el = document.createElement("div");

            var name = document.createElement("span");
            name.innerHTML = category.name;
            el.appendChild(name);

            var img = document.createElement("img");
            img.src = category.image_url;
            el.appendChild(img);

            el.onclick = function (){
                console.log("[Clicou]...", category);

                App.store.mutations.setCategory(category.name);

                App.controllers.removeAllProducts();
                App.controllers.renderAllProducts();

              //  App.controllers.renderAllProducts();
              //App.controllers.hideProduct();

            };

            //console.log("[Categoria]...", category, el);

            return el;

        },
    };

//         hideProduct: function () {
//             var hidelist = App.store.getters.hiddenProductsByCategory();
//             var productsEl = App.elements.products;
//             var productsElKeys = Object.keys(productsEl);


//             // console.log("[productsEl]...", productsEl);
//             // console.log("[productsElKeys]...", productsElKeys);
//             // console.log("[hidelist]...", hidelist);
//             //console.log ("[]...", App.store.getters.hiddenProductsByCategory())

//             for (var i = 0; i < productsElKeys.length; i++){
//                 var productId = productsElKeys[i];
//                 var product = productEl[productId];
               
//                if (hidelist.find((p) => p.id === parseInt(productId))) {
//                 product.style.display = "none";
//                } else {
//                    product.style.display = "block";
//                }
//             }


//         },
// };
