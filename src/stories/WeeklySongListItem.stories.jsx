import React from "react";
import WeeklySongListItem from "../components/WeeklySongListItem/WeeklySongListItem";

export default {
  title: "Example/WeeklySongListItem",
  component: WeeklySongListItem,
};

const Template = (args) => <WeeklySongListItem {...args} />;

export const Default = Template.bind({});
console.log("Template", Template);

Default.args = {
  order: "01",
  title: "Em Không Thể",
  singer: "Tiên Tiên, Touliver",
  viewCount: 3000,
};

export const Default2 = Template.bind({});

Default2.args = {
  order: "012",
  title: "Em Không Thể",
  singer: "Tiên Tiên, Touliver",
  viewCount: 3000,
};
