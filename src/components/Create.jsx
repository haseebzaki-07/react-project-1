import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Create = () => {
  const [products, setproducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Please fill all the fields with atleast four characters");
      return;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    console.log(product);
  };
  return (
    <form
      onSubmit={addProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen  "
    >
      <h1 className="text-3xl">Add New Products </h1>
      <input
        type="url "
        placeholder="image link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mt-5"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text "
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mt-5"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text "
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mt-5"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type=" number "
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mt-5"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        rows="10"
        className="w-1/2 h-1/3 bg-zinc-100 mt-5 text-1xl p-3"
        placeholder="enter product description here..."
      ></textarea>

      <button className="py-2 px-5 rounded-md border border-sky-400 text-blue-400 mt-5">
        Add New Product
      </button>
    </form>
  );
};

export default Create;
