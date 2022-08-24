import React from "react";
import ProTypes from "prop-types";
import "./productFilterItem.css";

export const ProductFilterItem = ({ typeItem, item, handleOnClick }) => {
  const handleSelection = (item) => handleOnClick(item);
  return (
    <div className="productItemWrapper">
      <div className="title">{typeItem}</div>
      <div className="content">
        {item.data.length > 0 &&
          item.data.map((el) => {
            return (
              <div className="content--item" key={el.id}>
                <input
                  type="checkbox"
                  name={`${item.type}${el.name}`}
                  onClick={() => handleSelection(el)}
                />
                <label htmlFor={`${item.type}${el.name}`}>{el.name}</label>
              </div>
            );
          })}
      </div>
      <div className="btn-rest-type">
        <button>{`Reset ${item.type}`}</button>
      </div>
    </div>
  );
};

ProductFilterItem.ProTypes = {
  typeItem: ProTypes.string.isRequired,
  item: ProTypes.object,
  handleOnClick: ProTypes.func,
};

ProductFilterItem.defaultProps = {
  typeItem: null,
  item: {},
};
