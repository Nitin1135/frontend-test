import React from "react";
import HeaderBottom from './Components/HeaderBottom';
import GraphOverview from './Components/GraphOverview';
import MovieProperties from './Components/MovieProperties';
import TabsContainer from './Components/TabsContainer';
function Movies() {
    return (
        <div>
            <HeaderBottom />
            <GraphOverview />
            <MovieProperties />
            <TabsContainer />
        </div>
    )
}
export default Movies;