import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';

import useStore from '@/store/client/store';
import { useGetThread, useGetUser } from '@/store';

const HomeViewModel = () => {
  const { setChartExpand, chartExpand } = useStore();

  const { data: Threads } = useGetThread();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          useBorderRadius: true,
          borderRadius: 5,
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  const filteredData = Threads?.filter((item) =>
    item.createdAt.startsWith('2023'),
  );
  const threadCountByMonth = Array(12).fill(0);
  filteredData?.forEach((item) => {
    const month = new Date(item.createdAt).getMonth();
    threadCountByMonth[month]++;
  });

  const labels = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  const data: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'Thread',
        data: threadCountByMonth,
        backgroundColor: '#5584D2',
      },
    ],
  };

  const threadReport = Threads?.filter((list) => list.accept_status === true);

  const { data: Users } = useGetUser();

  const onlineUsers = Users?.filter(
    (user) => user.online_status && !user.block_status && user.mute_status,
  ).length;

  const totalUsers = Users?.filter((user) => !user.block_status).length;

  return {
    options,
    data,
    chartExpand,
    setChartExpand,
    Threads,
    threadReport,
    onlineUsers,
    totalUsers,
  };
};

export default HomeViewModel;
