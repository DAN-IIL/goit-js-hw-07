import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryItemList = makeGalleryGrid(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItemList);

function makeGalleryGrid(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </div>`}).join('');
    }

galleryEl.addEventListener('click', handleImgClick);

function handleImgClick(event) {
    event.preventDefault();

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}">`
       ).show();

    if (event.target.nodeName === 'IMG') {
        return instance;
    } else {
        return;
    }
}








// const markupGallery = galleryItems.map(event => makeGalleryGrid(event)).join('');