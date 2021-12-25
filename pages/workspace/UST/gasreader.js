import React from 'react'
import { TimeSeries, Index, TimeRange } from "pondjs";
import {
    Resizable,
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    BarChart,
    styler
  } from "react-timeseries-charts";
  import moment from 'moment';

export default function Home({ gasData }) {
    let [gasType, setGasType] = React.useState('SO2 (ppm)')
    let [search, setSearch] = React.useState([gasData])

    const displayDay = async (e) => {
        const test = e.target.value;
        setSearch(changeDay(test))
    }

    const changeDay = async (test) => {
        let day = [];
        gasData.map((data) => {
            if (data.Time === test) {
                days.push([data.Time, parseFloat(data[gas])])
            }
        })
        if (day.length <= 0) {
            return null
        }
        return day
    }

    const changeGasType = async (e) => {
        const test = e.target.value;
        setGasType(test)
    }

    const displayDangerLevels = async (e) => {
        if (typeof e == "undefined") {
            return (
                <p>Search</p>
            )
        }
        const test = e.target.value;
        setSearch(getDangerLevels(test, gasType))
    }
    // const getDangerLevels = (dangerlevel, gas) => {
    //     let days = [];
    //     gasData.map((data) => {
    //         // console.log(new Date(data.Time).getTime())
    //         if (parseFloat(data[gas]) >= dangerlevel) {
    //             days.push({time: data.Time, gas: parseFloat(data[gas])})
    //         }
    //     })
    //     return days
    // }
    const getDangerLevels = (dangerlevel, gas) => {
        let days = [];
        gasData.map((data) => {
            if (parseFloat(data[gas]) >= dangerlevel) {
                days.push([new Date(data.Time).toLocaleString(), parseFloat(data[gas])])
            }
        })
        return days
    }
    const sumOfDate = (gas) => {
        let sumer = 0;
        gasData.map((data) => {
            sumer += parseFloat(data[gas])
        })
        return sumer
    }
    const data = {
        name: "opportunities",
        columns: [
          "index",
          "value"
        ],
        // points: [
        //     search.map((gas) => {
        //         gas.time, gas.gas
        //     })
        // ]
        points: [
            search.map((gas) => [
                gas[0].Time,
                gas[1]["SO2 (ppm)"]
            ])
        ]
      }
    
    console.log(data)
      
    const series = new TimeSeries(data)

    console.log(series)
    
    const startDate = moment.utc().subtract(1, 'week')
    const endDate = moment.utc()
    const timeRange = new TimeRange(parseInt(startDate.format('x'), 10), parseInt(endDate.format('x'), 10))
    
    const style = {
        value: {
            normal: {fill: "#A5C8E1"},
            highlighted: {fill: "#bfdff6"},
            selected: {fill: "#5aa2d5"},
            muted: {fill: "#A5C8E1", opacity: 0.4}
        }
    }
    const max = 10
    const maxTimeDate = new Date(moment.utc().add(1, 'day').format("MMM DD, YYYY HH:MM"))
    const minTimeDate = new Date(moment.utc().subtract(1, 'year').format("MMM DD, YYYY HH:MM"))
    const minDurationSeconds = 600
    
    return (
        <main>
            <h1>GasReader</h1>
            <div>
                <p>Sum: {sumOfDate('SO2 (ppm)')}</p>
                <div>
                    <select onChange={changeGasType}>
                        <option value="Select Gas">Select Gas</option>
                        <option value='SO2 (ppm)'>SO2 (ppm)</option>
                        <option value="CO (ppm)">CO (ppm)</option>
                        <option value="H2S (ppm)">H2S (ppm)</option>
                        <option value="CO2 (%vol)">CO2 (%vol)</option>
                        <option value="O2 (%vol)">O2 (%vol)</option>
                    </select>
                    {/* <p>Input for date: <input type="Date" onChange={displayDay}></input></p> */}
                    <p>Input for gases: <input type="number" onChange={displayDangerLevels}></input></p>
                    {/* <ChartContainer
                        width={600}
                        utc={false}
                        timeRange={timeRange}
                        format="day"
                        enablePanZoom={true}
                        maxTime={maxTimeDate}
                        minTime={minTimeDate}
                        minDuration={minDurationSeconds * 1000}>
                        <ChartRow height="150">
                            <YAxis
                            id="tot"
                            label="Level of Gases"
                            min={0} max={max}
                            width="60" />
                            <Charts>
                            <BarChart
                                axis="tot"
                                style={style}
                                columns={["value"]}
                                series={series}/>
                            </Charts>
                        </ChartRow>
                    </ChartContainer> */}
                    {search.map((gas) => {
                        return (
                            <p><b>{gas.time}</b>: {gas.gas}</p>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export async function getServerSideProps() {
  const getGas = await require('../../data/gas.json');
  const gasData = getGas.data;
  return {
    props: {
        gasData,
    },
  }
}