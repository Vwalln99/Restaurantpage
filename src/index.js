
import _ from 'lodash';
import './style.css';
import { createTags, expandHtml } from './modules/functions';

const htmlTags = createTags(['nav', 'h2', 'p', 'h5', 'footer']);
expandHtml(document.body, htmlTags);

const heading = document.querySelector('h5');
heading.className = "ueberschriftKlein";
heading.textContent = "Every meal you eat is local farmed and fair purchased. We are regulary in touch with our suppliers to be sure we get the best quality.";


const text = document.querySelector('p');
text.className = "text";
text.textContent = " Our cooks are specialised in vegan cooking and create wonderful specials every week. Our meals aren't only good to look at, they taste like they look. Exquisite!";

const heading2 = document.querySelector('h2');
heading2.className = "ueberschriftGross";
heading2.textContent = "Green Garden has everything your vegan heart desires!";

const navigation = document.querySelector('nav');
navigation.className = "navi";
navigation.textContent = "Home  Menu  Contact";

const foot = document.querySelector('footer');
foot.className = "foot";
foot.classList.add("devicon-facebook-plain");
foot.textContent = "  | Impressum | (C)";

const htmlAll = document.querySelector('#content');
htmlAll.appendChild(navigation);
htmlAll.appendChild(heading2);
htmlAll.appendChild(heading);
htmlAll.appendChild(text);
htmlAll.appendChild(foot);


