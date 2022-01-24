import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    const url = "https://yts.mx/api/v2/movie_details.json?movie_id=" + id;
    const getData = async () => {
        const res = await (await fetch(url)).json();
        setMovie(res.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            {loading ?
                <h1>Loading details</h1>
                :
                <div>
                    <h1>{movie.title_long}</h1>
                    <img src={movie.medium_cover_image} />
                    <h3>평점</h3><p>{movie.rating}</p>
                    <h3>상영시간</h3>
                    <p>{movie.runtime}</p>
                    <a href={movie.url}>more info(Click!)</a>
                    <hr />
                    <p>{movie.description_intro}</p>
                </div>
            }
        </div>);
}
export default Detail;