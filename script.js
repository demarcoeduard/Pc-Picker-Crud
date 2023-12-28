// BestSellersCards

let bestSellersCardsMap = [];
bestSellersCardsMap.push({name: 'BALAUR Pink Limited', price: 5.998, image: 'best sellers/BALAUR Pink Limited.jpg'})
bestSellersCardsMap.push({name: 'Genesis Nitro 890 Black', price: 871, image: 'best sellers/Genesis Nitro 890 Black.jpg'})
bestSellersCardsMap.push({name: 'LED LG Gaming UltraGear', price: 1.158, image: 'best sellers/LED LG Gaming UltraGear.jpg'})
bestSellersCardsMap.push({name: 'Logitech G502 HERO', price: 254, image: 'best sellers/Logitech G502 HERO.jpg'})
bestSellersCardsMap.push({name: 'Marvo HG9018', price: 85, image: 'best sellers/Marvo HG9018.jpg'})

let sellersStorage = localStorage.getItem('sellers');

if (sellersStorage) {
    localStorage.setItem('sellers', sellersStorage);
} else {
    localStorage.setItem('sellers', JSON.stringify(bestSellersCardsMap))
}

let bestSellersCards = document.getElementById('bestsellers-cards');
let bestSellersIndex = 0;

const bestSellersCarousel = () => {
    bestSellersCards.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const localSellers = JSON.parse(localStorage.getItem('sellers'));
        const cardIndex = (bestSellersIndex + i) % localSellers.length;
        const card = localSellers[cardIndex];

        bestSellersCards.innerHTML += `
            <div class="card">
                <img src='${card.image}' alt="card">
                <p>${card.name}</p>
                <p>Price: ${card.price} RON</p>
                <button>Add to Cart</button>
            </div>
        `;
    }
}

bestSellersCarousel();

const nextSlide = () => {
    const localSellers = JSON.parse(localStorage.getItem('sellers'));
    bestSellersIndex = (bestSellersIndex + 1) % localSellers.length;
    bestSellersCarousel();
}

setInterval(() => {
    nextSlide();
}, 3000)



// Carousel



const createCarousel = (cardsMap, cardsContainer, rightButton, leftButton) => {
    let index = 0;
    let localArray = JSON.parse(localStorage.getItem(cardsMap));

    const carousel = () => {
        cardsContainer.innerHTML = '';

        for (let i = 0; i < 3; i++) {
            const cardIndex = (index + i) % localArray.length;
            const card = localArray[cardIndex];

            cardsContainer.innerHTML += `
                <div class="card">
                    <img src='${card.image}' alt="card">
                    <p>${card.name}</p>
                    <p>Price: ${card.price} RON</p>
                    <button>Add to Cart</button>
                </div>
            `;
        }
    }

    carousel();

    const nextSlide = () => {
        index = (index + 1) % localArray.length;
        carousel();
    }

    const prevSlide = () => {
        index = (index - 1 + localArray.length) % localArray.length;
        carousel();
    }

    rightButton.addEventListener('click', nextSlide);
    leftButton.addEventListener('click', prevSlide);
}



// Desktops



let desktopsCardsMap = [];

desktopsCardsMap.push({name: 'BALAUR Epic Pro', price: 5.998, image: 'desktops/BALAUR Epic Pro.jpg'});
desktopsCardsMap.push({name: 'DRAGON Epic Max', price: 871, image: 'desktops/DRAGON Epic Max.jpg'});
desktopsCardsMap.push({name: 'BALAUR White Legendary', price: 1.158, image: 'desktops/BALAUR White Legendary.jpg'});
desktopsCardsMap.push({name: 'DRAGON Legendary Pro', price: 254, image: 'desktops/DRAGON Legendary Pro.jpg'});
desktopsCardsMap.push({name: 'ZMEU Max', price: 85, image: 'desktops/ZMEU Max.jpg'});

let desktopsStorage = localStorage.getItem('desktops');

