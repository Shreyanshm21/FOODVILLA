import { GEOLOCATION_API } from "./contents";

let savelat = 12.9715987;
let savelang =77.5945627;

export async function fetchRestraunt(lat,lng){
    savelat=lat;
    savelang=lng;
    const respone = await fetch(
        // Benglore API
        // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        //Ludhiana
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );

    const data = await respone.json();
    // console.log(data?.data);
    return data?.data?.cards[1].card.card.gridElements?.infoWithStyle?.restaurants || [];
}

export async function getRestrauntInfoAPI(id){
    const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${savelat}&lng=${savelang}&restaurantId=` +
        id +
        `&catalog_qa=undefined&submitAction=ENTER`
    );
    return data.json() ;
}

export async function getLatLong(city){
    // console.log(city);
    
    const data = await fetch(`https://api.geoapify.com/v1/geocode/search?city=${city}&country=India&apiKey=${GEOLOCATION_API}`);
    return data.json();

}