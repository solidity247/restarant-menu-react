import LoginForm from "./Access/LoginForm";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CustomersAccess({menu, setAccess}) {
  // const [login, setLogin] = useState()
  //   props.onAccessChange;

  return (
    <div>
      Customers page.
      <br />
      <br />
      <br />
      Here customer can see menu, sort, filter, add to cart and see other
      information about our cafe
      <br />
      {menu.map(ele=>
        <Paper
        sx={{
          p: 2,
          margin: '15px auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt={ele.img} src={ele.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {ele.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {ele.desc}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Add to Cart
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {ele.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>)}
      <br />
      And much more from customer's site
      <br />
      <LoginForm onAuthorisation={setAccess}></LoginForm>
    </div>
  );
}
