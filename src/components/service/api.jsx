import axios from "axios";

const fetchData = async(pageNo, numOfRows) => {
    try{
        const URL = "http://apis.data.go.kr/6260000/FestivalService/getFestivalKr";
        const response = await axios.get(URL, {
            params: {
                serviceKey : decodeURIComponent(import.meta.env.VITE_API_KEY),
                numOfRows: numOfRows,  // 한 페이지에 표시할 데이터 수
                pageNo: pageNo,  // 페이지 번호
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