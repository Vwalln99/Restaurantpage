import _ from 'lodash';
import './style.css';
import { createTags, addImages, appendImages } from './modules/functions';

export const menuModule = (section) => {
  const htmlTags = createTags(['h2', 'p']);
  const [menuHeading, menuText] = htmlTags;

  menuHeading.className = "ueberschriftGross";
  menuHeading.textContent = "Menu";

  menuText.className = "text";
  menuText.textContent = "Check out our delicious vegan menu options!";

  const images = addImages(['./img/breakfast_platter.jpg', './img/main_platter.jpg', './img/pasta farfalle.jpg', './img/cake.jpg', './img/cupcakes.jpg', './img/macarons.jpg']);
  images[0].classList.add('img3');
  images[1].classList.add('img4');
  images[2].classList.add('img3');
  images[3].classList.add('img4');
  images[4].classList.add('img3');
  images[5].classList.add('img4');
  appendImages(section, [menuHeading, menuText, ...images]);
};
