import Card from "../../src/components/Card/Card";

const meta = {
  title: "Presentation/Card",
  component: Card,

  tags: ["autodocs"],

  args: {
    title: "Realtime Tracking",
    subtitle: "Live event stream with websocket state",
  },
};

export default meta;

export const Default = {};

export const DashboardCard = {
  args: {
    title: "Approval Queue",
    subtitle: "15 pending applications",
  },
};
