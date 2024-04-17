import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = () => {
  const [product, setproduct] = useState(null)
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      console.log(data);
      setproduct(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (product ?
    <div className="h-screen w-full  flex justify-center gap-5 items-center">
      <div className=" h-[60vh] w-[25%]  ">
        <img
          className="h-full w-full object-contain"
          src={`${product.image}`}
          alt=""
        />
      </div>
      <div className="h-[50vh] w-[25%] ">
        <h1 className="text-4xl ">
          {product.title}
        </h1>
        <h3 className="text-zinc-400 mt-3">{product.category}</h3>
        <h2 className=" text-red-200 mt-3">{product.price}</h2>
        <p className="mt-3 mb-5">{product.description}</p>
        <Link className="py-2 px-5 mr-5 rounded-md border border-sky-400 text-blue-400 ">
          Edit
        </Link>
        <Link className="py-2 px-5 rounded-md border border-red-400 text-red-400">
          Delete
        </Link>
      </div>
    </div> : <Loading/>
  );
};

export default Details;
