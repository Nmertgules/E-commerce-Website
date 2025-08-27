const products={
    "1":{
        name:"LOGO : Innocence ",
        image:"images/ürün1.jpg",
        price:"999 TL",
        link:"https://logo.com/",
        features:
        [
            "Product type: T-shirt",
            "Cotton jersey",
            "Relaxed fit",
            "Crew neckline",
            "Short sleeves",
        ]
       },

    "2":{
        name:"LOGO :  Death",
        image:"images/ürün2.jpg",
        price:"999 TL",
        link:"https://logo.com/",
        features:
        [
          "Product type: T-shirt",
          "Cotton jersey",
          "Relaxed fit",
          "Crew neckline",
          "Short sleeves",

        ]
   },

   
    "3":{
        name:"LOGO  : Time",
        image:"images/ürün3.jpg",
        price:"799 TL",
        link:"https://logo.com/",
        features:
        [
            "Product type: T-shirt",
            "Cotton jersey",
            "Relaxed fit",
            "Crew neckline",
            "Short sleeves",
        ]
   },

    "4":{
        name:"LOGO  : Pleasure",
        image:"images/ürün4.jpg",
        price:"799 TL",
        link:"https://logo.com/",
        features:
        [
            "Product type: T-shirt",
            "Cotton jersey",
            "Relaxed fit",
            "Crew neckline",
            "Short sleeves",
        ]
    },


    "5":{
        name:"LOGO  : Adrenalin",
        image:"images/ürün5.jpg",
        price:"999 TL",
        link:"https://logo.com/",
        features:
        [
            "Product type: T-shirt",
            "Cotton jersey",
            "Relaxed fit",
            "Crew neckline",
            "Short sleeves",
        ]
    },


    "6":{
        name:"LOGO  : Bravery",
        image:"images/ürün6.jpg",
        price:"999 TL",
        link:"https://logo.com/",
        features:
        [
            "Product type: T-shirt",
            "Cotton jersey",
            "Relaxed fit",
            "Crew neckline",
            "Short sleeves",
        ]
    },

   "7":{
        name:"LOGO :  Freedom",
        image:"images/ürün7.jpg",
        price:"999 TL",
        link:"https://logo.com/",
        features:
        [
            "Product type: T-shirt",
            "Cotton jersey",
            "Relaxed fit",
            "Crew neckline",
            "Short sleeves",
        ]
   },

   "8":{
        name:"LOGO :  Discoverer",
        image:"images/ürün8.jpg",
        price:"999 TL",
        link:"https://logo.",
        features:
        [
            "Product type: T-shirt",
            "Cotton jersey",
            "Relaxed fit",
            "Crew neckline",
            "Short sleeves",
        ]
    },
 



};


const parms=new URLSearchParams(window.location.search);//
const id=parms.get("id")                        //vitrinden id alma

const urun=products[id] 

const başlik=document.querySelector("#product_title") //elman seçme
const detail_img=document.querySelector("#product_detail_img")
const detail_price=document.querySelector("#product_detail_price")
const detail_link=document.querySelector("#product_buy_link")
const detail=document.querySelector("#product_detail")

if(başlik){
    başlik.textContent=urun.name;//yazı değitirme
}

if(detail_img){
    detail_img.setAttribute("src",urun.image)//link veya resim için özellik koyma
}

if(detail_price){
    detail_price.textContent=urun.price;
}

if(detail_link){
    detail_link.setAttribute("href",urun.link)
}


if(detail_img){
    detail_img.addEventListener("click",()=>{
        detail_img.classList.toggle("zoom_on");
    });
}


if(detail){
  
   urun.features.forEach(element => {
   const li=document.createElement("li");
   li.textContent=element;
   li.style.textAlign="left"
  
   detail.appendChild(li);


   });
   
   
}


