const container =  document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupiedc) ')
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// save selected movie index and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


// update total and count
function updateSelectedcount(e){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    // console.log(selectedSeats)

    // LocalStorage
       // Copy selectec seats into arr
       // Map through arr
       // return a new arr indexes
       const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
       
       localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount =selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//movie click event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedcount();
})

//seat click event
container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedcount();
    }
})