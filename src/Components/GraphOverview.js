import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Row, Dropdown } from "react-bootstrap"
import Container from 'react-bootstrap/Container';

function GraphOverview() {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar123"
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June", "July", "August", "October", "November", "December"]
            }
        },
        series: [
            {
                name: "Month",
                data: [125, 250, 125, 250, 125, 250, 125, 250, 125, 250, 125]
            },

        ]
    })
    return (
        <div className="graph-overview-section section-space pb-0">
            <Container>
                <Row>
                    <div className="col-lg-4 col-md-5 col-sm-6">
                        <div className="movie-banner">
                            <img className="w-100" src="../assets/images/Banners/Movie Image.png" alt="movie banner" />
                        </div>
                    </div>
                    <div className="area-chart-block col-lg-8 col-md-7 col-sm-6">
                        <div className='chart-block'>
                            <div className="movie-properties-section d-flex justify-content-between align-itemscenter">
                                <div className="movie-properties-title">
                                    <h4>Average watch time</h4>
                                    <span>This tracks the average watch by users every month</span>
                                </div>
                                <div className="tranding-title area-chart">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <img src="../assets/images/Vector/menu.png" alt="tranding" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="area"
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}


export default GraphOverview;