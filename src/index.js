import _ from 'lodash';
import './style.css';
import {contactModule} from './contact.js';
import {menuModule} from './menu.js';
import { createTags, addImages, appendImages } from './modules/functions';

const htmlTags = createTags(['nav', 'main', 'section', 'h2', 'p', 'p','p', 'footer']);
const [navigation, main, section, heading2, heading, text, text2,foot] = htmlTags;

navigation.className = "navi";

const menuItems = ['Home', 'Menu', 'Contact'];
const navigationList = document.createElement('ul');
navigationList.classList.add('menu');

menuItems.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList.add('menu-item');
  listItem.setAttribute('data-tab', item);
  listItem.addEventListener('click', () => {
    loadModule(item);
  });
  navigationList.appendChild(listItem);
});

navigation.appendChild(navigationList);

main.className = "main";
section.className = "section";
section.appendChild(heading2);
section.appendChild(heading);
section.appendChild(text);
section.appendChild(text2);

heading2.className = "ueberschriftGross";
heading2.textContent = "Green Garden has everything your vegan heart desires!";

heading.className = "text";
heading.textContent = "Every meal you eat is locally farmed and ethically sourced. We are regularly in touch with our suppliers to ensure the best quality.";

text.className = "text2";
text.textContent = "Our chefs specialize in vegan cooking and create delightful specials every week. Our meals are not only visually appealing, they taste as good as they look. Exquisite!";

foot.id = "foot";
foot.classList.add("devicon-facebook-plain");
foot.textContent = " | 2023";

const images = addImages(['./img/farmer.jpg', './img/spaghetti_fork.jpg','./img/logo.png']);
images[0].classList.add('img1');
images[1].classList.add('img2');
images[2].classList.add('logo')
appendImages(section, images);

const htmlAll = document.querySelector('#content');
htmlAll.appendChild(navigation);
htmlAll.appendChild(images[2]);
htmlAll.appendChild(main);
main.appendChild(section);
main.appendChild(foot);
section.appendChild(heading2);
section.appendChild(heading);
section.appendChild(images[0]);
section.appendChild(text);
section.appendChild(images[1]);
section.appendChild(text2);
document.body.appendChild(htmlAll);

function loadModule(moduleName) {
  section.innerHTML = '';

  switch (moduleName) {
    case 'Home':
      section.appendChild(heading2);
section.appendChild(heading);
section.appendChild(images[0]);
section.appendChild(text);
section.appendChild(images[1]);
section.appendChild(text2);
      break;
    case 'Menu':
      menuModule(section); 
      break;
    case 'Contact':
      contactModule(section); 
      break;
    default:
      console.error('Unrecognized module:', moduleName);
  }
}

loadModule('Home'); 
