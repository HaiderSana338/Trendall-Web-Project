import React from "react";
import RelatedPost from "./RelatedPost";
import OnGoing from "./OnGoing";

function SideColumn(){
    return(
        <div className="side-column">
            <RelatedPost/>
            <OnGoing/>
        </div>
    );
}
export default SideColumn;