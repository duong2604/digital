import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { MdOutlineCrisisAlert } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="min-w-screen text-[14px]">
      <div className="border-b-1 flex h-10 items-center justify-between border  px-[6rem] py-4   ">
        <span>You are a student and students get 20% discount.</span>
        <div className="flex items-center justify-center gap-[20px]">
          <span>Store Locator</span>
          <span>Order Tracking</span>
          <span>FAQs</span>
          <RxDividerVertical />
          <div className="flex items-center justify-center gap-1">
            <img
              className="h-3 w-4"
              src="https://demo-uminex.myshopify.com/cdn/shop/t/6/assets/flag_en.png?v=14076981825125011091681891950"
              alt=""
            />
            <span> English</span>
            <button>
              <RiArrowDropDownLine size={"1.5rem"} />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <span> United States(USD $)</span>{" "}
            <button>
              <RiArrowDropDownLine size={"1.5rem"} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-1 flex h-[85px] items-center justify-between border px-[6rem] ">
        <a href="">
          <img
            className=" w-[145px]"
            src="https://demo-uminex.myshopify.com/cdn/shop/files/Logo_fb7c7c58-1b8f-455e-8b97-56d607743b37_145x@2x.png?v=1679893103"
            alt=""
          />
        </a>
        <div className="flex  items-center justify-center font-semibold">
          <div className="flex h-[46px] items-center justify-center rounded-md border-2 text-center">
            <div className="flex w-[210px] items-center justify-between">
              <span className="ml-2 mr-8">All Categories</span>
              <button className="text-2xl">
                <RiArrowDropDownLine />
              </button>
              <RxDividerVertical size={`1.5rem`} />
            </div>
            <input
              type="text"
              placeholder="Search for products..."
              className="focus: w-[430px] font-normal outline-none"
            />
          </div>
          <button className="ml-[-2px] h-[46px] w-[100px] rounded-br-lg rounded-tr-lg bg-[#2b38d1] text-lg text-white hover:bg-[#212529]">
            Search
          </button>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center">
            <button>
              <CiUser size={`2.5rem`} />
            </button>
            <div>
              <span className="font-light">Login </span>
              <p className="font-bold">Account</p>
            </div>
          </div>
          <button className="relative">
            <CiHeart size={`2.5rem`} />
            <span className="absolute right-0 top-0 inline-flex h-[18px] w-[18px] items-center  justify-center rounded-full bg-[#dd3842] leading-3 text-white">
              0
            </span>
          </button>
          <button>
            <div className="relative">
              <CiShoppingCart size={`2.5rem`} />
              <span className="absolute right-0 top-0 inline-flex h-[18px] w-[18px] items-center  justify-center rounded-full bg-[#dd3842] leading-3 text-white">
                0
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="border-b-1 flex h-[48px] items-center justify-between border px-[6rem] font-semibold">
        <button className="flex items-center justify-center gap-2">
          <IoMenu size={`1.8rem`} />
          <span> Browse All Categories</span>
        </button>
        <div className="flex gap-8 ">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Products</a>
          <a href="">Pages</a>
          <a href="">Blog</a>
          <a href="">Contact us</a>
          <a className="text-[#dd3842]" href="">
            Buy Uminex!
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <MdOutlineCrisisAlert size={`1.8rem`} />
          <span>Sale $20 Off Your First Order.</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
