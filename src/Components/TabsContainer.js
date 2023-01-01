import React, { useState } from "react";
import { Row, Container, Table, Badge, Tab, Tabs, Form, Button } from "react-bootstrap";

function TabsContainer() {
    const [key, setKey] = useState('home');
    return (
        <div>
            <Container>
                <Row>
                    <div className="collection-movie-section">

                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="All Movies">
                                <div className="movie-properties-section d-flex justify-content-between align-itemscenter">
                                    <div className="movie-properties-title">
                                        <h4>Collection of all movies</h4>
                                        <span>Keep track of all the movies on moviebox</span>
                                    </div>
                                    <div className="tranding-title">
                                        <Form className="d-flex search-form">
                                            <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                className="form-input"
                                                aria-label="Search"
                                            />
                                            <a className="search-btn" href="#"> <img src="../assets/images/Vector/search.png" alt="search" /></a>
                                        </Form>
                                    </div>
                                </div>
                                <div className="section-space">
                                    <div className="p-0 properties-table ">
                                        <Table className="w-100 mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Name <img src="../assets/images/Vector/down.png" alt="tranding" /></th>
                                                    <th>Category</th>
                                                    <th>Popularity/Interest</th>
                                                    <th>Watchlists</th>
                                                    <th>Streams</th>
                                                    <th>Release Date</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m1.png" alt="search" />
                                                        Avengers Black Widow
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        action
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            blockbuster
                                                        </Badge>
                                                    </td>
                                                    <td><span className="trnding-lista"> <img src="../assets/images/Vector/tranding.png" alt="tranding" /> Trending</span></td>
                                                    <td>590,972,542</td>
                                                    <td>21,452</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m2.png" alt="search" />
                                                        After Hours
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        horror
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            crime
                                                        </Badge>
                                                    </td>
                                                    <td></td>
                                                    <td>88,458,892</td>
                                                    <td>32,892</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m3.png" alt="search" />
                                                        After Hours
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        horror
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            crime
                                                        </Badge>
                                                    </td>
                                                    <td></td>
                                                    <td>22,008,901</td>
                                                    <td>345,321</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m4.png" alt="search" />
                                                        Captain Marvel
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        action
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            fantasy
                                                        </Badge>
                                                    </td>
                                                    <td></td>
                                                    <td>80,961</td>
                                                    <td>80,961</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m5.png" alt="search" />
                                                        Grimsby
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        comedy
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            crime
                                                        </Badge>
                                                    </td>
                                                    <td><span className="trnding-lista"> <img src="../assets/images/Vector/tranding.png" alt="tranding" /> Trending</span></td>
                                                    <td>670,901</td>
                                                    <td>2,453</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m6.png" alt="search" />
                                                        Moonlight
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        true story
                                                    </Badge>
                                                        <Badge className="table-badge-light">
                                                            +2 more
                                                        </Badge>
                                                    </td>
                                                    <td><span className="trnding-lista"> <img src="../assets/images/Vector/tranding.png" alt="tranding" /> Trending</span></td>
                                                    <td>56,893</td>
                                                    <td>24,512,232</td>
                                                    <td>4th July, 2012</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Trending">
                                <div className="movie-properties-section d-flex justify-content-between align-itemscenter">
                                    <div className="movie-properties-title">
                                        <h4>Collection of Trending</h4>
                                        <span>Keep track of all the movies on moviebox</span>
                                    </div>
                                    <div className="tranding-title">
                                        <Form className="d-flex search-form">
                                            <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                className="form-input"
                                                aria-label="Search"
                                            />
                                            <a className="search-btn" href="#"> <img src="../assets/images/Vector/search.png" alt="search" /></a>

                                        </Form>
                                    </div>
                                </div>
                                <div className="section-space">
                                    <div className="p-0 properties-table ">
                                        <Table className="w-100 mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="td-width">Name <img src="../assets/images/Vector/down.png" alt="tranding" /></th>
                                                    <th>Category</th>
                                                    <th>Popularity/Interest</th>
                                                    <th>Watchlists</th>
                                                    <th>Streams</th>
                                                    <th>Release Date</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="td-width">
                                                        <img className="movie-list-img" src="../assets/images/Vector/m1.png" alt="search" />
                                                        Avengers Black Widow
                                                    </td>
                                                    <td className="td-width"><Badge className="table-badge">
                                                        action
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            blockbuster
                                                        </Badge>
                                                    </td>
                                                    <td><span className="trnding-lista"> <img src="../assets/images/Vector/tranding.png" alt="tranding" /> Trending</span></td>
                                                    <td>590,972,542</td>
                                                    <td>21,452</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td className="td-width">
                                                        <img className="movie-list-img" src="../assets/images/Vector/m2.png" alt="search" />
                                                        After Hours
                                                    </td>
                                                    <td className="td-width"><Badge className="table-badge">
                                                        horror
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            crime
                                                        </Badge>
                                                    </td>
                                                    <td></td>
                                                    <td>88,458,892</td>
                                                    <td>32,892</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m3.png" alt="search" />
                                                        After Hours
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        horror
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            crime
                                                        </Badge>
                                                    </td>
                                                    <td></td>
                                                    <td>22,008,901</td>
                                                    <td>345,321</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td className="td-width">
                                                        <img className="movie-list-img" src="../assets/images/Vector/m4.png" alt="search" />
                                                        Captain Marvel
                                                    </td>
                                                    <td className="td-width"><Badge className="table-badge">
                                                        action
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            fantasy
                                                        </Badge>
                                                    </td>
                                                    <td></td>
                                                    <td>80,961</td>
                                                    <td>80,961</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td className="td-width">
                                                        <img className="movie-list-img" src="../assets/images/Vector/m5.png" alt="search" />
                                                        Grimsby
                                                    </td>
                                                    <td className="td-width"><Badge className="table-badge">
                                                        comedy
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            crime
                                                        </Badge>
                                                    </td>
                                                    <td><span className="trnding-lista"> <img src="../assets/images/Vector/tranding.png" alt="tranding" /> Trending</span></td>
                                                    <td>670,901</td>
                                                    <td>2,453</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td className="td-width">
                                                        <img className="movie-list-img" src="../assets/images/Vector/m6.png" alt="search" />
                                                        Moonlight
                                                    </td>
                                                    <td className="td-width"><Badge className="table-badge">
                                                        true story
                                                    </Badge>
                                                        <Badge className="table-badge-light">
                                                            +2 more
                                                        </Badge>
                                                    </td>
                                                    <td><span className="trnding-lista"> <img src="../assets/images/Vector/tranding.png" alt="tranding" /> Trending</span></td>
                                                    <td>56,893</td>
                                                    <td>24,512,232</td>
                                                    <td>4th July, 2012</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="contact" title="Upcoming Premier" >
                                <div className="movie-properties-section d-flex justify-content-between align-itemscenter">
                                    <div className="movie-properties-title">
                                        <h4>Collection of Upcoming Premier</h4>
                                        <span>Keep track of all the movies on moviebox</span>
                                    </div>
                                    <div className="tranding-title">
                                        <Form className="d-flex search-form">
                                            <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                className="form-input"
                                                aria-label="Search"
                                            />
                                            <a className="search-btn" href="#"> <img src="../assets/images/Vector/search.png" alt="search" /></a>

                                        </Form>
                                    </div>
                                </div>
                                <div className="section-space">
                                    <div className="p-0 properties-table ">
                                        <Table className="w-100 mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Name <img src="../assets/images/Vector/down.png" alt="tranding" /></th>
                                                    <th>Category</th>
                                                    <th>Popularity/Interest</th>
                                                    <th>Watchlists</th>
                                                    <th>Streams</th>
                                                    <th>Release Date</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m1.png" alt="search" />
                                                        Avengers Black Widow
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        action
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            blockbuster
                                                        </Badge>
                                                    </td>
                                                    <td><span className="trnding-lista"> <img src="../assets/images/Vector/tranding.png" alt="tranding" /> Trending</span></td>
                                                    <td>590,972,542</td>
                                                    <td>21,452</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m2.png" alt="search" />
                                                        After Hours
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        horror
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            crime
                                                        </Badge>
                                                    </td>
                                                    <td></td>
                                                    <td>88,458,892</td>
                                                    <td>32,892</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m3.png" alt="search" />
                                                        After Hours
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        horror
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            crime
                                                        </Badge>
                                                    </td>
                                                    <td></td>
                                                    <td>22,008,901</td>
                                                    <td>345,321</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m4.png" alt="search" />
                                                        Captain Marvel
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        action
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            fantasy
                                                        </Badge>
                                                    </td>
                                                    <td></td>
                                                    <td>80,961</td>
                                                    <td>80,961</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m5.png" alt="search" />
                                                        Grimsby
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        comedy
                                                    </Badge>
                                                        <Badge className="table-badge">
                                                            crime
                                                        </Badge>
                                                    </td>
                                                    <td><span className="trnding-lista"> <img src="../assets/images/Vector/tranding.png" alt="tranding" /> Trending</span></td>
                                                    <td>670,901</td>
                                                    <td>2,453</td>
                                                    <td>21th May, 2003</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img className="movie-list-img" src="../assets/images/Vector/m6.png" alt="search" />
                                                        Moonlight
                                                    </td>
                                                    <td><Badge className="table-badge">
                                                        true story
                                                    </Badge>
                                                        <Badge className="table-badge-light">
                                                            +2 more
                                                        </Badge>
                                                    </td>
                                                    <td><span className="trnding-lista"> <img src="../assets/images/Vector/tranding.png" alt="tranding" /> Trending</span></td>
                                                    <td>56,893</td>
                                                    <td>24,512,232</td>
                                                    <td>4th July, 2012</td>
                                                    <td><Button className="view-btn"> View</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default TabsContainer;