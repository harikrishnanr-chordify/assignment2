import React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Signup = () => {
  const [errorMessage, setErrorMessage] = React.useState("")
  const [userEmail, setUserEmail] = React.useState("");
  const [userFirstName, setUserFirstName] = React.useState("");
  const [userLastName, setUserLastName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userConfirmPassword, setUserConfirmPassword] = React.useState("")

  function validateForm(fieldName) {
    if (fieldName === "email") {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      setErrorMessage("")
      if (userEmail !== "") {
        if (regex.test(userEmail) === false) {
          setErrorMessage('Email is not valid');
          return false;
        } else {
          setErrorMessage("");
          return true;
        }
      } else {
        setErrorMessage("Email is required")
        return false;
      }
    }

    if ((fieldName === "userPassword") || (fieldName === "userConfirmPassword")) {
      console.log(userConfirmPassword)
      if (userPassword !== userConfirmPassword) {
        setErrorMessage("Password and Confirm Password is not matching")
        return false;
      } else {
        setErrorMessage("")
        return true;
      }
    }
  }

  function handleUserSignUp(e) {
    e.preventDefault();

  }

  return (
    <div>
      <Container maxWidth="sm" sx={{ mt: '10px', p: '10px' }}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '70vh', padding: '10px' }}>
          <h4>Sign Up</h4>
          <form onSubmit={handleUserSignUp}>
            {
              errorMessage !== "" ? (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  <strong>{errorMessage}</strong>
                </Alert>)
                : ("")
            }
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
              <Input
                id="outlined-required"
                label="Required"
                type="email"
                onBlur={(e) => validateForm('email')}
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">First Name</InputLabel>
              <Input
                id="outlined-required"
                label="Required"
                onChange={(e) => setUserFirstName(e.target.value)}
                value={userFirstName}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Last Name</InputLabel>
              <Input
                id="outlined-required"
                label="Required"
                onChange={(e) => setUserLastName(e.target.value)}
                value={userLastName}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Password</InputLabel>
              <Input
                id="outlined-required"
                label="Required"
                onBlur={(e) => validateForm('userPassword')}
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Confirm Password</InputLabel>
              <Input
                id="outlined-required"
                label="Required"
                onBlur={(e) => validateForm('userConfirmPassword')}
                onChange={(e) => setUserConfirmPassword(e.target.value)}
                value={userConfirmPassword}
              />
            </FormControl>

            <FormControl variant="standard" >
              <Button type="submit" variant="contained">Sign Up</Button>
              <Button href="#text-buttons">Sign In</Button>
            </FormControl>
          </form>
        </Box>
      </Container>
    </div >
  );
}

export default Signup;