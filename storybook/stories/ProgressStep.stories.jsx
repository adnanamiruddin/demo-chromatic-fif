import ProgressStep from "../../src/components/ProgressStep/ProgressStep";

const meta = {
  title: "Presentation/ProgressStep",
  component: ProgressStep,

  tags: ["autodocs"],

  argTypes: {
    activeColor: {
      control: "color",
    },

    inactiveColor: {
      control: "color",
    },
  },

  args: {
    title: "SLIK",
    active: true,
    completed: false,
    activeColor: "#22c55e",
    inactiveColor: "#cbd5e1",
  },
};

export default meta;

export const Active = {};

export const Completed = {
  args: {
    title: "Dukcapil",
    completed: true,
  },
};

export const Inactive = {
  args: {
    title: "Committee",
    active: false,
    completed: false,
  },
};
