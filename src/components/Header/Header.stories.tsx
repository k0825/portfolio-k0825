import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Header } from "./Header";

export default { component: Header } as ComponentMeta<typeof Header>;

export const Default: ComponentStoryObj<typeof Header> = {
  args: {
    title: "デフォルト",
  },
};