if (desktopsStorage) {
    localStorage.setItem('desktops', desktopsStorage);
} else {
    localStorage.setItem('desktops', JSON.stringify(desktopsCardsMap));
}

let desktopsCards = document.getElementById('desktops-cards');
let desktopsRight = document.getElementById('desktops-right');
let desktopsLeft = document.getElementById('desktops-left');

createCarousel('desktops', desktopsCards, desktopsRight, desktopsLeft);

// Monitors



let monitorsCardsMap = [];

monitorsCardsMap.push({name: 'LED Alienware Gaming', price: 1419, image: 'monitors/LED Alienware Gaming.jpg'});
monitorsCardsMap.push({name: 'LED DELL Gaming', price: 839, image: 'monitors/LED DELL Gaming.jpg'});
monitorsCardsMap.push({name: 'LED DELL', price: 500, image: 'monitors/LED DELL.jpg'});
monitorsCardsMap.push({name: 'LED GIGABYTE Gaming', price: 819, image: 'monitors/LED GIGABYTE Gaming.jpg'});
monitorsCardsMap.push({name: 'LED Lenovo', price: 735, image: 'monitors/LED Lenovo.jpg'});

let monitorsStorage = localStorage.getItem('monitors');

if (monitorsStorage) {
    localStorage.setItem('monitors', monitorsStorage);
} else {
    localStorage.setItem('monitors', JSON.stringify(monitorsCardsMap));
}

let monitorsCards = document.getElementById('monitors-cards');
let monitorsRight = document.getElementById('monitors-right');
let monitorsLeft = document.getElementById('monitors-left');

createCarousel('monitors', monitorsCards, monitorsRight, monitorsLeft);



// Chairs



let chairsCardsMap = [];

chairsCardsMap.push({name: 'Arozzi Inizio PU Black', price: 862, image: 'chairs/Arozzi Inizio PU Black.jpg'});
chairsCardsMap.push({name: 'Marvo CH-303 Textil', price: 549, image: 'chairs/Marvo CH-303 Textil.jpg'});
chairsCardsMap.push({name: 'Noblechairs EPIC negru', price: 675, image: 'chairs/Noblechairs EPIC negru.png'});
chairsCardsMap.push({name: 'Serioux Torin TXT Red', price: 871, image: 'chairs/Serioux Torin TXT Red.jpg'});
chairsCardsMap.push({name: 'Serioux Torin Yellow', price: 439, image: 'chairs/Serioux Torin Yellow.jpg'});

let chairsStorage = localStorage.getItem('chairs');

if (chairsStorage) {
    localStorage.setItem('chairs', chairsStorage);
} else {
    localStorage.setItem('chairs', JSON.stringify(chairsCardsMap));
}

let chairsCards = document.getElementById('chairs-cards');
let chairsRight = document.getElementById('chairs-right');
let chairsLeft = document.getElementById('chairs-left');

createCarousel('chairs', chairsCards, chairsRight, chairsLeft);



// Mice



let miceCardsMap = [];

miceCardsMap.push({name: 'Corsair Scimitar Elite', price: 100, image: 'mice/Corsair Scimitar Elite.png'});
miceCardsMap.push({name: 'Logitech G102 Lightsync', price: 254, image: 'mice/Logitech G102 Lightsync.jpg'});
miceCardsMap.push({name: 'Razer Viper V2 Pro Black', price: 89, image: 'mice/Razer Viper V2 Pro Black.jpg'});
miceCardsMap.push({name: 'SteelSeries Rival 3', price: 99, image: 'mice/SteelSeries Rival 3.jpg'});
miceCardsMap.push({name: 'SteelSeries Rival 5', price: 549, image: 'mice/SteelSeries Rival 5.jpg'});

let miceStorage = localStorage.getItem('mice');

if (miceStorage) {
    localStorage.setItem('mice', miceStorage);
} else {
    localStorage.setItem('mice', JSON.stringify(miceCardsMap));
}

