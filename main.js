const root = document.getElementById('root');
const btn = document.querySelector('button')


//Adding EventListener to the button
btn.addEventListener('click', displayInfo);

function displayInfo() {

    // Fetching data from the server using ES6 fetch api
    fetch('https://swapi.co/api/vehicles/4/?format=json')
    .then(response => response.json())
    .then(vehicle => displayVehicle (vehicle))
    .catch(error => {
        document.querySelector('h1').innerHTML = '';
        document.querySelector('button').innerHTML = '';
        root.innerHTML = `<h1 class='error'>OOOPS!!! Something went wrong...</h1>`
    })

    function displayVehicle (vehicle) {
        root.innerHTML =  `
        <ul class='styleUl'>
            <li><strong><i>Vehicle Name:</i></strong> ${vehicle.name}</li>
            <br />
            <li><strong><i>Vehicle Model:</i></strong> ${vehicle.model}</li>
            <br />
            <li><strong><i>Vehicle Manufacturer:</i></strong> ${vehicle.manufacturer}</li>
            <br />
            <li><strong><i>Vehicle Cost in Credits:</i></strong> ${vehicle.cost_in_credits}</li>
            <br />
            <li><strong><i>Vehicle Length:</i></strong> ${vehicle.length}</li>
            <br />
            <li><strong><i>Vehicle Maximum Speed:</i></strong> ${vehicle.max_atmosphering_speed}</li>
            <br />
            <li><strong><i>Vehicle Crew:</i></strong> ${vehicle.crew}</li>
            <br />
            <li><strong><i>Vehicle Passengers:</i></strong> ${vehicle.passengers}</li>
            <br />
            <li><strong><i>Vehicle Cargo Capacity:</i></strong> ${vehicle.cargo_capacity}</li>
            <br />
            <li><strong><i>Vehicle Consumables:</i></strong> ${vehicle.consumables}</li>
            <br />
            <li><strong><i>Vehicle Class:</i></strong> ${vehicle.vehicle_class}</li>
        </ul>
    `;

    btn.parentElement.innerHTML = '';
    }
}

