const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
//  const ticketPrice = Number(movieSelect.value);
let ticketPrice = +movieSelect.value;

// Check if already some data is available in local storage, pull it if available to update UI
if(localStorage.getItem('selectedMovieIndex') !== null && localStorage.getItem('selectedMovieIndex').length >0 )
{
    populateUI();
}


function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));    
    if (selectedSeats.value !== null && selectedSeats.length > 0) {
        seats.forEach( (seat, index) => {
            if (selectedSeats.indexOf(index) > -1 ) {
                seat.classList.add('selected');
                
            }
            
        })
        
    }
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");    
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
        ticketPrice = +movieSelect.value;
    }
    
}


// Function to update counts
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const countSelectedSeats = selectedSeats.length;
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
    
    localStorage.setItem("selectedSeats",JSON.stringify(seatsIndex));

    count.innerText = countSelectedSeats;
    total.innerText = countSelectedSeats * ticketPrice;

}



// Event Listener on Click on Available Seats 
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})

// function to save seleced movie and its price

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);    
    localStorage.setItem('selectedMoviePrice', moviePrice);    
}

// Event Listener for change on the movie selector
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value; 
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

updateSelectedCount();

