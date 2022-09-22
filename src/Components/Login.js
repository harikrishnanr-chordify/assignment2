import React from 'react';
import axios from "axios";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link';

const Login = () => {
  const [errorMessage, setErrorMessage] = React.useState("")
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  function handleUserLogin(e) {
    e.preventDefault();
    axios.post('https://reqres.in/api/login', {
      email: userEmail,
      password: userPassword
    }, {
      headers: {
        'content-type': 'text/json'
      }
    }).then(function (response) {
      console.log(response);
    })
  }

  return (
    <div>
      <Container maxWidth="sm" sx={{ mt: '10px', p: '10px' }}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '70vh', padding: '10px' }}>
          <h4>Login</h4>
          <form onSubmit={handleUserLogin}>
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
                required
                id="outlined-required"
                label="Required"
                type="email"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
              />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Password</InputLabel>
              <Input
                id="outlined-required"
                required
                type="password"
                label="Required"
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
              />
            </FormControl>

            <FormControl variant="standard" >
              <Button type="submit" variant="contained">Login</Button>
              <Link href="/">Register</Link>
            </FormControl>
          </form>
        </Box>
      </Container>
    </div >
  )
}


export default Login;