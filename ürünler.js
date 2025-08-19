const urunler={
    "1":{
        isim:"LOGO : İnnocence ",
        resim:"resimler/ürün1.jpg",
        fiyat:"999 TL",
        link:"https://logo.com/"
       },

    "2":{
        isim:"LOGO :  Death",
        resim:"resimler/ürün2.jpg",
        fiyat:"999 TL",
        link:"https://logo.com/"
   },

   
    "3":{
        isim:"LOGO  : Time",
        resim:"resimler/ürün3.jpg",
        fiyat:"799 TL",
        link:"https://logo.com/"
   },

    "4":{
        isim:"LOGO  : Pleasure",
        resim:"resimler/ürün4.jpg",
        fiyat:"799 TL",
        link:"https://logo.com/"
    },


    "5":{
        isim:"LOGO  : Adrenalin",
        resim:"resimler/ürün5.jpg",
        fiyat:"999 TL",
        link:"https://logo.com/"
    },


    "6":{
        isim:"LOGO  : Bravery",
        resim:"resimler/ürün6.jpg",
        fiyat:"999 TL",
        link:"https://logo.com/"
    },

   "7":{
        isim:"LOGO :  Freedom",
        resim:"resimler/ürün7.jpg",
        fiyat:"999 TL",
        link:"https://logo.com/"
   },

   "8":{
        isim:"LOGO :  Discoverer",
        resim:"resimler/ürün8.jpg",
        fiyat:"999 TL",
        link:"https://logo.com/"
    },
 



};


const parms=new URLSearchParams(window.location.search);//
const id=parms.get("id")                        //vitrinden id alma

const urun=urunler[id] 

const başlik=document.querySelector("#ürün_detay_başlık") //elman seçme
const detay_resim=document.querySelector("#ürün_detay_resmi")
const detay_fiyat=document.querySelector("#ürün_fiyat")
const detay_link=document.querySelector("#ürün_buy_link")


if(başlik){
    başlik.textContent=urun.isim;//yazı değitirme
}

if(detay_resim){
    detay_resim.setAttribute("src",urun.resim)//link veya resim için özellik koyma
}

if(detay_fiyat){
    detay_fiyat.textContent=urun.fiyat;
}

if(detay_link){
    detay_link.setAttribute("herf",urun.link)
}


if(detay_resim){
    detay_resim.addEventListener("click",()=>{
        detay_resim.classList.toggle("zoom_acık");
    });
}



