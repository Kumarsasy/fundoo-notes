import React, { Component } from "react";
import { Box, Container, TextField, Button, Grid, Typography, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import { ForgotService } from "../../services/UserService";

class ForgotDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            emailErr: "",
            SnackbarOpen: false,
            SnackbarMessage: ""
        };
    }

    handleClose = (e) => {
        this.setState({
            SnackbarOpen: false
        });
    };

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    validate = () => {
        const emailRegex = new RegExp("a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$");

        if (!this.state.email) {
            this.setState({ emailErr: "Email is required" });
        } else if (emailRegex.test(this.state.email)) {
            this.setState({ emailErr: "Enter a valid Email" });
        } else {
            this.setState({ email: this.state.email, emailErr: "" });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.validate();
        let data = {
            email: this.state.email
        };

        ForgotService(data)
            .then((res) => {
                if (res.status === 200) {
                    console.log("res", res);
                    this.setState({
                        SnackbarOpen: true,
                        SnackbarMessage: "Rest Link sent successfully"
                    });
                    this.props.history.push("/login");
                }
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    SnackbarOpen: true,
                    SnackbarMessage: "Please Register"
                });
            });
    };

    render() {
        return (
            <Container maxWidth="xs" className="main-container">
                <Typography variant="h4">
                    <span className="title-color-1">F</span>
                    <span className="title-color-2">u</span>
                    <span className="title-color-3">n</span>
                    <span className="title-color-1">d</span>
                    <span className="title-color-3">o</span>
                    <span className="title-color-2">o</span>
                </Typography>
                <br />
                <Typography variant="h5">Account Recovery</Typography>
                <Typography variant="subtitle1">Enter your email for reset link</Typography>
                <Box component="form" onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" onChange={this.handleInput} value={this.state.email} helperText={this.state.emailErr} autoComplete="email" autoFocus />

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Next
                    </Button>

                    <Grid container className="bottom-grid">
                        <Grid item>
                            <Link to="/login">Back</Link>
                        </Grid>
                    </Grid>
                    <Snackbar open={this.state.SnackbarOpen} autoHideDuration={3000} onClose={this.handleClose} message={this.state.SnackbarMessage} />
                </Box>
            </Container>
        );
    }
}

export default ForgotDetails;
