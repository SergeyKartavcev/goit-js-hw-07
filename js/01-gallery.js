import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryImages = document.querySelector(".gallery");
const cardMarkup = createGelleryCard (galleryItems);
galleryImages.insertAdjacentHTML('beforeend', cardMarkup);
  
function createGelleryCard (images){
    return galleryItems.map(({preview, original, description}) =>{
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`; })
  .join("")

}


galleryImages.addEventListener('click',createModalImage);  



function createModalImage (event){
  event.preventDefault();
  const srcImg = event.target.dataset.source;
const instance = basicLightbox.create(`
class="gallery__image"
<img  src="${srcImg}">`,
{  onClose: (instance) => {
  window.removeEventListener("keydown", onCloseKeyEsc);    
  }, 
   }  
   );
if (instance.show(instance)) {
  window.addEventListener("keydown", onCloseKeyEsc); 
 }
function onCloseKeyEsc(e) {   
   if (e.code === "Escape" && instance.visible()) { 
         instance.close(); 
        } 
         }
        };


  

  




