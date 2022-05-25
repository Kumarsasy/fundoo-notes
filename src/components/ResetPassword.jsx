import React, { Component } from "react";
import { Box, Container, TextField, Button, Grid, Typography, Snackbar } from "@mui/material";
import { ResetService } from "../services/UserService";

class ResetPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirmPassword: "",
            passwordErr: "",
            confirmPasswordErr: "",
            SnackbarOpen: false,
            SnackbarMessage: ""
        };
    }

    handleClose = (e) => {
        this.setState({
            SnackbarOpen: false
        });
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    validate = () => {
        if (!this.state.password) {
            this.setState({ passwordErr: "Password is required" });
        } else if (this.state.password.length < 4) {
            this.setState({ passwordErr: "Password must be more than 4 characters" });
        } else if (this.state.password.length > 10) {
            this.setState({ passwordErr: "Password cannot exceed more than 10 characters " });
        } else {
            this.setState({ password: this.state.password, passwordErr: "" });
        }
        if (!this.state.confirmPassword) {
            this.setState({ confirmPasswordErr: "Confirm Password is required " });
        } else if (this.state.password !== this.state.confirmPassword) {
            this.setState({ confirmPasswordErr: "Password doesnot match" });
        } else {
            this.setState({ confirmPassword: this.state.confirmPassword, confirmPasswordErr: "" });
        }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.validate();
        let data = {
            newPassword: this.state.password
        };

        let token = this.props.match.params.id;
        console.log(token);

        await ResetService(data, token)
            .then((res) => {
                if (res.status === 204) {
                    console.log("res", res);
                    this.setState({
                        SnackbarOpen: true,
                        SnackbarMessage: "Password Reseted successfully"
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
            <Container maxWidth="xs" className="main-container-signup">
                <Typography variant="h4">
                    <span className="title-color-1">F</span>
                    <span className="title-color-2">u</span>
                    <span className="title-color-3">n</span>
                    <span className="title-color-1">d</span>
                    <span className="title-color-3">o</span>
                    <span className="title-color-2">o</span>
                </Typography>
                <br />
                <Typography variant="h5">Reset Your Password</Typography>
                <p>to continue to Fundoo</p>
                <Box component="form" onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField required fullWidth name="password" label="Password" type="password" id="password" onChange={this.handleChange} value={this.state.password} helperText={this.state.passwordErr} autoComplete="new-password" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth name="confirmPassword" label="Confirm Password" type="password" id="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword} helperText={this.state.confirmPasswordErr} autoComplete="new-password" />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Reset Password
                    </Button>

                    <Snackbar open={this.state.SnackbarOpen} autoHideDuration={3000} onClose={this.handleClose} message={this.state.SnackbarMessage} />
                </Box>
            </Container>
        );
    }
}

export default ResetPassword;
