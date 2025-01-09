
const items = document.querySelectorAll('.item');
let currentIndex = 0;


function hideAndShow() {
  
    items.forEach((item, index) => {
        if (index !== currentIndex) {
            item.style.opacity = '1'; 
        }
    });

    
    items[currentIndex].style.opacity = '0';

  
    currentIndex = (currentIndex + 1) % items.length;
}


setInterval(hideAndShow, 2000);

