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
const modalContainer = document.getElementById('container_modal');
const close = document.getElementById('close');

openBtn.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

close.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});

// finish activation popup 1

// Activate popup 2

const open2 = document.getElementById('open2');
const modalContainer2 = document.getElementById('container_modal2');
const close2 = document.getElementById('close2');

open2.addEventListener('click', () => {
  modalContainer2.classList.add('show');
});

close2.addEventListener('click', () => {
  modalContainer2.classList.remove('show');
});

// finish activation popup 2

// Activate popup 3

const open3 = document.getElementById('open3');
const modalContainer3 = document.getElementById('container_modal3');
const close3 = document.getElementById('close3');

open3.addEventListener('click', () => {
  modalContainer3.classList.add('show');
});

close3.addEventListener('click', () => {
  modalContainer3.classList.remove('show');
});

// Activate popup 4

const open4 = document.getElementById('open4');
const modalContainer4 = document.getElementById('container_modal4');
const close4 = document.getElementById('close4');

open4.addEventListener('click', () => {
  modalContainer4.classList.add('show');
});

close4.addEventListener('click', () => {
  modalContainer4.classList.remove('show');
});

function Project(name, description, image, languages, live, source) {
  this.projectName = name;
  this.projectDescription = description;
  this.projectImage = image;
  this.projectLanguages = languages;
  this.projectLive = live;
  this.projectSource = source;
}

const project1 = new Project('To Do List', 'A To Do List app to improve the control of your tasks.', 'https://img001.prntscr.com/file/img001/WUxSNjQESdGey_BAOxaPUQ.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript',
},
'https://yersel500.github.io/to-do-list-review/dist/', 'https://github.com/yersel500/to-do-list-review');

document.getElementById('title1').innerHTML = project1.projectName;

document.getElementById('descrip1').innerHTML = project1.projectDescription;

document.getElementById('img1').src = project1.projectImage;

document.getElementById('lg1').innerHTML = project1.projectLanguages.lg1;

document.getElementById('lg2').innerHTML = project1.projectLanguages.lg2;

document.getElementById('lg3').innerHTML = project1.projectLanguages.lg3;

// document.getElementById('live').innerHTML = project1.projectLive;

// document.getElementById('source').innerHTML = project1.projectSource;

const project1m = new Project('To Do List', 'A To Do List app to improve the control of your tasks. You can add, delete and change the status of each task from pending to complete.', 'https://img001.prntscr.com/file/img001/7yT-DC4uSR-Hoe-fGua7MQ.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript', lg4: 'github', lg5: 'ruby', lg6: ' bootstraps',
},
'https://yersel500.github.io/to-do-list-review/dist/', 'https://github.com/yersel500/to-do-list-review');

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

const project2 = new Project('Crypto Congress', 'Crypto Congress is back for its third edition on 15 October 2022 and once again will be hosted online with controversial speakers and discussions.', 'https://img001.prntscr.com/file/img001/38PQbilBQAmfuOGkSfJVCQ.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript',
},
'https://yersel500.github.io/capstone-project-yh/index.html', 'https://github.com/yersel500/capstone-project-yh');

document.getElementById('title2').innerHTML = project2.projectName;

document.getElementById('descrip2').innerHTML = project2.projectDescription;

document.getElementById('img2').src = project2.projectImage;

document.getElementById('lg1-2').innerHTML = project2.projectLanguages.lg1;

document.getElementById('lg2-2').innerHTML = project2.projectLanguages.lg2;

document.getElementById('lg3-2').innerHTML = project2.projectLanguages.lg3;

const project2m = new Project('Crypto Congress', 'Crypto Congress is back for its third edition on 15 October 2022 and once again will be hosted online with controversial speakers and discussions.', 'https://img001.prntscr.com/file/img001/e7W7M1bOSwygAEQ1JCTXcA.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript', lg4: 'github', lg5: 'ruby', lg6: ' bootstraps',
},
'https://yersel500.github.io/capstone-project-yh/index.html', 'https://github.com/yersel500/capstone-project-yh');

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

const project3 = new Project('Space Travelers Hub', 'A website that work with real live data from the SpaceX API. The users can book rockets and join selected space missions.', 'https://img001.prntscr.com/file/img001/Pe8uRiPzRjqArDYov54jiQ.png', {
  lg1: 'React', lg2: 'Redux', lg3: 'SpaceX API',
},
'https://yersel500.github.io/portfolio/', 'https://github.com/yersel500/portfolio');

