import React from 'react';
// import ReactDOM from 'react-dom';
import { Chart, LineAdvance} from 'bizcharts';

const data = [
	{
		month: "Jan",
		city: "2021",
		temperature: 7
	},
	{
		month: "Jan",
		city: "2022",
		temperature: 3.9
	},
	{
		month: "Feb",
		city: "2021",
		temperature: 13
	},
	{
		month: "Feb",
		city: "2022",
		temperature: 4.2
	},
	{
		month: "Mar",
		city: "2021",
		temperature: 16.5
	},
	{
		month: "Mar",
		city: "2022",
		temperature: 5.7
	},
	{
		month: "Apr",
		city: "2021",
		temperature: 14.5
	},
	{
		month: "Apr",
		city: "2022",
		temperature: 8.5
	},
	{
		month: "May",
		city: "2021",
		temperature: 10
	},
	{
		month: "May",
		city: "2022",
		temperature: 11.9
	},
	{
		month: "Jun",
		city: "2021",
		temperature: 7.5
	},
	{
		month: "Jun",
		city: "2022",
		temperature: 15.2
	},
	{
		month: "Jul",
		city: "2021",
		temperature: 9.2
	},
	{
		month: "Jul",
		city: "2022",
		temperature: 17
	},
	{
		month: "Aug",
		city: "2021",
		temperature: 14.5
	},
	{
		month: "Aug",
		city: "2022",
		temperature: 16.6
	},
	{
		month: "Sep",
		city: "2021",
		temperature: 9.3
	},
	{
		month: "Sep",
		city: "2022",
		temperature: 14.2
	},
	{
		month: "Oct",
		city: "2021",
		temperature: 8.3
	},
	{
		month: "Oct",
		city: "2022",
		temperature: 10.3
	},
	{
		month: "Nov",
		city: "2021",
		temperature: 8.9
	},
	{
		month: "Nov",
		city: "2022",
		temperature: 5.6
	},
	{
		month: "Dec",
		city: "2021",
		temperature: 5.6
	},
	{
		month: "Dec",
		city: "2022",
		temperature: 9.8
	}
];

function Graphchart() {
	return <Chart padding={[10, 20, 50, 40]} autoFit height={300} data={data} >
		<LineAdvance
			shape="smooth"
			point
			area
			position="month*temperature"
			color="city"
		/>
	
	</Chart>
}


export default Graphchart