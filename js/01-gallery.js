import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryImages = document.querySelector(".gallery");
const cardMarkup = createGelleryCard (galleryItems);
galleryImages.insertAdjacentHTML('beforeend', cardMarkup);
 galleryImages.addEventListener('click',onImageClick);

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


function onImageClick(event){

  event.preventDefault();
 const instance = basicLightbox.create(`
      <img  src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg">
  `)
  
  instance.show()
}

// document.addEventListener('keydown', close)


// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()