import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut as DoughnutChart } from "react-chartjs-2";
import Data from "../../API/data.json"
import Class from "./Doughnut.module.scss";
ChartJS.register(ArcElement, Tooltip);



const Doughnut= () => {

    const [chartData, setChartData] = useState(Data);
    const [budgets, setBudgets] = useState(chartData.budgets);


    const data = {
        labels: budgets.map(({category}) => category),
        datasets:[
            {
                label: "Budget",
                data: budgets.map(({maximum}) => maximum),
                backgroundColor: budgets.map(({theme})=>theme),
                cutout:'65%'
            },
        ],
    }

  return (
    <div className={Class.chart__Container}>
        <DoughnutChart  data={data} />
    </div>  
  );
};

export default Doughnut;
