import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryImages = document.querySelector(".gallery");
const cardMarkup = createGelleryCard (galleryItems);


function createGelleryCard (images){
    return galleryItems.map(({preview, original, description}) =>{
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image"src="${preview}" alt="${description}" />
    </a> `; })
  .join("")

}


galleryImages.insertAdjacentHTML('beforeend', cardMarkup);
 galleryImages.addEventListener('click',findAlt);


function findAlt(event){
    return console.log(event.target.alt)
}

let gallery = new SimpleLightbox('.gallery a', { 
captionsData: 'alt',
captionType: 'attr',
captionDelay: 250,
 });
 gallery.on('show.SimpleLightbox')
