import Poster from "./Poster";
import Slider from "./Slider";
import poster1 from "../assets/images/poster/poster-1.jpg";
import poster2 from "../assets/images/poster/poster-2.jpg";

const posters = [
  {
    img: poster1,
    name: "ipad pro",
    title: "top offer",
    text: "128GB",
    desc: "Discount 20% on products",
  },
  {
    img: poster2,
    name: "Sport Edition",
    title: "Gamepad",
    text: "2022",
    desc: "Best choice of the year",
  },
];

const Banner = () => {
  return (
    <div className="w-100 mx-[6rem] flex flex-col pb-[60px] pt-[30px]">
      <div className="flex items-center justify-center gap-1 text-center">
        <Slider />
        <div className="flex h-[375px] w-1/3 flex-col gap-[5px]">
          {posters.map((item, index) => {
            return (
              <div key={index}>
                <Poster {...item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>2</div>
    </div>
  );
};
export default Banner;
