import { Link } from "react-router-dom";
import { IconsHeader } from "../utils/icons";

const Header = () => {
  return (
    <div className="min-w-screen text-[14px]">
      <div className="border-b-1 flex h-10 items-center justify-between border  px-[6rem] py-4   ">
        <span>You are a student and students get 20% discount.</span>
        <div className="flex items-center justify-center gap-[20px]">
          <span>Store Locator</span>
          <span>Order Tracking</span>
          <span>FAQs</span>
          <IconsHeader.dividerVertical />
          <div className="flex items-center justify-center gap-1">
            <img
              className="h-3 w-4"
              src="https://demo-uminex.myshopify.com/cdn/shop/t/6/assets/flag_en.png?v=14076981825125011091681891950"
              alt=""
            />
            <span> English</span>
            <button>
              <IconsHeader.arrowDown size={"1.5rem"} />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <span> United States(USD $)</span>{" "}
            <button>
              <IconsHeader.arrowDown size={"1.5rem"} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-1 flex h-[85px] items-center justify-between border px-[6rem] ">
        <Link to={""}>
          <img
            className=" w-[145px]"
            src="https://demo-uminex.myshopify.com/cdn/shop/files/Logo_fb7c7c58-1b8f-455e-8b97-56d607743b37_145x@2x.png?v=1679893103"
            alt=""
          />
        </Link>
        <div className="flex  items-center justify-center font-semibold">
          <div className="flex h-[46px] items-center justify-center rounded-md border-2 text-center">
            <div className="flex w-[210px] items-center justify-between">
              <span className="ml-2 mr-8">All Categories</span>
              <button className="text-2xl">
                <IconsHeader.arrowDown />
              </button>
              <IconsHeader.dividerVertical size={`1.5rem`} />
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
              <IconsHeader.user size={`2.5rem`} />
            </button>
            <div>
              <span className="font-light">Login </span>
              <p className="font-bold">Account</p>
            </div>
          </div>
          <button className="relative">
            <IconsHeader.heart size={`2.5rem`} />
            <span className="absolute right-0 top-0 inline-flex h-[18px] w-[18px] items-center  justify-center rounded-full bg-[#dd3842] leading-3 text-white">
              0
            </span>
          </button>
          <button>
            <div className="relative">
              <IconsHeader.cart size={`2.5rem`} />
              <span className="absolute right-0 top-0 inline-flex h-[18px] w-[18px] items-center  justify-center rounded-full bg-[#dd3842] leading-3 text-white">
                0
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="border-b-1 flex h-[48px] items-center justify-between border px-[6rem] font-semibold">
        <button className="flex h-full items-center justify-center gap-2  hover:border-t-4 hover:border-t-blue-500 hover:pb-1 hover:transition-all">
          <IconsHeader.menu size={`1.8rem`} />
          <span> Browse All Categories</span>
        </button>
        <div className="flex gap-8 ">
          <Link className="hover:text-red-500 " to={""}>
            Home
          </Link>
          <Link className="hover:text-red-500 hover:underline" to={""}>
            Shop
          </Link>
          <Link className="hover:text-red-500 hover:underline" to={""}>
            Products
          </Link>
          <Link className="hover:text-red-500 hover:underline" to={""}>
            Pages
          </Link>
          <Link className="hover:text-red-500 hover:underline" to={""}>
            Blog
          </Link>
          <Link className="hover:text-red-500 hover:underline" to={""}>
            Contact us
          </Link>
          <Link className="text-[#dd3842]" to={""}>
            Buy Uminex!
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <IconsHeader.discount size={`1.8rem`} />
          <span>Sale $20 Off Your First Order.</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
