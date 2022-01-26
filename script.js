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

const openBtn = document.getElementById('open');
const modal_container= document.getElementById('container_modal');
const close = document.getElementById('close');


openBtn.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});


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
  
  // document.getElementById('live').innerHTML = project1.projectLive;
  
  // document.getElementById('source').innerHTML = project1.projectSource;

  //  const project1 = {projectName1:'Tonica', projectDescription1:'Test: A daily selection of privately personalized reads; no accounts or sign-ups required.', projectImage1:'./images/portfolio-desktop/portfolio-1.png', projectLanguages1: {lg1: 'test-html', lg2: 'test-css', lg3: 'test-javaScript'}, projectLive1: 'https://yersel500.github.io/portfolio/', projectSource1:'https://github.com/yersel500/portfolio'};
  
  // document.getElementById('title1').innerHTML = project1.projectName1;
  
  // document.getElementById('descrip1').innerHTML = project1.projectDescription1;
  
  // document.getElementById('img1').src = project1.projectImage1;
  
  // document.getElementById('lg1').innerHTML = project1.projectLanguages1.lg1;
  
  // document.getElementById('lg2').innerHTML = project1.projectLanguages1.lg2;
  
  // document.getElementById('lg3').innerHTML = project1.projectLanguages1.lg3;
  
  // // document.getElementById('live').innerHTML = project1.projectLive1;
  
  // // document.getElementById('source').innerHTML = project1.projectSource1;

  const project1m = new Project('Tonica', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", './images/portfolio-desktop/portfolio-1.png', {lg1: 'test-html', lg2: 'test-css', lg3: 'test-javaScript'}, 'https://yersel500.github.io/portfolio/', 'https://github.com/yersel500/portfolio');
  
  document.getElementById('title1-m').innerHTML = project1m.projectName;
  
  document.getElementById('descrip1-m').innerHTML = project1m.projectDescription;
  
  document.getElementById('img1-m').src = project1m.projectImage;
  
  document.getElementById('lg1-m').innerHTML = project1m.projectLanguages.lg1;
  
  document.getElementById('lg2-m').innerHTML = project1m.projectLanguages.lg2;
  
  document.getElementById('lg3-m').innerHTML = project1m.projectLanguages.lg3;
  
  document.getElementById('live-m').href = project1m.projectLive;
  
  document.getElementById('source-m').href = project1m.projectSource;

  // const project1m = {projectName2:'Tonica', projectDescription2:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', projectImage2:'./images/portfolio-desktop/portfolio-1.png', projectLanguages2: {lg1: 'test-html', lg2: 'test-css', lg3: 'test-javaScript'}, projectLive2:'https://yersel500.github.io/portfolio/', projectSource2: 'https://github.com/yersel500/portfolio'};
  
  // document.getElementById('title1-m').innerHTML = project1m.projectName2;
  
  // document.getElementById('descrip1-m').innerHTML = project1m.projectDescription2;
  
  // document.getElementById('img1-m').src = project1m.projectImage2;
  
  // document.getElementById('lg1-m').innerHTML = project1m.projectLanguages2.lg1;
  
  // document.getElementById('lg2-m').innerHTML = project1m.projectLanguages2.lg2;
  
  // document.getElementById('lg3-m').innerHTML = project1m.projectLanguages2.lg3;
  
  // document.getElementById('live-m').innerHTML = project1m.projectLive2;
  
  // document.getElementById('source-m').innerHTML = project1m.projectSource2;
