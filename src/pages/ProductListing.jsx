import React from "react";
import { HiOutlineFunnel } from "react-icons/hi2";
import { Wrapper } from "../component/basics/Wrapper";
import { FilterCard } from "../component/basics/FilterCard";
import { ProductCard } from "../component/ProductCard";
import { Navigation } from "../component/basics/Navigation";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/CartSlice";

export const ProductListing = () => {
  const items = [
    {
      id: 1,
      title: "GeeksForGeeks bag",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest.",
      category: "bag",
      img: "./products/product1.png",
    },
    {
      id: 2,
      title: "GeeksForGeeks tshirt",
      price: 22.3,
      description: "Slim-fitting style,black tshirt. From geeksforgeeks",
      category: "men's clothing",
      img: "./products/product1.png",
    },
  ];

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("dispatching add to cart");
    dispatch(addToCart(item));
    return;
  };
  return (
    <>
      <Navigation />
      <div className="flex justify-center">
        <Wrapper>
          <div className="flex gap-10 w-full items-start">
            <aside className="gap-5  hidden md:grid w-[150px] mt-10">
              <div className="flex gap-3 items-center mb-6">
                <HiOutlineFunnel className="h-[23px] w-[23px] text-ascentColor" />
                <h2 className="text-[16px] text-primaryColor font-semibold">
                  Filter
                </h2>
              </div>

              <div className="grid gap-10 border-r-2 border-[#D9D9D9]">
                <FilterCard />
                <FilterCard />
                <FilterCard />
              </div>
            </aside>
            <aside className="grid gap-5 mt-10 w-full ">
              <div className="flex justify-between">
                <Link
                  to={"#"}
                  className="text-[16px] text-primaryColor font-semibold "
                >
                  Mobile Devices
                </Link>
                <Link
                  to={"#"}
                  className="text-[16px] text-primaryColor font-semibold"
                >
                  Audio
                </Link>
                <Link
                  to={"#"}
                  className="text-[16px] text-primaryColor font-semibold"
                >
                  Computing
                </Link>
                <Link
                  to={"#"}
                  className="text-[16px] text-primaryColor font-semibold"
                >
                  Other Accessories
                </Link>
              </div>
              <div class="h-[80vh] overflow-y-scroll">
                <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                  {items.map((item) => (
                    <ProductCard
                      key={item.id}
                      data={item}
                      handleAddToCart={() => {
                        console.log("dispatching add to cart");
                        dispatch(addToCart(item));
                        return;
                      }}
                    />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Wrapper>
      </div>
    </>
  );
};
