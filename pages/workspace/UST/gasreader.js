import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

export default function Home({ gasData }) {
    let [gasType, setGasType] = React.useState('SO2 (ppm)')
    let [search, setSearch] = React.useState([])

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
    const getDangerLevels = (dangerlevel, gas) => {
        let days = [];
        gasData.map((data) => {
            if (parseFloat(data[gas]) >= dangerlevel) {
                days.push([data.Time, parseFloat(data[gas])])
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
    const filterData = (wantedDate, data) => {

    }
    return (
        <main>
            <h1>GasReader</h1>
            <div>
                {gasData.map((data) => {
                    <div>
                        <p></p>
                    </div>
                })}
                {/* <XYPlot
                    width={300}
                    height={300}>
                    <HorizontalGridLines />
                    <LineSeries
                        data={[
                            {x: 1, y: 10},
                            {x: 2, y: 5},
                            {x: 3, y: 15}
                          ]}/>
                    <XAxis />
                    <YAxis />
                </XYPlot> */}
            </div>
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
                    {search.map((gas) => {
                        return (
                            <p><b>{gas[0]}</b>: {gas[1]}</p>
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