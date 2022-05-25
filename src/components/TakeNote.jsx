import React, { Component } from "react";

import { Button, Card, CardActions, CardContent, IconButton, InputBase } from "@mui/material";
import PinchIcon from "@mui/icons-material/Pinch";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PaletteIcon from "@mui/icons-material/Palette";
import PanoramaIcon from "@mui/icons-material/Panorama";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PushPinIcon from "@mui/icons-material/PushPin";
import ViewListIcon from "@mui/icons-material/ViewList";

const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

class TakeNote extends Component {
    constructor() {
        super();
        this.state = {
            cardOpen: false
        };
    }

    handleCard = () => {
        this.setState({
            cardOpen: true
        });
    };

    render() {
        return (
            <div style={cardStyle}>
                {this.state.cardOpen ? (
                    <Card sx={{ minWidth: 600, marginTop: "100px", padding: "10px", border: "1px solid #ddd" }} elevation={0}>
                        <CardContent>
                            <div>
                                <InputBase placeholder="Title" id="titleData" style={{ width: "92%" }} />
                                <IconButton style={{ marginLeft: "auto" }}>
                                    <PushPinIcon />
                                </IconButton>
                            </div>
                            <div>
                                <InputBase placeholder="Description" id="descriptionData" style={{ width: "100%" }} />
                            </div>
                        </CardContent>
                        <CardActions>
                            <IconButton>
                                <PinchIcon />
                            </IconButton>
                            <IconButton>
                                <PersonAddIcon />
                            </IconButton>
                            <IconButton>
                                <PaletteIcon />
                            </IconButton>
                            <IconButton>
                                <PanoramaIcon />
                            </IconButton>
                            <IconButton>
                                <ArchiveIcon />
                            </IconButton>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                            <Button variant="text" style={{ marginLeft: "auto", color: "#5f6368" }}>
                                Close
                            </Button>
                        </CardActions>
                    </Card>
                ) : (
                    <Card sx={{ minWidth: 600, marginTop: "100px", padding: "10px", border: "1px solid #ddd" }} elevation={0} onClick={this.handleCard}>
                        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <InputBase placeholder="Take a note..." id="titleData" style={{ width: "100%" }} />
                            </div>
                            <div sx={{ display: "flex", justifyContent: "space-between" }}>
                                <IconButton style={{ marginLeft: "auto" }}>
                                    <ViewListIcon />
                                </IconButton>
                                <IconButton style={{ marginLeft: "auto" }}>
                                    <PanoramaIcon />
                                </IconButton>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        );
    }
}

export default TakeNote;
