import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTlkNTFmNGRlOTEzMGY4ZTY1MGU4NGMwODFlMmM5YSIsInN1YiI6IjY1MDYxMTBmNWFhZGM0MDEwMWI5Njc2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZXVXiRYNuEP7UzAp3ZeT4XNB9uKwWOprH6GKrpN6oAM";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}