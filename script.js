const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#main-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

function Project(name, description, image, languages, live, source) {

  this.projectName=name;
  
  this.projectDescription=description;
  
  this.projectImage=image;
  
  this.projectLanguages=languages;
  
  this.projectLive=live;
  
  this.projectSource=source;
  
  }
  
  const project1 = new Project('Tonica', 'Test: A daily selection of privately personalized reads; no accounts or sign-ups required.', './images/portfolio-desktop/portfolio-1.png', {lg1: 'test-html', lg2: 'test-css', lg3: 'test-javaScript'}, 'https://yersel500.github.io/portfolio/', 'https://github.com/yersel500/portfolio');
  
  document.getElementById('title1').innerHTML = project1.projectName;
  
  document.getElementById('descrip1').innerHTML = project1.projectDescription;
  
  document.getElementById('img1').src = project1.projectImage;
  
  document.getElementById('lg1').innerHTML = project1.projectLanguages.lg1;
  
  document.getElementById('lg2').innerHTML = project1.projectLanguages.lg2;
  
  document.getElementById('lg3').innerHTML = project1.projectLanguages.lg3;
  
  document.getElementById('live').innerHTML = project1.Live;
  
  document.getElementById('source').innerHTML = project1.projectSource;

const modal_container= document.getElementById('container_modal1');
const open = document.getElementById('open');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});