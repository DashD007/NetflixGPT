import useMovieClips from "../utils/useMovieClips"
import {useSelector} from "react-redux";
import {useState} from "react"
const VideoBackground = ({id}) => {
    const [IsMute, setIsMute] = useState(0);
    useMovieClips(id);
    const movieClips = useSelector((store) => store.movies?.MovieClips);
    if(!movieClips) return ;
    const trailers = movieClips.filter(clip => clip.type === "Trailer");
    const trailer = trailers.length === 0 ? movieClips[0] : trailers[0];
    const src = "https://www.youtube.com/embed/"+trailer.key+"?autoplay=1&controls=0&mute="+IsMute+"&loop=1&playlist="+trailer.key
    return (
        <div className="min-w-[1250px]">
            <iframe className=" w-[100%] aspect-video -z-10 cursor-not-allowed" src={src} title="YouTube video player" allow="accelerometer; autoplay;  encrypted-media;web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <button onClick={()=>IsMute ? setIsMute(0) : setIsMute(1)} className="text-black  rounded-full w-10 h-10 border-2 border-white top-[75vh] right-[20vw] z-30 absolute">🔇</button>
        </div>
    )
}

export default VideoBackground