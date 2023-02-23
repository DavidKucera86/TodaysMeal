import axios from "axios";
import { useQuery } from "react-query";


const fetchMeals = () => axios
.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=American")
.then(response => response.data.meals)

export default function useMeals() {
    axios.defaults.baseURL=""
    return useQuery("meals", fetchMeals) // unique key for manage cache
}