var store = {
    state:{   
        products:[
    {
        id:1,
        category: {name: "Vestido",
                   image_url:"https://i.pinimg.com/236x/0c/cf/d5/0ccfd5d8c0158af047a12c253aa10403.jpg"},
        brand: "Farm",
        title:"Vestido longo florido",
        description: "Tamanho P",
        price: 150,
        count: 5,
        status: "Active",
        images:["https://d1ox9ey4a9b9h8.cloudfront.net/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/i/m/img_2085_19.jpg",
        "https://d1ox9ey4a9b9h8.cloudfront.net/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/i/m/img_7721_.jpg"],
    },

    {
        id:2,
        category: {name: "Vestido",
                  image_url:"https://i.pinimg.com/236x/0c/cf/d5/0ccfd5d8c0158af047a12c253aa10403.jpg"},
        brand: "Farm",
        title:"Vestido curto banana",
        description: "Vestido curto banana, tamanho M",
        price: 152,
        count: 4,
        status: "Active",
        images:["https://d1ox9ey4a9b9h8.cloudfront.net/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/i/m/img_1775_1_20.jpg",
        "https://d1ox9ey4a9b9h8.cloudfront.net/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/0/4/048a3822.jpg",
        "https://d1ox9ey4a9b9h8.cloudfront.net/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/0/4/048a3821.jpg"],
    },

    {
        id:3,
        category: {name: "Vestido", 
                  image_url:"https://i.pinimg.com/236x/0c/cf/d5/0ccfd5d8c0158af047a12c253aa10403.jpg"},
        brand: "Farm",
        title:"Vestido curto girassol",
        description: "Vestido curto girassol, tamanho G",
        price: 153,
        count: 3,
        status: "Active",
        images:[
            "https://d1ox9ey4a9b9h8.cloudfront.net/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/_/1/_1_138_188.jpg",
            "https://babadotop.vteximg.com.br/arquivos/ids/289305-548-806/2760581536--2-.jpg?v=637045182813430000"
            
            ]
    },

    {
        id:4,
        category: {name: "Vestido",
                   image_url:"https://i.pinimg.com/236x/0c/cf/d5/0ccfd5d8c0158af047a12c253aa10403.jpg"},
        brand: "Farm",
        title:"Vestido curto girassol",
        description: "Vestido curto girassol, tamanho GG",
        price: 153,
        count: 3,
        status: "Active",
        images:[
            "http://babadotop.vteximg.com.br/arquivos/ids/223413-548-806/babadotop248206_4960_2.jpg",
            "http://babadotop.vteximg.com.br/arquivos/ids/223411-1000-1500/babadotop248206_4960_1.jpg",
            "http://babadotop.vteximg.com.br/arquivos/ids/223414-548-806/babadotop248206_4960_4.jpg"
            
            ]
    },

    {
        id:5,
        category: {name: "Bolsa",
                   image_url:"https://i.pinimg.com/736x/22/20/3f/22203fdb04883c7b05105133e7286592--paper-bags-watercolor-painting.jpg"},
        brand: "Louis Vuitton",
        title:"Bolsa Louis Vuitton",
        description: "Bolsa Louis Vuitton",
        price: 153,
        count: 3,
        status: "Active",
        images:[
            "https://www.azusashop.com/wp-content/uploads/2018/10/img_0437_5.jpg",
            "https://i.pinimg.com/originals/c0/ab/19/c0ab19a361e696122e3daf52ba29af52.jpg",
            
            ]
    },

    {
        id:6,
        category: {name: "Bolsa",
                  image_url:"https://i.pinimg.com/736x/22/20/3f/22203fdb04883c7b05105133e7286592--paper-bags-watercolor-painting.jpg"},
        brand: "Louis Vuitton",
        title:"Bolsa Louis Vuitton",
        description: "Bolsa Louis Vuitton",
        price: 153,
        count: 3,
        status: "Active",
        images:[
            "https://www.socourus.com.br/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/3/4/3481824-1-bg-chenson-bolsa-de-mao-socourus.jpg",          
            ]
    },

    {
        id:7,
        category: {name: "Shoes",
                   image_url: "https://i.pinimg.com/originals/64/80/16/648016f3e2db66dce071407443838edd.jpg"},
        brand: "Chinelo",
        title:"Bolsa Louis Vuitton",
        description: "Bolsa Louis Vuitton",
        price: 153,
        count: 3,
        status: "Active",
        images:[
            "https://havainas.vteximg.com.br/arquivos/ids/225098-1000-1000/4144745_0090_C_Havaianas_Farm_Tucanissimo_Preto.jpg?v=636983850238700000",          
            ]
    },
    {
        id:8,
        category: {name: "Shoes",
                   image_url: "https://i.pinimg.com/originals/64/80/16/648016f3e2db66dce071407443838edd.jpg"},
        brand: "Tenis",
        title:"Bolsa Louis Vuitton",
        description: "Bolsa Louis Vuitton",
        price: 153,
        count: 3,
        status: "Active",
        images:[
            "https://th.bing.com/th/id/Ra99cc48c6174263f3a0975e5c7e10633?rik=Ml6Ck8xAK6qRYw&pid=ImgRaw",       
            "https://img.take-more.de/images/watermarked/36/03/91/vans-va3dotmdb-ultra_range-3.jpg",
            ]
    },

    {
        id:9,
        category: {name: "Shoes",
                   image_url:"https://i.pinimg.com/originals/64/80/16/648016f3e2db66dce071407443838edd.jpg"},
        brand: "Tenis",
        title:"Bolsa Louis Vuitton",
        description: "Bolsa Louis Vuitton",
        price: 153,
        count: 3,
        status: "Active",
        images:[
            "https://img.abcelectronique.com/chaussures-sportswear-femmes/5733085850092/adidas-superstar-farm-company-blanche-et-bleu-marine-baskets-tennis.jpg",       
            "https://artwalk.vteximg.com.br/arquivos/ids/191280-1000-1000/Tenis-adidas-Superstar-Feminino.jpg?v=636124836435030000",
            ]
    },
   ],

   myProducts: [],

    filter: {
        category:"",
},

},
//buscar algo do store
getters:{
    productById: function(productId) {
        var products = App.store.state.products;

        for(var i=0; i< products.length; i++){
            var product = products[i];

            if (product.id === productId){
                return product;

            }
        }

        return null;
    },

    myProductCount: function (productId) {
        var count = 0;
        for (var i =0; i < store.state.myProducts.length; i++) {
            var myProduct = store.state.myProducts [i];
            if (myProduct.productId === productId) {
                count ++;
            }
        }
    return count;
    },
    
    categories: function() {
    var products = App.store.state.products;
    var categories = [];

    for(var i = 0; i < products.length; i++){
        var product = products[i];

        if(!App.helpers.includes(categories, product.category.name)){//!
       
        categories.push(product.category);
    } 
    }

        return categories;
    },

products: function() {
        var products = store.state.products;
        var filter = store.state.filter;

        var res = [];

        for(var i = 0; i < products.length; i++){
            var product = products[i]

            
            if (filter.category && filter.category !== product.category.name) {
               // console.log("[NÃO!!!]]...", product.category);
                continue;

            }

            res.push(product);

        }


        return res;
    },
},

    // hiddenProductsByCategory(){
    //     var products = store.state.products;
    //     var filter = store.state.filter;

    //     var res = [];

    //     for(var i = 0; i < products.length; i++){
    //         var product = products[i]

            
    //         if (filter.category === product.category.name) {
    //            // console.log("[NÃO!!!]]...", product.category);

    //         res.push(product); continue;
    //     }

    // }


        // return res;

//     },
// },



// category: function() {
//     var products = App.store.state.products;
//     var category = []

//     for(var i=0; i< products.length; i++){
//         var product = products[i];
//         console.log("[category:]...", product.category);
//         category.push(product.category)

//         }

//         return category;
//     },

//},

//Alteração state
mutations: {
    ChangeCount: function(productId, newCount){
        var product = store.getters.productById(productId);
       // console.log(product.count);
        product.count = newCount;
       // console.log(product.count);
        },

    buy:  function (product) {
        var myProduct = {
            productId: product.id,
            price: product.price,
            count: 1,
        };
        store.state.myProducts.push(myProduct);
    },

    setCategory: function(categoryName) {
        store.state.filter.category = categoryName


    }
  },
};