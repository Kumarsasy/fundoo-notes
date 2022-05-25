import React from "react";
import PrimarySearchAppBar from "./AppBar";
import TakeNote from "./TakeNote";

function DashBoard(props) {
    return (
        <div>
            <PrimarySearchAppBar />

            <TakeNote />
        </div>
    );
}

export default DashBoard;
