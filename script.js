const swiper = new Swiper("#swiper-1",{
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,

  pagination: {
    el: ("#swiper-1 .swiper-custom-pagination"),
    clickable: true,
    renderBullet: function(index,className){
      return `<div class=${className}>      
      <span class="line"></span>
      </div>`
    }
  }
});