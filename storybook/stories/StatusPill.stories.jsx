import StatusPill from "../../src/components/StatusPill/StatusPill";

const meta = {
  title: "Presentation/StatusPill",
  component: StatusPill,

  tags: ["autodocs"],

  argTypes: {
    color: {
      control: "color",
    },

    background: {
      control: "color",
    },

    textColor: {
      control: "color",
    },
  },

  args: {
    label: "Connected",
    color: "#22c55e",
    background: "#dcfce7",
    textColor: "#166534",
  },
};

export default meta;

export const Connected = {};

export const Reconnecting = {
  args: {
    label: "Reconnecting",
    color: "#f59e0b",
    background: "#fef3c7",
    textColor: "#92400e",
  },
};

export const Offline = {
  args: {
    label: "Offline",
    color: "#64748b",
    background: "#e2e8f0",
    textColor: "#334155",
  },
};
