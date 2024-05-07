import axios from "axios";

const fetchData = async() => {
    try{
        const URL = "http://apis.data.go.kr/6260000/FestivalService/getFestivalKr";
        const response = await axios.get(URL, {
            params: {
                serviceKey : decodeURIComponent(import.meta.env.VITE_API_KEY),
                numOfRows: 10,
                pageNo: 1,
                resultType : "JSON"
            }
        });
        return response.data;
    }
    catch(error){
        throw error.response.data;
    }
};

export default fetchData;