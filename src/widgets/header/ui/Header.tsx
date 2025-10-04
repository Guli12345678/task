import { memo } from "react";
import { Link } from "react-router-dom";
export const Header = memo(() => {
  return (
    <header className="bg-[black] text-[#A1A1A1]">
      <div className="container flex justify-between items-center ">
        <ul className="fixed bottom-0 left-0 w-full bg-black z-[100] flex gap-10 items-center justify-evenly md:justify-center md:static">
          <li className="">
            <Link
              className="flex flex-col text-center  items-center justify-center"
              to={"/"}
            >
              HOME
            </Link>
          </li>
        </ul>

        <div>
          <button className="w-[180px] h-[56px] rounded-[12px] text-white bg-[#C61F1F]">
            Войти
          </button>
        </div>
      </div>
    </header>
  );
});
