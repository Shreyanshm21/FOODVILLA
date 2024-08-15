import { GEOLOCATION_API } from "./contents";

let savelat = 12.9715987;
let savelang =77.5945627;

const apiUrl = '/api/cors-proxy';

export async function fetchRestraunt(lat, lng) {
    savelat= lat;
    savelang = lng;
  const response = await fetch(`${apiUrl}?lat=${lat}&lng=${lng}`);
  const data = await response.json();
  return data?.data?.cards[1].card.card.gridElements?.infoWithStyle?.restaurants || [];
}

export async function getRestrauntInfoAPI(id) {
  const response = await fetch(`${apiUrl}?lat=${savelat}&lng=${savelang}&id=${id}`);
  const data = await response.json();
  return data;
}

export async function getLatLong(city){
    // console.log(city);
    
    const data = await fetch(`https://api.geoapify.com/v1/geocode/search?city=${city}&country=India&apiKey=${GEOLOCATION_API}`);
    return data.json();

}