
/** NYC MTA Bus API key 785f78a4-33ba-44a7-878c-155c67b5276f **/

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhd25ld2Fsc2giLCJhIjoiY2w0aGpuOTJyMDEyNDNrb2Y4b3ViYjU3NCJ9.xmrRnjqEcePXs1kzYSBWyg';

fetch("https://bustime.mta.info/api/where/stops-for-route/MTA%20NYCT_M1.json?key=785f78a4-33ba-44a7-878c-155c67b5276f&includePolylines=false&version=2")
.then(response => {
   return response.json();
})

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [ -73.935242, 40.730610 ],
	zoom: 12
	});
 
var marker = new mapboxgl.Marker()
	.setLngLat([-73.935242, 40.730610])
	.addTo(map);

const busStops = [
	[-71.039729, 42.359244],
	[-71.094915, 42.360175],
	[-71.095800, 42.360698],
	[-71.099558, 42.362953],
	[-71.103476, 42.365248],
	[-71.106067, 42.366806],
	[-71.108717, 42.368355],
	[-71.110799, 42.369191]
];

var counter = 0;
function move() {
	setTimeout(() => {
		if (counter >= busStops.length) return;
		marker.setLngLat(busStops[counter]);
		counter++;
		move();
		}, 1000);
		
		}
