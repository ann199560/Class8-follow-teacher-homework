import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';


 const mapSwiper = new Swiper('.map-swiper ', {

   // 分頁、左右箭頭、滾動條若有使用則必需設定          
   // 分頁
   loop: true,
   slidesPerView: "auto",//     //每個 slide 自己決定寬度//
   spaceBetween: 16,
   pagination: {
     el: '.swiper-pagination',  //指定分頁器的 DOM 容器//
     type: 'bullets',           //分頁器用「小圓點顯示」//
     clickable: true,           //允許使用者直接點擊圓點切換//
   },
   // 左右箭頭    
   navigation: {
     nextEl: '.swiper-btn-next',
     prevEl: '.swiper-btn-prev',
   },

   breakpoints: {
    992: {
        slidesOffsetBefore: 312, //左邊空白//
        spaceBetween: 24,
    }
   }
 });

 
// 專屬推薦：自定義 swiper，不影響其他區塊
const recommendSwiper = new Swiper('.recommend-swiper', {

   // 分頁、左右箭頭、滾動條若有使用則必需設定          
   // 分頁
    loop: true,       
    slidesPerView: "auto",
    slidesOffsetBefore: 12,
    spaceBetween: 16,
    pagination: {
    el: '.recommend-pagination',
    type: 'bullets',
    clickable: true
    },
    grabCursor: true,
 });



 // 專屬推薦：自定義 swiper，不影響其他區塊
const journeySwiper = new Swiper('.journey-swiper', {

   // 分頁、左右箭頭、滾動條若有使用則必需設定          
   // 分頁
    loop: true,       
    slidesPerView: "auto",         
    spaceBetween: 24,
    slidesOffsetBefore: 12,
    pagination: {
    el: '.journey-pagination',
    type: 'bullets',
    clickable: true
    },
    navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
    },
    grabCursor: true,
 

 });


 
