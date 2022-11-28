import React, { Component } from "react";
import Chart from "react-apexcharts";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateCharts = this.updateCharts.bind(this);

    this.state = {
      optionsMixedChart: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "100%"
          }
        },
        stroke: {
          width: [4, 0, 0]
        },
        xaxis: {
          categories: ["W14", "W15", "W16", "W17", "W18", "W19", "W20", "W21","W22","W23","W24","W25","W26","W27","W28","W29","W30","W31","W32","W33","W34","W35","W36","W37","W38"]
        },
        markers: {
          size: 6,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8
          }
        },
        yaxis: {
          tickAmount: 8,
          min: -1000,
          max: 7000 
        }
      },
      seriesMixedChart: [
        {
          name: "Sum of Net Subscribers Gained",
          type: "line",
         
          data: [168, 441, 361, 2227, 2456, 5325, 5441, 4180,1669,498,200,401,3016,2021,901,654,957,768,862,1111,847,844,994,817,875]
        },

     
        {
          name: "Sum of report.subscribersGained",
          type: "column",
          data: [168, 441, 361, 2350, 2656, 5500, 5841, 4580,1969,590,270,465,3216,2421,950,684,1057,868,901,1350,970,1050,1150,950,915]
        },
        {
          name: "Sum of report.subscribersLost",
          type: "column",
          data: [0,-50,-25, -100, -150, -275, -350, -305,-260,-125,-50,-100,-240,-140,-85,-80,-83,-80,-110,-83,-120,-110,-100,-60,-90]
        }
      ],
      optionsRadial: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -20,
                show: true,
                color: "#888",
                fontSize: "23px"
              },
              value: {
                formatter: function (val) {
                  return val;
                },
                color: "#111",
                fontSize: "30px",
                show: true
              }
            }
          }
        },
        fill: {
          color:['#16ff16'],
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#191c18"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Percent"]
      },
      seriesRadial: [76],
      optionsBar: {
        chart: {
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 0
        },
        xaxis: {
          categories: ["Fav Color"],
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          color:['#16ff16'],
          opacity: 1,
          type: "gradient",
          gradient: {
            shade: "faint",
            type: "vertical",
            shadeIntensity: 0.35,
            gradientToColors: undefined,
            inverseColors: false,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [90, 0, 100]
          }
        },

        legend: {
          position: "bottom",
          horizontalAlign: "right"
        }
      },
      
    };
  }

  updateCharts() {
    const max = 7000;
    const min = -1000;
    const newMixedSeries = [];
    const newBarSeries = [];

    this.state.seriesMixedChart.forEach((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      newMixedSeries.push({ data: data, type: s.type });
    });

    this.state.seriesBar.forEach((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (180 - min + 1)) + min;
      });
      newBarSeries.push({ data, name: s.name });
    });

    this.setState({
      seriesMixedChart: newMixedSeries,
      seriesBar: newBarSeries,
      seriesRadial: [Math.floor(Math.random() * (90 - 50 + 1)) + 50]
    });
  }

  render() {
    return (
      <div className="app">
         <div className="graph">
        <h1>Weekly Subscribers Gain and Loss</h1>
        <div className="content">
        <h4>Takeaway: Majority of Subscribers are gained in spike (Viral) events that mostly occured in Apr-Jun'22</h4>
        </div>
            <Chart 
              options={this.state.optionsMixedChart}
              series={this.state.seriesMixedChart}
              type="line"
              width="90%"
            />
        

          </div>
      </div>
    );
  }
}

export default App;
