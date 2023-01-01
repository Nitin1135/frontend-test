import React from "react";
import { Row, Container, Table, Badge } from "react-bootstrap";

function MovieProperties() {
    return (
        <div className="section-space pb-0">
            <Container>
                <Row>
                    <div className="movie-properties-section d-flex justify-content-between align-itemscenter">
                        <div className="movie-properties-title">
                            <h4>Movie Properties</h4>
                            <span>A list of the details for this movie</span>
                        </div>
                        <div className="tranding-title">
                            <a href="#"> <img src="../assets/images/Vector/tranding.png" alt="tranding" /> Trending</a>
                        </div>
                    </div>

                    <div className="section-space">
                        <div className="p-0 properties-table ">
                            <Table className="w-100 mb-0">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Streams</th>
                                        <th>Watchlists</th>
                                        <th>Owner</th>
                                        <th>Release Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Badge className="table-badge">
                                            Action
                                        </Badge>
                                            <Badge className="table-badge">
                                                thriller
                                            </Badge>
                                        </td>
                                        <td>24,512,232</td>
                                        <td>389,234</td>
                                        <td>Sony Entertainment</td>
                                        <td>21th May, 2022</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="movie-properties-section d-flex justify-content-between align-itemscenter">
                        <div className="movie-properties-title">
                            <h4>Interest Tracking Insights</h4>
                            <span>Keep track of the insights on this movie</span>
                        </div>
                    </div>

                    <div className="section-space">
                        <div className="p-0 properties-table ">
                            <Table className="w-100 mb-0">
                                <thead>
                                    <tr>
                                        <th>People Reached</th>
                                        <th>Content Interactions</th>
                                        <th>Impressions</th>
                                        <th>Shares</th>
                                        <th>Likes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>39,823,154</td>
                                        <td>76,923,304</td>
                                        <td>101,783,945</td>
                                        <td>14,895</td>
                                        <td>34,056,147</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default MovieProperties;