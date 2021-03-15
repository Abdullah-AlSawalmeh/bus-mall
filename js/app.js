'use strict';
/////////////////////////// Globals ///////////////////
let section = document.getElementById('images_section');
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
//////////////////// Constructer /////////////////////////////
function Product (product_name) {
  this.product_name = product_name[0];
  this.file_path = `./img/${product_name[0]}.${product_name[1]}`;
  this.image_shown_counter = 0; 
}

Product.prototype.render = function() {
  // console.log(this.product_name);
  // console.log(this.file_path);
  let img = document.createElement('img');
  img.src = this.file_path;
  section.appendChild(img);
};
//////////////////// End Of Constructer /////////////////////////////


//////////////Funtion to generate 3 random images on the page////////
function random_number () {
  let min = 0;
  let max = imgs_array.length;
  let random_image = Math.floor(Math.random() * (max - min) + min);
  return random_image;
}

for (let i = 0; i < 3; i++) {
  let imgobj = new Product(imgs_array[random_number()]);
  imgobj.render();
}










































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