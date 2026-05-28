import SidebarButton from "../../src/components/SidebarButton/SidebarButton";

const meta = {
  title: "Presentation/SidebarButton",
  component: SidebarButton,

  tags: ["autodocs"],

  argTypes: {
    background: {
      control: "color",
    },

    activeBackground: {
      control: "color",
    },

    color: {
      control: "color",
    },
  },

  args: {
    label: "Dashboard",
    background: "#172554",
    activeBackground: "#2952ff",
    color: "#ffffff",
    active: false,
  },
};

export default meta;

export const Default = {};

export const Active = {
  args: {
    label: "Loan Tracking",
    active: true,
  },
};
