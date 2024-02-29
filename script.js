

document.addEventListener("DOMContentLoaded", function() {
    
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var links = document.querySelector('.links');

     
    hamburgerMenu.addEventListener('click', function(event) { 
        event.stopPropagation();
        
         
        hamburgerMenu.classList.toggle('active');
        
        links.classList.toggle('active');
    });
 
    document.addEventListener('click', function(event) {
         
        if (!event.target.closest('.links') && !event.target.closest('.hamburger-menu')) {
            
            hamburgerMenu.classList.remove('active');
             
            links.classList.remove('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var headerHeight = document.querySelector('header').offsetHeight;  
    var advertise = document.querySelector('.advertise');  
    var advertisePlaceholder = document.querySelector('.advertise-placeholder');  
    window.addEventListener("scroll", function() {
      if (window.scrollY >= headerHeight) {
        advertise.classList.add('fixed');  
        advertisePlaceholder.style.display = 'block';  
      } else {
        advertise.classList.remove('fixed');  
        advertisePlaceholder.style.display = 'none'; 
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var promotion = document.querySelector('.promotion');    document.addEventListener('click', function(event) {
      var isInsidePromotion = event.target.closest('.advertise');
      if (!isInsidePromotion) {
        promotion.classList.add('hide');  
        setTimeout(function() {
            promotion.style.display = 'none';  
        }, 500);  
    }
    });
      promotion.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
  