
let goodEvent = '';
let badEvent = '';
let health = 100;

const goodButton = document.getElementById('goodButton')
const badButton = document.getElementById('badButton')
const healthMeter = document.getElementById('healthMeter')
const progressBar = document.getElementById('progressBar')
progressBar.addEventListener("transitionend", () => {
    if (health <= 0) {
        alert('The coastline was destroyed!')
        health = 100;
        healthMeter.innerText = `Health: ${health}`
        progressBar.setAttribute('style', `width: ${100 - (health / 2)}%`)
    }
});

let goodArray = [
    {
        breakWaterAdd: {
            display: 'Build Breakwater',
            hp: 25
        }
    },
    {
        beachNourishment: {
            display: 'Beach Nourishment',
            hp: 50
        }
    }
]

let badArray = [
    {
        tsunami: {
            display: 'Tsunami',
            hp: -100
        }
    },
    {
        tropicalStorm: {
            display: 'Tropical Storm',
            hp: -40
        }
    },
    {
        hurricane: {
            display: 'Hurricane',
            hp: -90
        }
    },
    {
        noreaster: {
            display: 'Noreaster',
            hp: -50
        }
    },
    {
        duneWalking: {
            display: 'Dune Walking',
            hp: -7
        }
    },
    {
        seaLevelRise: {
            display: 'Sea Level Rise',
            hp: -5
        }
    },

]


const randomizeEvents = () => {
    const goodNum = Math.floor(Math.random() * goodArray.length);
    const badNum = Math.floor(Math.random() * badArray.length);
    goodEvent = goodArray[goodNum];
    badEvent = badArray[badNum];
    goodButton.innerText = goodEvent[Object.keys(goodEvent)[0]].display;
    goodButton.setAttribute('eventname', Object.keys(goodEvent)[0]);

    badButton.innerText = badEvent[Object.keys(badEvent)[0]].display;
    badButton.setAttribute('eventname', Object.keys(badEvent)[0]);



}

const fireGoodEvent = (evt) => {
    let eventName = evt.target.attributes[2].value
    //look thru the array for the event
    for (let event of goodArray) {

        if (Object.keys(event)[0] === eventName) {
            health += event[eventName].hp
            healthMeter.innerText = `Health: ${health}`
            progressBar.setAttribute('style', `width: ${100 - (health / 2)}%`)
            randomizeEvents()
        }
    }

}
const fireBadEvent = (evt) => {
    let eventName = evt.target.attributes[2].value
    //look thru the array for the event
    for (let event of badArray) {

        if (Object.keys(event)[0] === eventName) {
            health += event[eventName].hp
            healthMeter.innerText = `Health: ${health}`
            progressBar.setAttribute('style', `width: ${100 - (health / 2)}%`)
            randomizeEvents()
        }
    }

}



goodButton.addEventListener('click', fireGoodEvent);
badButton.addEventListener('click', fireBadEvent);

randomizeEvents()

