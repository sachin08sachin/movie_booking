const container =  document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupiedc) ')
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// update total and count
function updateSelectedcount(e){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    // console.log(selectedSeats)
    const selectedSeatsCount =selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//movie click event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedcount();
})

//seat click event
container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedcount();
    }
})