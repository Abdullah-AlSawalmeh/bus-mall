'use strict';
/////////////////////////// Globals ///////////////////
let section = document.getElementById('images_section');
let number_of_images= 3;
let imgsobjs = [];
let imgs_array = [
  ['bag', 'jpg'],
  ['banana', 'jpg'],
  ['bathroom', 'jpg'],
  ['boots', 'jpg'],
  ['breakfast', 'jpg'],
  ['bubblegum', 'jpg'],
  ['chair', 'jpg'],
  ['cthulhu', 'jpg'],
  ['dog-duck', 'jpg'],
  ['dragon', 'jpg'],
  ['pen', 'jpg'],
  ['pet-sweep', 'jpg'],
  ['scissors', 'jpg'],
  ['shark', 'jpg'],
  ['sweep', 'png'],
  ['tauntaun', 'jpg'],
  ['unicorn', 'jpg'],
  ['usb', 'gif'],
  ['water-can', 'jpg'],
  ['wine-glass', 'jpg']
];
let imgs = [];
for (let i = 0; i < number_of_images; i++) {
  imgs[i] = document.createElement('img');
  imgs[i].id = 'img' + i;
  section.appendChild(imgs[i]);
}
//////////////////// Constructer /////////////////////////////
function Product (product_name) {
  this.product_name = product_name[0];
  this.file_path = `./img/${product_name[0]}.${product_name[1]}`;
  this.image_shown_counter = 0;
  this.image_vote= 0;
  imgsobjs.push(this);
}
//////////////////// End Of Constructer /////////////////////////////
//////////////////// Algorithim ////////////////////////////////////
for (let i = 0; i < imgs_array.length; i++) {
  new Product(imgs_array[i]);
}
function random_number() {
  let min = 0;
  let max = imgs_array.length;
  let random_image = Math.floor(Math.random() * (max - min) + min);
  // console.log (random_image);
  return random_image;
}
function random_array() {
  let rand_array=[0,0,0];
  while (rand_array[0] === rand_array[1] || rand_array[0] === rand_array[2] || rand_array[1] === rand_array[2]) {
    for (let i = 0; i < number_of_images; i++) {
      rand_array[i] = random_number();
    }
  }
  // console.log(rand_array);
  return rand_array;
}

function render() {
  let rand_array = random_array();

  for (let i = 0; i < number_of_images; i++) {
    let img = document.getElementById('img' + i);
    img.title = imgsobjs[rand_array[i]].product_name;
    img.src = imgsobjs[rand_array[i]].file_path;
    imgsobjs[rand_array[i]].image_shown_counter++;
  }
}



section.addEventListener('click', clickhandler);

function clickhandler(event) {
  if (event.target.id === 'img0' || event.target.id === 'img1' || event.target.id === 'img2') {
    for (let i = 0; i < imgsobjs.length; i++) {
      if (imgsobjs[i].product_name === event.target.title) {
        imgsobjs[i].image_vote++;
        console.table(imgsobjs[i]);
      }
    }
    render();}
}

render();


















































// let imgs_array = [
//   [['bag'],['jpg']],
//   [['banana'],['jpg']],
//   [['bathroom'],['jpg']],
//   [['boots'],['jpg']],
//   [['breakfast'],['jpg']],
//   [['bubblegum'],['jpg']],
//   [['chair'],['jpg']],
//   [['cthulhu'],['jpg']],
//   [['dog-duck'],['jpg']],
//   [['dragon'],['jpg']],
//   [['pen'],['jpg']],
//   [['pet-sweep'],['jpg']],
//   [['scissors'],['jpg']],
//   [['shark'],['jpg']],
//   [['sweep'],['png']],
//   [['tauntaun'],['jpg']],
//   [['unicorn'],['jpg']],
//   [['usb'],['gif']],
//   [['water-can'],['jpg']],
//   [['wine-glass'],['jpg']]
// ];