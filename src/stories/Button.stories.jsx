import React from "react";

import { Button } from "./../components/Button/Button";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/Button",
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "iphone6",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "15px" }}>
        <Story />
      </div>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   label: {
  //     name: "label",
  //     type: { name: "string", required: true },
  //     defaultValue: "Hello",
  //     description: "overwritten description",
  //     table: {
  //       type: {
  //         summary: "something short",
  //         detail: "something really really long",
  //       },
  //       defaultValue: { summary: "Hello" },
  //     },
  //     control: {
  //       type: null,
  //     },
  //   },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

// Mỗi story xử dụng lại Template (.bind({}) tạo 1 bản sao Template)
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
