import React from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from 'scenes/navbar';
import { Api_url } from 'helper';

const Pro = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const alt = palette.background.alt;

  const token = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user);
  const paymentAmount = '1000';

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `${Api_url}/users/${_id}/payment`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Set the content type
          },
        }
      );

      console.log(response, 'payment');
    } catch (error) {
      console.error('Error:', error);
      // You can handle the error here, e.g., display an error message to the user.
    }
  };

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          padding: '16px',
          marginBottom: '16px',
          borderRadius: '4px',
        }}
      >
        <Grid
          container
          lg={11}
          backgroundColor={alt}
          sx={{ margin: 'auto', border: '1px solid #ccc', height: '84vh' }}
        >
          <Grid container lg={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <img src="https://drive.google.com/uc?export=view&id=1c_Tnysmc3Mh4NgG6nRkAdkXNnE-HzIfA" alt="Pro" style={{ width: '75%', height: '75%', }} />
          </Grid>
          <Grid container lg={6} sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <Grid item lg={10} xs={10}>
              <div>
                <Typography variant="h4" color={dark} gutterBottom>
                  Upgrade to Pro
                </Typography>
                <Typography variant="body1" color={dark} paragraph>
                  Unlock premium features and enjoy the full potential of Sociopedia.
                </Typography>
                <Typography variant="body1" color={dark} paragraph>
                  Benefits of Pro:
                  <ul>
                    <li>Advanced analytics</li>
                    <li>Priority customer support</li>
                    <li>Unlimited connections</li>
                  </ul>
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePayment}
                  sx={{ marginBottom: "30px" }}
                >
                  Upgrade to Pro
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Pro;
