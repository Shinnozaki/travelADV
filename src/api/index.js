import axios from "axios";



export const getPlacesData = async (type, sw, ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                bl_latitude: sw.lat,
              },
              headers: {
                'X-RapidAPI-Key': 'a4ac52870fmsh26d40c6505ca4fcp1011c4jsna65841b55fa8',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        })
        return data;
    }
    catch(error) {
        console.log(error)
    }
}



