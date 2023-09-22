export interface ChartOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    legend: {
      position: string;
      labels: {
        useBorderRadius: boolean;
        borderRadius: number;
        boxWidth: number;
        boxHeight: number;
      };
    };
    title: {
      display: boolean;
      text: string;
    };
  };
  scales: {
    x: {
      grid: {
        display: boolean;
      };
    };
    y: {
      grid: {
        display: boolean;
      };
      ticks: {
        stepSize: number;
      };
    };
  };
}
