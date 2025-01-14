import React, { memo } from "react";
import Rate from "../Rate/Rate";
import { ProductCardPropsType } from "./productCard.type";

const ProductCard: React.FC<ProductCardPropsType> = ({
  price,
  rating,
  title,
  description,
}) => {
  return (
      <article className="px-2 shadow-lg hover:bg-slate-50 cursor-pointer flex flex-col">
      <header>
        <h3 className="text-center font-semibold">{title}</h3>
      </header>
        <div className="py-2 max-h-30 overflow-auto flex-grow">
        <p className="text-gray-600 text-justify">{description}</p>
      </div>
      <hr />
      <footer className="flex justify-between items-center py-2">
        <div className="text-gray-600">${price}</div>
        <div>
          <Rate rate={rating} />
        </div>
      </footer>
    </article>
  );
};

export default memo(ProductCard);
