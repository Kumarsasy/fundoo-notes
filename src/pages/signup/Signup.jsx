import "./Signup.css";
import { Box, Container, TextField, Button, Grid, Typography, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { SignUpService } from "../../services/UserService";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            firstNameErr: "",
            lastNameErr: "",
            emailErr: "",
            passwordErr: "",
            confirmPasswordErr: "",
            SnackbarOpen: false,
            SnackbarMessage: "",
            service: "advance"
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

    // handleChangeFirstName = (e) => {
    //     // const { name, value } = e.target;
    //     // this.setState({ [name]: value });
    //     this.setState({ firstName: e.target.value });

    //     if (!this.state.firstName) {
    //         this.setState({ firstNameErr: "Firstname is required" });
    //     } else {
    //         this.setState({ firstName: this.state.firstName, firstNameErr: "" });
    //     }
    // };

    // handleChangeLastName = (e) => {
    //     this.setState({ lastName: e.target.value });

    //     if (!this.state.lastName) {
    //         this.setState({ lastNameErr: "Lastname is required" });
    //     } else {
    //         this.setState({ lastName: this.state.lastName, lastNameErr: "" });
    //     }
    // };

    // handleChangeEmail = (e) => {
    //     this.setState({ email: e.target.value });
    //     const emailRegex = new RegExp("a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$");

    //     if (!this.state.email) {
    //         this.setState({ emailErr: "Email is required" });
    //     } else if (emailRegex.test(this.state.email)) {
    //         this.setState({ emailErr: "Enter a valid Email" });
    //     } else {
    //         this.setState({ email: this.state.email, emailErr: "" });
    //     }
    // };

    // handleChangePassword = (e) => {
    //     this.setState({ password: e.target.value });

    //     if (!this.state.password) {
    //         this.setState({ passwordErr: "Password is required" });
    //     } else if (this.state.password.length < 4) {
    //         this.setState({ passwordErr: "Password must be more than 4 characters" });
    //     } else if (this.state.password.length > 10) {
    //         this.setState({ passwordErr: "Password cannot exceed more than 10 characters " });
    //     } else {
    //         this.setState({ password: this.state.password, passwordErr: "" });
    //     }
    // };

    // handleChangeConfirmPassword = (e) => {
    //     this.setState({ confirmPassword: e.target.value });

    //     if (!this.state.confirmPassword) {
    //         this.setState({ confirmPasswordErr: "Confirm Password is required " });
    //     } else if (this.state.password !== this.state.confirmPassword) {
    //         this.setState({ confirmPasswordErr: "Password doesnot match" });
    //     } else {
    //         this.setState({ confirmPassword: this.state.confirmPassword, confirmPasswordErr: "" });
    //     }
    // };

    validate = () => {
        const emailRegex = new RegExp("a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$");

        if (!this.state.firstName) {
            this.setState({ firstNameErr: "Firstname is required" });
        } else {
            this.setState({ firstName: this.state.firstName, firstNameErr: "" });
        }
        if (!this.state.lastName) {
            this.setState({ lastNameErr: "Lastname is required" });
        } else {
            this.setState({ lastName: this.state.lastName, lastNameErr: "" });
        }
        if (!this.state.email) {
            this.setState({ emailErr: "Email is required" });
        } else if (emailRegex.test(this.state.email)) {
            this.setState({ emailErr: "Enter a valid Email" });
        } else {
            this.setState({ email: this.state.email, emailErr: "" });
        }
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            service: "advance"
        };
        console.log(data);

        await SignUpService(data)
            .then((res) => {
                console.log("res", res);
                if (res.status === 200) {
                    this.setState({
                        SnackbarOpen: true,
                        SnackbarMessage: "Sigup Succesfull"
                    });
                    this.props.history.push("/login");
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    SnackbarOpen: true,
                    SnackbarMessage: "Signup Failed"
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
                <Typography variant="h5">Create your Fundoo Account</Typography>
                <p>to continue to Fundoo</p>
                <Box component="form" onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" onChange={this.handleChange} value={this.state.firstName} helperText={this.state.firstNameErr} autoFocus />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="lastName" label="Last Name" name="lastName" onChange={this.handleChange} value={this.state.lastName} helperText={this.state.lastNameErr} autoComplete="family-name" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth id="email" label="Email Address" name="email" onChange={this.handleChange} value={this.state.email} helperText={this.state.emailErr} autoComplete="email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth name="password" label="Password" type="password" id="password" onChange={this.handleChange} value={this.state.password} helperText={this.state.passwordErr} autoComplete="new-password" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth name="confirmPassword" label="Confirm Password" type="password" id="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword} helperText={this.state.confirmPasswordErr} autoComplete="new-password" />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                    <Snackbar open={this.state.SnackbarOpen} autoHideDuration={3000} onClose={this.handleClose} message={this.state.SnackbarMessage} />
                </Box>
            </Container>
        );
    }
}

export default Signup;
