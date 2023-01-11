import useSWR from "swr";
import { fetcher } from "../../../config";
import { SwiperSlide, Swiper } from "swiper/react";
import Button from "../../button.js/Button";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=cdfae351f75567739fbe7ec0008bc139`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(movies);

  return (
    <section className="banner h-[500px] page-container mb-10 overflow-clip">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItem({ item }) {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full bg-white rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="object-cover object-top w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white left-5 bottom-5">
        <h2 className="mb-5 text-3xl font-bold">{title}</h2>
        <div className="flex items-center mb-8 gap-x-3">
          <span className="px-4 py-2 border border-white rounded-lg">
            Action
          </span>
          <span className="px-4 py-2 border border-white rounded-lg">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-lg">
            Drama
          </span>
        </div>
        <Button onClick={() => navigate(`/movies/${id}`)}>Watch now</Button>
        {/* <button className="px-6 py-3 font-medium text-white rounded-lg bg-primary">
          Watch Now
        </button> */}
      </div>
    </div>
  );
}
export default Banner;
