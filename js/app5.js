'use strict';
/////////////////////////// Globals ///////////////////
let images_section = document.getElementById('images_section');
let number_of_images = 3;
let imgsobjs = [];//////
let imgs = [];
let number_of_rounds = 25;
// let click_handler_counter = 0; //////
// let random_array_glob = [0, 0, 0]; //////
// let random_array_glob2 = [0, 0, 0]; //////
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
function Product(product_name) {
    this.product_name = product_name[0];
    this.file_path = `./img/${product_name[0]}.${product_name[1]}`;
    this.image_shown_counter = 0;
    this.image_vote = 0;
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
    let rand_array = [0, 0, 0];
    while (rand_array[0] === rand_array[1] || rand_array[0] === rand_array[2] || rand_array[1] === rand_array[2]) {
        for (let i = 0; i < number_of_images; i++) {
            rand_array[i] = random_number();
        }
    }

    if (localStorage.getItem('random_array_glob') === null) {
        localStorage.setItem('random_array_glob', JSON.stringify([0, 0, 0]));
    }
    localStorage.setItem('random_array_glob', JSON.stringify(rand_array);
    //   random_array_glob = rand_array; //////

    return rand_array;
}
////// generate images on a randomly manner //////
function render() {

    if (localStorage.getItem('random_array_glob') === null) {
        localStorage.setItem('random_array_glob', JSON.stringify([0, 0, 0]));
    }
    if (localStorage.getItem('random_array_glob2') === null) {
        localStorage.setItem('random_array_glob2', JSON.stringify([0, 0, 0]));
    }

    while (random_array_glob[0] === random_array_glob2[0] || random_array_glob[0] === random_array_glob2[1] || random_array_glob[0] === random_array_glob2[2] || random_array_glob[1] === random_array_glob2[1] || random_array_glob[1] === random_array_glob2[2] || random_array_glob[2] === random_array_glob2[2]) {
        random_array();
    } //////
    let random_array_glob = JSON.parse(localStorage.getItem('random_array_glob'));

    //   random_array_glob2 = random_array_glob; //////
    localStorage.setItem('random_array_glob2', JSON.stringify(random_array_glob))

    for (let i = 0; i < number_of_images; i++) {
        let img = document.getElementById('img' + i);
        img.title = imgsobjs[random_array_glob[i]].product_name; //////
        img.src = imgsobjs[random_array_glob[i]].file_path; //////
        imgsobjs[random_array_glob[i]].image_shown_counter++; //////
        localStorage.setItem('imgsobjs', JSON.stringify(imgsobjs));
    }
    random_array();
}
/////////////////////////////////////////Add Listner////////////////////
images_section.addEventListener('click', clickhandler);
////////////////////////////images handler //////////////////////
function clickhandler(event) {

    if (localStorage.getItem('click_handler_counter') === null) {
        localStorage.setItem('click_handler_counter', 0);
    }
    if (parseInt(localStorage.getItem('click_handler_counter')) === number_of_rounds) { //////
        images_section.removeEventListener('click', clickhandler);
        chart();
    }
    else {
        if (event.target.id === 'img0' || event.target.id === 'img1' || event.target.id === 'img2') {
            for (let i = 0; i < imgsobjs.length; i++) {
                if (imgsobjs[i].product_name === event.target.title) {
                    imgsobjs[i].image_vote++;
                    //   click_handler_counter++; //////
                    localStorage.setItem('click_handler_counter', parseInt(localStorage.getItem('click_handler_counter')) + 1)
                    //   console.log(click_handler_counter);
                }
            }
            render();
        }
    }

}

render();

function chart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: images_name(),
            datasets: [
                {
                    label: '# of Votes',
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
                    borderWidth: 1
                },
                {
                    label: '# of Views',
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
