'use strict';
/////////////////////////// Globals ///////////////////
let images_section = document.getElementById('images_section');
let button = document.getElementById('button');
let btn = document.createElement('button');
btn.innerHTML = 'View Results';
let show_results = document.getElementById('show_results');
let number_of_images= 3;
let imgsobjs = [];
let imgs = [];
let number_of_rounds = 25;
let click_handler_counter = 0;
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
///////////////////////////Function to create the three images side by side ////////////////////
function create_images() {
  for (let i = 0; i < number_of_images; i++) {
    imgs[i] = document.createElement('img');
    imgs[i].id = 'img' + i;
    images_section.appendChild(imgs[i]);
  }
}
create_images();

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
////// create objects //////
function create_objects() {
  for (let i = 0; i < imgs_array.length; i++) {
    new Product(imgs_array[i]);
  }
}
create_objects();
////// generate random numbers //////
function random_number() {
  let min = 0;
  let max = imgs_array.length;
  let random_image = Math.floor(Math.random() * (max - min) + min);
  return random_image;
}
////// generate random array so no image will be duplicated //////
function random_array() {
  let rand_array=[0,0,0];
  while (rand_array[0] === rand_array[1] || rand_array[0] === rand_array[2] || rand_array[1] === rand_array[2]) {
    for (let i = 0; i < number_of_images; i++) {
      rand_array[i] = random_number();
    }
  }
  return rand_array;
}
////// generate images on a randomly manner //////
function render() {
  let rand_array = random_array();

  for (let i = 0; i < number_of_images; i++) {
    let img = document.getElementById('img' + i);
    img.title = imgsobjs[rand_array[i]].product_name;
    img.src = imgsobjs[rand_array[i]].file_path;
    imgsobjs[rand_array[i]].image_shown_counter++;
  }
}


/////////////////////////////////////////Add Listner////////////////////
images_section.addEventListener('click', clickhandler);
////////////////////////////images handler //////////////////////
function clickhandler(event) {
  if (click_handler_counter === number_of_rounds) {
    // button.appendChild(btn);
    // btn.addEventListener('click',btnhandler);
    images_section.removeEventListener('click',clickhandler);
    chart();

  }
  else {
    if (event.target.id === 'img0' || event.target.id === 'img1' || event.target.id === 'img2') {
      for (let i = 0; i < imgsobjs.length; i++) {
        if (imgsobjs[i].product_name === event.target.title) {
          imgsobjs[i].image_vote++;
          click_handler_counter++;
          console.log(click_handler_counter);
        }
      }
      render();
    }
  }

}
/////////////////////// button handler ////////////////////
function btnhandler() {
  for (let i = 0; i < imgsobjs.length; i++) {
    let ptag = document.createElement('p');
    ptag.innerHTML = imgsobjs[i].product_name + ' had ' + imgsobjs[i].image_vote + ' votes, and was seen ' + imgsobjs[i].image_shown_counter + ' times.';
    show_results.appendChild(ptag);
  }
  btn.removeEventListener('click', btnhandler);}

render();





// function chart() {
//   let ctx = document.getElementById('myChart').getContext('2d');
//   let myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: images_name(),
//       datasets: [
//         [{
//         label: '# of Votes',
//         data: images_votes(),
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderWidth: 1
//       }],
//         [{
//           label: '# of Views',
//           data: images_views(),
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//           ],
//           borderWidth: 1
//         }]
//     ]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true
//           }
//         }]
//       }
//     }
//   });


function chart() {

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: images_name(),
      datasets: [
        {label: '# of Votes',
        data: images_votes(),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 1},
        {
          label: '# of Votes',
          data: images_views(),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderWidth: 1
        }
        
    ]




    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// chart();



///////// function to get images labels
function images_name() {
  let imgs_name = [];
  for (let i = 0; i < imgsobjs.length; i++) {
    imgs_name.push(imgsobjs[i].product_name);
  }
  return imgs_name;

}
///////// function to get images votes
function images_votes() {
  let imgs_votes = [];
  for (let i = 0; i < imgsobjs.length; i++) {
    imgs_votes.push(imgsobjs[i].image_vote);
  }
  return imgs_votes;

}

function images_views() {
  let imgs_views = [];
  for (let i = 0; i < imgsobjs.length; i++) {
    imgs_views.push(imgsobjs[i].image_shown_counter);
  }
  return imgs_views;

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