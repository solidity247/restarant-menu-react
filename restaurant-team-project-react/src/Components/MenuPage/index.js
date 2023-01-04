import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import CardItem from '../CardItem';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function MenuPage({menu}) {
  return (
    <>
    {menu.map(productDetails=><CardItem productDetails={productDetails} key={productDetails.id} />)}




    {/* {menu.map(ele=>
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
      </Paper>)} */}


    </>
  )
}

export default MenuPage