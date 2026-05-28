import EventItem from "../../src/components/EventItem/EventItem";

const meta = {
  title: "Presentation/EventItem",
  component: EventItem,

  tags: ["autodocs"],

  argTypes: {
    background: {
      control: "color",
    },

    color: {
      control: "color",
    },

    borderColor: {
      control: "color",
    },
  },

  args: {
    time: "10:12:02",
    message: "Dukcapil response received",
    background: "#dcfce7",
    color: "#166534",
    borderColor: "#86efac",
  },
};

export default meta;

export const Success = {};

export const Verification = {
  args: {
    message: "SLIK verification completed",
    background: "#dbeafe",
    color: "#1e3a8a",
    borderColor: "#93c5fd",
  },
};

export const Warning = {
  args: {
    message: "Survey required before approval",
    background: "#fef3c7",
    color: "#92400e",
    borderColor: "#fde68a",
  },
};

export const Review = {
  args: {
    message: "Analyst opened the case",
    background: "#ede9fe",
    color: "#5b21b6",
    borderColor: "#c4b5fd",
  },
};
