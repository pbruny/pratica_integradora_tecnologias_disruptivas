import React, { useState } from 'react';
import { FormControl, Grid, Input, FormHelperText, CardActions, Button } from '@mui/material';

const Login = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState('');

  const handleLogin = (id) => {
    if (login && password) {
      alert(`Login realizado para ${login}`);
    }
  };

  return (
    <div className='container'>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
          <FormHelperText id="login_nome_helper_text">Login</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>  
        <FormControl fullWidth>
          <Input id="password" aria-describedby="password_helper_text" value={password} onChange={e => { setPassword(e.target.value) }} />
          <FormHelperText id="password_helper_text">Senha</FormHelperText>
        </FormControl>
      </Grid>

      <CardActions>
          <Button size="small" variant="contained" disabled={!(login && password)} onClick={handleLogin}>Entrar</Button>
      </CardActions>
    </div>
  )
}

export default Login;