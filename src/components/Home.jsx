import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filterProducts, setfilterProducts] = useState();

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilterProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filterProducts || category == "undefined") setfilterProducts(products);
    if (category !== "undefined") getProductCategory();
  }, [category, products]);

  return products ? (
    <>
      <Nav />

      <div className="w-[85%] p-5 flex flex-wrap gap-5 overflow-y-auto ">
        {filterProducts &&
          filterProducts.map((p, i) => {
            return (
              <Link
                key={p.id}
                to={`/details/${p.id}`}
                className="card p-4 mt-20  border shadow rounded-md h-[35vh] w-[20%] flex flex-col justify-center items-center"
              >
                <div
                  className="p-5 w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-105  "
                  style={{
                    backgroundImage: `url(${p.image})`,
                  }}
                ></div>
                <h1 className="mt-5 hover:text-blue-500"> {p.title}</h1>
              </Link>
            );
          })}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
