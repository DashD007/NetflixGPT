// import openai from "../utils/openAI";
import model from "../utils/GeminiAI";
// import { useDispatch } from "react-redux";
// import { addGPTRecommendedMovies } from "../utils/movieSlice";
const RecommendedMovies = async (searchText) => {
    // const dispatch = useDispatch();
    const prompt = "act as a movie recommendation system and suggest me name of 5 movies names which are "+searchText+"and arrange them in a comma seprated like the example result, Example result: Koi mil gaya, gadar, pagalpanti, aashqiue, shaitaan";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
}

export default RecommendedMovies;