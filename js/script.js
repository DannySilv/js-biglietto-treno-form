const formBtn = document.getElementById("form-btn");
console.log(formBtn);

formBtn.addEventListener("click", function() {

    // DATI RICHIESTI
    const userName = document.getElementById("user-name").value;
    console.log(userName);

    const busRideKm = document.getElementById("bus-ride-km").value;
    console.log(busRideKm);

    const userAge = document.getElementById("user-age").value;
    console.log(userAge);

    // DATI INSERITI
    
    let couch = Math.floor(Math.random() * 10 + 1);
    console.log(couch);

    let cpCode = Math.floor(Math.random() * (9999 + 1));
    console.log(cpCode);
    
    let ticketPrice = busRideKm * 0.21;
    console.log(ticketPrice);

    // ELABORAZIONE DATI
    let userOffer;

    let finalTicketPrice;

    if (userAge == "under-18") {
        finalTicketPrice = ticketPrice - ((ticketPrice * 20) / 100);
        userOffer = `Biglietto Under-18`;
    } else if (userAge == "over-65") {
        finalTicketPrice = ticketPrice - ((ticketPrice * 40) / 100);
        userOffer = `Biglietto Over-65`;
    } else if (userAge == "over-18") {
        finalTicketPrice = ticketPrice;
        userOffer = `Biglietto Standard`;
    }
    // OUTPUT
    document.getElementById("passenger-name").innerHTML = userName;

    document.getElementById("offer").innerHTML = userOffer;

    document.getElementById("couch").innerHTML = couch;

    document.getElementById("cp-code").innerHTML = `9${cpCode}`;

    document.getElementById("final-ticket-price").innerHTML = finalTicketPrice.toFixed(2);

    const ticketContainer = document.querySelector(".ticket-container");
    ticketContainer.classList.remove("d-none");
    }
);

const backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", function() {
        
    const ticketContainer = document.querySelector(".ticket-container");
    ticketContainer.classList.add("d-none");

    const userName = document.getElementById("user-name");
    userName.value = "";

    const busRideKm = document.getElementById("bus-ride-km");
    busRideKm.value = "";

    const userAge = document.getElementById("user-age");
    userAge.value = "";
    }
);
    