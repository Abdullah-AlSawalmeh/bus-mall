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




function Product (product_name) {
  this.product_name = product_name[0];
  this.file_path = './img/' + product_name[0] +'.'+ product_name[1];
  this.image_shown_counter = 0; 
}

Product.prototype.random = function () {
  let min = 0;
  let max = imgs_array.length;
  let random_image = Math.floor(Math.random() * (max - min) + min);
  return random_image;
};

Product.prototype.render = function() {
  // console.log(this.product_name);
  // console.log(this.file_path);
  let img = document.createElement('img');
  


};

for (let i = 0; i < imgs_array.length; i++) {
  let imgobj = new Product(imgs_array[i]);
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