import axios from "axios";
import { useQuery } from "react-query";


const fetchMeal = (url) => axios
.get(url)
.then(response => response.data.meals)

export default function useMeal() {
    axios.defaults.baseURL=''
    return useQuery("meal", fetchMeal) // unique key for manage cache
}
