import React from "react";

import { ProductFilterItem } from "./ProductFilterItem/productFilterItem";

export const ProductFilter = ({ fakeData, onApplyFilter }) => {
  const handleFilterItemClick = () => {
    console.log("handleFilterItemClick");
  };

  const handleReset = () => {
    console.log("handleFormReset");
  };

  return (
    <div>
      {fakeData.length > 0 &&
        fakeData.map((item, index) => {
          return (
            <ProductFilterItem
              handleOnClick={handleFilterItemClick}
              typeItem={item.type}
              item={item}
              key={index}
            />
          );
        })}

      <div>
        <button
          name="reset"
          type="button"
          className="reset"
          onClick={handleReset}
        >
          Reset All
        </button>

        <button
          name="commit"
          type="button"
          className="apply-filter"
          onClick={onApplyFilter}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};