document.getElementById('title3').innerHTML = project3.projectName;

document.getElementById('descrip3').innerHTML = project3.projectDescription;

document.getElementById('img3').src = project3.projectImage;

document.getElementById('lg1-3').innerHTML = project3.projectLanguages.lg1;

document.getElementById('lg2-3').innerHTML = project3.projectLanguages.lg2;

document.getElementById('lg3-3').innerHTML = project3.projectLanguages.lg3;

const project3m = new Project('Space Travelers Hub', 'A website that work with real live data from the SpaceX API. The users can book rockets and join selected space missions.', 'https://img001.prntscr.com/file/img001/XfqTzVKkQ5STstXUJL4XHA.png', {
  lg1: 'React', lg2: 'Redux', lg3: 'SpaceX API', lg4: 'github', lg5: 'Router', lg6: 'css',
},
'https://loquacious-axolotl-f182b5.netlify.app/', 'https://github.com/yersel500/space-travelers-hub');

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

const project4 = new Project('Math Magicians', 'A website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.', 'https://img001.prntscr.com/file/img001/P5wS6mg7TL2492U9eXmu0g.png', {
  lg1: 'React', lg2: 'Router', lg3: 'css',
},
'https://math-magicians-yersel.herokuapp.com/', 'https://github.com/yersel500/math-magicians');

document.getElementById('title4').innerHTML = project4.projectName;

document.getElementById('descrip4').innerHTML = project4.projectDescription;

document.getElementById('img4').src = project4.projectImage;

document.getElementById('lg1-4').innerHTML = project4.projectLanguages.lg1;

document.getElementById('lg2-4').innerHTML = project4.projectLanguages.lg2;

document.getElementById('lg3-4').innerHTML = project4.projectLanguages.lg3;

const project4m = new Project('Math Magicians', 'A website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.', 'https://img001.prntscr.com/file/img001/BtELpewwRp-bjkMni1Jfiw.png', {
  lg1: 'React', lg2: 'Router', lg3: 'css', lg4: 'github', lg5: 'javascript', lg6: ' Jest',
},
'https://math-magicians-yersel.herokuapp.com/', 'https://github.com/yersel500/math-magicians');

document.getElementById('title4-m').innerHTML = project4m.projectName;

document.getElementById('descrip4-m').innerHTML = project4m.projectDescription;

document.getElementById('img4-m').src = project4m.projectImage;

document.getElementById('lg1-4-m').innerHTML = project4m.projectLanguages.lg1;

document.getElementById('lg2-4-m').innerHTML = project4m.projectLanguages.lg2;

document.getElementById('lg3-4-m').innerHTML = project4m.projectLanguages.lg3;

document.getElementById('lg4-4-m').innerHTML = project4m.projectLanguages.lg4;

document.getElementById('lg5-4-m').innerHTML = project4m.projectLanguages.lg5;

document.getElementById('lg6-4-m').innerHTML = project4m.projectLanguages.lg6;

document.getElementById('live-4-m').href = project4m.projectLive;

document.getElementById('source-4-m').href = project4m.projectSource;

// Validation form

const form = document.getElementById('form');
const myemail = document.getElementById('myemail');

function setErrorFor(input, message) {
  const small = document.getElementById('small1');
  small.innerText = message;
  small.classList.add('error');
}

function isEmail(email) {
  return /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setSuccessFor(input, message) {
  const small = document.getElementById('small1');
  small.innerText = message;
  small.classList.remove('error');
}

function checkEmail() {
  const myemailValue = myemail.value.trim();

  if (myemailValue === '') {
    setErrorFor(myemail, 'Email cannot be blank');
  } else if (myemailValue.toLowerCase() !== myemailValue) {
    setErrorFor(myemail, 'All character in the email should be lower case');
    // return false;
  } else if (!isEmail(myemailValue)) {
    setErrorFor(myemail, 'Email is not valid');
    // return false;
  } else {
    setSuccessFor(myemail, '');
  }

  return !(myemailValue === '' || myemailValue.toLowerCase() !== myemailValue || !isEmail(myemailValue));
}

form.addEventListener('submit', (e) => {
  if (!checkEmail()) {
    e.preventDefault();
  }
});