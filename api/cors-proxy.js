// api/cors-proxy.js
export default async function handler(req, res) {
    const { lat, lng, id } = req.query;
  
    let apiUrl;
  
    if (id) {
      apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
    } else {
      apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
    }
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  