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
        `https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D${lat}%26lng%3D${lng}%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING`
        
    );

    const data = await respone.json();
    
    return data?.data?.cards[1].card.card.gridElements?.infoWithStyle?.restaurants || [];
}

export async function getRestrauntInfoAPI(id){
    const data = await fetch(
        // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${savelat}&lng=${savelang}&restaurantId=` +
        // id +
        // `&catalog_qa=undefined&submitAction=ENTER`
        `https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D${savelat}%26lng%3D${savelang}%26restaurantId%3D`+id+`%26catalog_qa%3Dundefined%26submitAction%3DENTER`
    );
    return data.json() ;
}

export async function getLatLong(city){
    
    
    const data = await fetch(`https://api.geoapify.com/v1/geocode/search?city=${city}&country=India&apiKey=${GEOLOCATION_API}`);
    return data.json();

}