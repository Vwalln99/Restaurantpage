import _ from 'lodash';
import './style.css';
import { createTags, addImages, appendImages } from './modules/functions';

export const contactModule = (section) => {
  const htmlTags = createTags(['h2', 'p', 'textarea', 'button']);
  const [contactHeading, contactText, contactTextarea, contactButton] = htmlTags;

  contactHeading.className = "ueberschriftGross";
  contactHeading.textContent = "Contact";

  contactText.className = "text_contact";
  contactText.textContent = "Get in touch with us for inquiries and reservations!";

  contactTextarea.className = "contactTextarea";

  contactButton.className = "contactButton";
  contactButton.textContent = "Send";

  const images = addImages(['./img/map.jpg', './img/restaurant.jpg']);
  images[0].classList.add('img9');
  images[1].classList.add('img0');
  appendImages(section, [contactHeading, contactText, ...images, contactTextarea, contactButton]);
};
