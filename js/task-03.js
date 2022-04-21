const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function addImgElementsToList(array) {

  const list = document.querySelector('.gallery');

  let galleryContent = '';

  array.forEach(el => {

    return galleryContent += `<li style=list-style-type:none><img src="${el.url}" alt="${el.alt}" width=480 height=320><img/></li>`
  });

  list.style.display = 'flex';
  list.style.flexDirection = 'row';
  list.style.justifyContent = 'space-between';
  
  list.insertAdjacentHTML('afterbegin', galleryContent);
}

addImgElementsToList(images);
