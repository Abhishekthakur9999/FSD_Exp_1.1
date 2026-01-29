import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function StressChart({ load, capacity }) {
  return (
    <Line
      data={{
        labels: Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`),
        datasets: [
          {
            label: "Workload",
            data: Array(10).fill(load),
            borderColor: "#ff0080",
            tension: 0.4
          },
          {
            label: "Capacity",
            data: Array(10).fill(capacity),
            borderColor: "#00fff0",
            tension: 0.4
          }
        ]
      }}
    />
  );
}
