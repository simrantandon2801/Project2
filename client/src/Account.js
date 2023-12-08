import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import Navbar from 'scenes/navbar';
import { ManageAccountsOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Api_url } from "helper";
const AccountPage = () => {
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${Api_url}/users/${_id}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
		const data = await response.json();
		console.log(data,'data')
      setUser(data);
      setName(data.firstName); // Assume firstName is the property for name
		setEmail(data.email);
		setPassword(data.password)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`${Api_url}/users/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, password }),
      });
      const updatedUser = await response.json();
      setUser(updatedUser);
      // Update local state with the returned user data
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

	return (
		<>
		<Navbar />
    <Box sx={{width:"80%",margin:'auto',marginTop:'20px'}}>
      <Typography variant="h4" gutterBottom>
        <ManageAccountsOutlined /> Account Settings
		  </Typography>
		  
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdate}
        sx={{ marginTop: "1rem" }}
      >
        Save Changes
      </Button>
			</Box>
			</>
  );
};

export default AccountPage;