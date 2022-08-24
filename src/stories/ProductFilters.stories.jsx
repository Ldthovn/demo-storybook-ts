import React from "react";
import { ProductFilter } from "../components/ProductFilter/index";

export default {
  title: "Component/ECom/ProductFilter",
  component: ProductFilter,
};

const Template = (args) => <ProductFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  fakeData: [
    {
      type: "Type",
      data: [
        { id: 1, name: "Toy" },
        { id: 2, name: "Game" },
        { id: 3, name: "Outdoor" },
      ],
    },
    {
      type: "Age",
      data: [
        { id: 4, name: "3+" },
        { id: 5, name: "8+" },
        { id: 6, name: "12+" },
        { id: 7, name: "16+" },
      ],
    },
    {
      type: "Size",
      data: [
        { id: 8, name: "S" },
        { id: 9, name: "M" },
      ],
    },
  ],
  onApplyFilter: (data) => console.log("data", data),
};
