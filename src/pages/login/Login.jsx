import "./Login.css";
import { Box, Container, TextField, Button, Grid, Typography, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { LogInService } from "../../services/UserService";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            emailErr: "",
            passwordErr: "",
            SnackbarOpen: false,
            SnackbarMessage: ""
        };
    }

    handleClose = (e) => {
        this.setState({
            SnackbarOpen: false
        });
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

        if (!this.state.password) {
            this.setState({ passwordErr: "Password is required" });
        } else if (this.state.password.length < 4) {
            this.setState({ passwordErr: "Password must be more than 4 characters" });
        } else if (this.state.password.length > 10) {
            this.setState({ passwordErr: "Password cannot exceed more than 10 characters " });
        } else {
            this.setState({ password: this.state.password, passwordErr: "" });
        }
    };

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.validate();
        let data = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(data);
        await LogInService(data)
            .then((res) => {
                if (res.status === 200) {
                    this.setState({
                        SnackbarOpen: true,
                        SnackbarMessage: "Login Succesfull"
                    });

                    let token = res.data.id;
                    console.log(token);
                    localStorage.setItem("token", token);

                    this.props.history.push("/dashBoard");
                }
                console.log("res", res);
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    SnackbarOpen: true,
                    SnackbarMessage: "Login Failed"
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
                <Typography variant="h5">Sign in</Typography>
                <p>to continue to Fundoo</p>
                <Box component="form" onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" onChange={this.handleInput} value={this.state.email} helperText={this.state.emailErr} autoComplete="email" autoFocus />
                    <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" onChange={this.handleInput} value={this.state.password} helperText={this.state.passwordErr} autoComplete="current-password" />

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>

                    <Grid container className="bottom-grid">
                        <Grid item>
                            <Link to="/forgotDetails">Forgot Password?</Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup">Don't have an account? Sign Up</Link>
                        </Grid>
                    </Grid>
                    <Snackbar open={this.state.SnackbarOpen} autoHideDuration={3000} onClose={this.handleClose} message={this.state.SnackbarMessage} />
                </Box>
            </Container>
        );
    }
}

export default Login;