let miceCards = document.getElementById('mice-cards');
let miceRight = document.getElementById('mice-right');
let miceLeft = document.getElementById('mice-left');

createCarousel('mice', miceCards, miceRight, miceLeft);



// Headphones



let headphonesCardsMap = [];

headphonesCardsMap.push({name: 'Corsair HS80 Carbon', price: 85, image: 'headphones/Corsair HS80 Carbon.jpg'});
headphonesCardsMap.push({name: 'Havit HV-H2232d', price: 135, image: 'headphones/Havit HV-H2232d.jpg'});
headphonesCardsMap.push({name: 'Logitech G733 Lightspeed', price: 149, image: 'headphones/Logitech G733 Lightspeed.jpg'});
headphonesCardsMap.push({name: 'Logitech PRO X', price: 799, image: 'headphones/Logitech PRO X.jpg'});
headphonesCardsMap.push({name: 'Razer Blackshark V2 Pro', price: 649, image: 'headphones/Razer Blackshark V2 Pro.jpg'});

let headphonesStorage = localStorage.getItem('headphones');

if (headphonesStorage) {
    localStorage.setItem('headphones', headphonesStorage);
} else {
    localStorage.setItem('headphones', JSON.stringify(headphonesCardsMap));
}

let headphonesCards = document.getElementById('headphones-cards');
let headphonesRight = document.getElementById('headphones-right');
let headphonesLeft = document.getElementById('headphones-left');

createCarousel('headphones', headphonesCards, headphonesRight, headphonesLeft);



// Container   Log In / Sign In 

let logBtn = document.getElementById('logbtn');
let log = document.getElementById('login-signin');
let loginBtn = document.getElementById('loginbtn');
let signinBtn = document.getElementById('signinbtn');
let loginInterface = document.getElementById('login');
let signinInterface = document.getElementById('signin');
let logContainer = document.getElementById('logcontainer');
let exitBtn = document.getElementById('exitbtn');

logBtn.addEventListener('click', () => {
    log.classList.toggle('hidden');
    logContainer.style.display = 'flex';
})

loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = '#4e9f78';
    loginBtn.style.color = '#fff';

    signinBtn.style.backgroundColor = '#fff';
    signinBtn.style.color = '#4e9f78';
    
    loginInterface.classList = 'visible';
    signinInterface.classList = 'hidden';
})

signinBtn.addEventListener('click', () => {
    signinBtn.style.backgroundColor = '#4e9f78';
    signinBtn.style.color = '#fff';

    loginBtn.style.backgroundColor = '#fff';
    loginBtn.style.color = '#4e9f78';

    loginInterface.classList = 'hidden';
    signinInterface.classList = 'visible';
})

exitBtn.addEventListener('click', () => {
    logContainer.style.display = 'none';
    log.classList.toggle('hidden');
})


// Log In / Sign In
let logInRegisterBtn = document.getElementById('login-register');
let signInRegisterBtn = document.getElementById('signin-register');

let admin = {username: 'admin', password: '1234'};
localStorage.setItem('admin', JSON.stringify(admin));



const register = () => {
    let username = document.getElementById('username-signin').value;
    let password = document.getElementById('password-signin').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let existingUser = users.find(u => u.username === username && u.password === password);

    if (existingUser) {
        alert('Account allready exists!');
    } else {
        let newUser = {username: username, password: password};
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    }
}

signInRegisterBtn.addEventListener('click', register);

const logIn = () => {
    let username = document.getElementById('username-login').value;
    let password = document.getElementById('password-login').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let existingUser = users.find(u => u.username === username && u.password === password);

    if (existingUser) {
        alert('Login successful');
    } else {
        let adminLog = JSON.parse(localStorage.getItem('admin')) || {};

        if (adminLog.username === username && adminLog.password === password) {
            window.location = 'http://127.0.0.1:5500/crud.html';
        } else {
            alert('Login failed');
        }
    }
}

logInRegisterBtn.addEventListener('click', logIn);