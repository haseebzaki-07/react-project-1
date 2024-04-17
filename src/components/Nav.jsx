import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  console.log(distinct_category);
  distinct_category = [...new Set(distinct_category)];
  console.log(distinct_category);
  return (
    <nav className=" w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="py-2 px-5 rounded-md border border-sky-400 text-blue-400"
        href="/create"
      >
        Add New Products
      </a>

      <hr className="my-3 w-[80%] " />
      <h1 className="text-2xl mb-3 w-auto ">Category Filter</h1>
      <div className="w-[70%] ">
        {distinct_category.map((c, i) => (
          <Link to={`?category=${c}`} className="flex items-center mb-3">
            <span className="rounded-full mr-2  w-[15px] h-[15px] bg-blue-200"></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
