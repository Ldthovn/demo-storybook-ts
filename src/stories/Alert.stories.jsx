import React from "react";
import { Alert } from "../components/Alert";

export default {
  title: "Feedback/Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});

Default.args = {
  message: "Hi, how are you?",
  type: "success",
};
