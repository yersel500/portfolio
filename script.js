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

// Activate popup 1

const openBtn = document.getElementById('open');
const modal_container= document.getElementById('container_modal');
const close = document.getElementById('close');


openBtn.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

// finish activation popup 1

// Activate popup 2

const open2 = document.getElementById('open2');
const modal_container2= document.getElementById('container_modal2');
const close2 = document.getElementById('close2');


open2.addEventListener('click', () => {
  modal_container2.classList.add('show');
});

close2.addEventListener('click', () => {
  modal_container2.classList.remove('show');
});

// finish activation popup 2

// Activate popup 3

const open3 = document.getElementById('open3');
const modal_container3= document.getElementById('container_modal3');
const close3 = document.getElementById('close3');


open3.addEventListener('click', () => {
  modal_container3.classList.add('show');
});

close3.addEventListener('click', () => {
  modal_container3.classList.remove('show');
});

function Project(name, description, image, languages, live, source) {

  this.projectName=name;
  
  this.projectDescription=description;
  
  this.projectImage=image;
  
  this.projectLanguages=languages;
  
  this.projectLive=live;
  
  this.projectSource=source;
  
  }
  
  const project1 = new Project('Tonic', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', './images/portfolio-desktop/portfolio-1.png', {lg1: 'html', lg2: 'css', lg3: 'javaScript'}, 'https://yersel500.github.io/portfolio/', 'https://github.com/yersel500/portfolio');
  
  document.getElementById('title1').innerHTML = project1.projectName;
  
  document.getElementById('descrip1').innerHTML = project1.projectDescription;
  
  document.getElementById('img1').src = project1.projectImage;
  
  document.getElementById('lg1').innerHTML = project1.projectLanguages.lg1;
  
  document.getElementById('lg2').innerHTML = project1.projectLanguages.lg2;
  
  document.getElementById('lg3').innerHTML = project1.projectLanguages.lg3;
  
  // document.getElementById('live').innerHTML = project1.projectLive;
  
  // document.getElementById('source').innerHTML = project1.projectSource;

  const project1m = new Project('Tonic', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", './images/portfolio-desktop/portfolio-1.png', {lg1: 'html', lg2: 'css', lg3: 'javaScript', lg4: 'github', lg5: 'ruby', lg6: ' bootstraps'}, 'https://yersel500.github.io/portfolio/', 'https://github.com/yersel500/portfolio');
  
  document.getElementById('title1-m').innerHTML = project1m.projectName;
  
  document.getElementById('descrip1-m').innerHTML = project1m.projectDescription;
  
  document.getElementById('img1-m').src = project1m.projectImage;
  
  document.getElementById('lg1-m').innerHTML = project1m.projectLanguages.lg1;
  
  document.getElementById('lg2-m').innerHTML = project1m.projectLanguages.lg2;
  
  document.getElementById('lg3-m').innerHTML = project1m.projectLanguages.lg3;

  document.getElementById('lg4-m').innerHTML = project1m.projectLanguages.lg4;
  
  document.getElementById('lg5-m').innerHTML = project1m.projectLanguages.lg5;
  
  document.getElementById('lg6-m').innerHTML = project1m.projectLanguages.lg6;
  
  document.getElementById('live-m').href = project1m.projectLive;
  
  document.getElementById('source-m').href = project1m.projectSource;

  const project2 = new Project('Multi-Post Stories', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', './images/portfolio-desktop/portfolio-2.png', {lg1: 'html', lg2: 'css', lg3: 'javaScript'}, 'https://yersel500.github.io/portfolio/', 'https://github.com/yersel500/portfolio');
  
  document.getElementById('title2').innerHTML = project2.projectName;
  
  document.getElementById('descrip2').innerHTML = project2.projectDescription;
  
  document.getElementById('img2').src = project2.projectImage;
  
  document.getElementById('lg1-2').innerHTML = project2.projectLanguages.lg1;
  
  document.getElementById('lg2-2').innerHTML = project2.projectLanguages.lg2;
  
  document.getElementById('lg3-2').innerHTML = project2.projectLanguages.lg3;
  

  const project2m = new Project('Multi-Post Stories', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", './images/portfolio-desktop/portfolio-2.png', {lg1: 'html', lg2: 'css', lg3: 'javaScript', lg4: 'github', lg5: 'ruby', lg6: ' bootstraps'}, 'https://yersel500.github.io/portfolio/', 'https://github.com/yersel500/portfolio');
  
  document.getElementById('title2-m').innerHTML = project2m.projectName;
  
  document.getElementById('descrip2-m').innerHTML = project2m.projectDescription;
  
  document.getElementById('img2-m').src = project2m.projectImage;
  
  document.getElementById('lg1-2-m').innerHTML = project2m.projectLanguages.lg1;
  
  document.getElementById('lg2-2-m').innerHTML = project2m.projectLanguages.lg2;
  
  document.getElementById('lg3-2-m').innerHTML = project2m.projectLanguages.lg3;

  document.getElementById('lg4-2-m').innerHTML = project2m.projectLanguages.lg4;
  
  document.getElementById('lg5-2-m').innerHTML = project2m.projectLanguages.lg5;
  
  document.getElementById('lg6-2-m').innerHTML = project2m.projectLanguages.lg6;
  
  document.getElementById('live-2-m').href = project2m.projectLive;
  
  document.getElementById('source-2-m').href = project2m.projectSource;

  const project3 = new Project('Tonic', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', './images/portfolio-desktop/portfolio-3.png', {lg1: 'html', lg2: 'css', lg3: 'javaScript'}, 'https://yersel500.github.io/portfolio/', 'https://github.com/yersel500/portfolio');
  
  document.getElementById('title3').innerHTML = project3.projectName;
  
  document.getElementById('descrip3').innerHTML = project3.projectDescription;
  
  document.getElementById('img3').src = project3.projectImage;
  
  document.getElementById('lg1-3').innerHTML = project3.projectLanguages.lg1;
  
  document.getElementById('lg2-3').innerHTML = project3.projectLanguages.lg2;
  
  document.getElementById('lg3-3').innerHTML = project3.projectLanguages.lg3;

  const project3m = new Project('Tonic', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", './images/portfolio-desktop/portfolio-3.png', {lg1: 'html', lg2: 'css', lg3: 'javaScript', lg4: 'github', lg5: 'ruby', lg6: ' bootstraps'}, 'https://yersel500.github.io/portfolio/', 'https://github.com/yersel500/portfolio');
  
  document.getElementById('title3-m').innerHTML = project3m.projectName;
  
  document.getElementById('descrip3-m').innerHTML = project3m.projectDescription;
  
  document.getElementById('img3-m').src = project3m.projectImage;
  
  document.getElementById('lg1-3-m').innerHTML = project3m.projectLanguages.lg1;
  
  document.getElementById('lg2-3-m').innerHTML = project3m.projectLanguages.lg2;
  
  document.getElementById('lg3-3-m').innerHTML = project3m.projectLanguages.lg3;

  document.getElementById('lg4-3-m').innerHTML = project3m.projectLanguages.lg4;
  
  document.getElementById('lg5-3-m').innerHTML = project3m.projectLanguages.lg5;
  
  document.getElementById('lg6-3-m').innerHTML = project3m.projectLanguages.lg6;
  
  document.getElementById('live-3-m').href = project3m.projectLive;
  
  document.getElementById('source-3-m').href = project3m.projectSource;

  // project 4 

  const project4 = new Project('Tonic', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', './images/portfolio-desktop/portfolio-4.png', {lg1: 'html', lg2: 'css', lg3: 'javaScript'}, 'https://yersel500.github.io/portfolio/', 'https://github.com/yersel500/portfolio');
  
  document.getElementById('title4').innerHTML = project4.projectName;
  
  document.getElementById('descrip4').innerHTML = project4.projectDescription;
  
  document.getElementById('img4').src = project4.projectImage;
  
  document.getElementById('lg1-4').innerHTML = project4.projectLanguages.lg1;
  
  document.getElementById('lg2-4').innerHTML = project4.projectLanguages.lg2;
  
  document.getElementById('lg3-4').innerHTML = project4.projectLanguages.lg3;