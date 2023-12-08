import React from 'react'

import { Grid,Typography, useMediaQuery } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Navbar from 'scenes/navbar';
const Help = () => {
    const mobile = useMediaQuery('(max-width:600px)');
 
  return (

    <>
    <Navbar/>
    <Grid container lg={12} xs={12} sx={{justifyContent:'center',alignItems:'center',marginTop:'80px',marginBottom:'100px'}}>
<Grid container lg={6.3} xs={10}  sx={{backgroundColor:'skyblue',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'16px'}}>
 
  <Grid item lg={12} sx={{marginTop:"56px"}}>
    <Typography sx={{fontFamily: 'Inter',color:"#FFF",textAlign:'center',
fontSize:mobile?'20px': '26px',
fontWeight: 600,
lineHeight: 'normal'}}>How can we help you?</Typography>
<Typography sx={{fontFamily: 'Inter',color:"#FFF",textAlign:'center',marginTop:'16px',
fontSize: mobile?'12px':'16px',
fontWeight: 400,
lineHeight: 'normal'}}>We are always happy to help.</Typography>
  </Grid>
  
  <Grid container lg={5}  xs={10} sx={{background:'#FFF',marginBottom:'56px',borderRadius:'12px',marginTop:'36px'}}>
    <Grid item lg={12} xs={12} sx={{justifyContent:'center',display:'flex'}}>
  <EmailOutlinedIcon sx={{marginTop:'26px',marginBottom:mobile?'14px':'16px',width:mobile?'30px':'36px',height:mobile?'30px':'36px',color:'#2195c4'}}/>
  </Grid>
  
  <Grid item lg={12} xs={12}>
  <Typography sx={{fontFamily: 'Inter',color:"#2195c4",textAlign:'center',marginTop:mobile?'14px':'16px',
fontSize: '20px',
fontWeight: 500,
lineHeight: 'normal'}}> simrantandon786@gmail.com</Typography>
    </Grid>
   



<Grid item lg={12} xs={12}>
<Typography sx={{fontFamily: 'Inter',color:"#2195c4",textAlign:'center',marginTop:'16px',marginBottom:'26px',
fontSize: '20px',
fontWeight: 500,
lineHeight: 'normal'}}>simran-cse19@satyug.edu.in</Typography>
</Grid>
  </Grid>
</Grid>
    </Grid>
</>
  )
}

export default Help