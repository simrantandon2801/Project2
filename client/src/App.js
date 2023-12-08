import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Post from "scenes/profilePage/Postpage/Post";
import Help from "help";
import Account from "Account"
import Pro from "Pro";
import Quotecomponent from "Rapidapi"
function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
              <Route
              path="/post/:userId"
              element={isAuth ? <Post /> : <Navigate to="/" />}
            />
            <Route path='/Help'element={isAuth ? <Help />:<Navigate to="/" /> }/>
            <Route path='/Account'element={isAuth ? <Account />:<Navigate to="/" /> } />
            <Route path='/Pro'element={isAuth ? <Pro />:<Navigate to="/" /> }/>
            <Route path='/abcd'element={isAuth ? <Quotecomponent />:<Navigate to="/" /> }/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
