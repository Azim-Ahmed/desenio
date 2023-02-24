import ContactAndBasicInfo from "components/Profile/About/ContactAndBasicInfo";
import Details from "components/Profile/About/Details";
import Events from "components/Profile/About/Events";
import FamilyAndRelationships from "components/Profile/About/FamilyAndRelationships";
import Overview from "components/Profile/About/Overview";
import Places from "components/Profile/About/Places";
import WorkAndEducation from "components/Profile/About/WorkAndEducation";
import TotalBalance from "components/Profile/Earnings/TotalBalance";
import WalletAddress from "components/Profile/Earnings/WalletAddress";
import Friends from "components/Profile/Friends";
import ToastArea from "components/Reusable/ToastArea";
import AuthNavbar from "components/Shared/Navbar/AuthNavbar";
import UserContactAndBasicInfo from "components/UserProfile/About/ContactAndBasicInfo";
import UserDetails from "components/UserProfile/About/Details";
import UserEvents from "components/UserProfile/About/Events";
import UserFamilyAndRelationships from "components/UserProfile/About/FamilyAndRelationships";
import UserOverview from "components/UserProfile/About/Overview";
import UserPlaces from "components/UserProfile/About/Places";
import UserWorkAndEducation from "components/UserProfile/About/WorkAndEducation";
import UpdateProfileProvider from "context/UpdateProfileInfo";
import { userLoggedIn } from "features/auth/authSlice";
import ProfileLayout from "layouts/ProfileLayout";
import UserProfileLayout from "layouts/UserProfileLayout";
import ForgotPassword from "pages/Auth/ForgotPassword";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import ResetPassword from "pages/Auth/ResetPassword/idex";
import Dating from "pages/Dating";
import Design from 'pages/Design';
import EarningsHistory from "pages/EarningsHistory";
import Home from "pages/Home/Home";
import Meeting from "pages/Meet/Meeting";
import About from "pages/Profile/About";
import Earnings from "pages/Profile/Earnings";
import Stories from "pages/Stories";
import Stream from "pages/Stream";
import UserAbout from "pages/UserProfile/UserAbout";
import UserPosts from "pages/UserProfile/UserPosts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Navbar from "./components/Shared/Navbar/Navbar";
import Meet from "./pages/Meet/Meet";
import Posts from "./pages/Profile/Posts";
const authPath = ["/login", "/register", "/forgot-password", "/reset-password"];

/**
 *@function App.jsx
 *@author Azim
 *
 **/
function App() {
  const [init, setInit] = useState(true);
  const { user, accessToken } = useSelector((state) => state.auth);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  // TODO : please add localStorage for darkmode data

  // const getDarkMode = () => {
  //   const darkMode = localStorage.getItem("darkMode");
  //   if (darkMode) {
  //     setIsDarkMode(JSON.parse(darkMode));
  //   } else {
  //     setIsDarkMode(false);
  //   }
  // };

  useEffect(() => {
    setInit(false);
    const userInfo = JSON.parse(localStorage.getItem("auth"));
    if (userInfo) {
      dispatch(userLoggedIn(userInfo));
    }

    const userPref = window?.matchMedia("(prefers-color-scheme: white)").matches;
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme === null) {
      setIsDarkMode(userPref);
    } else {
      setIsDarkMode(theme);
    }
    // setIsDarkMode(theme);
  }, [dispatch]);

  if (init) return "";
  // !user ||
  if (!accessToken) {
    return (
      <div className={isDarkMode ? "dark transition-all duration-100" : ""}>
        <ToastArea />
        {/* <AuthNavbar /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/design" element={<Design />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    );
  }

  return (
    <div
      className={
        isDarkMode ? "dark transition-all duration-100 pt-[75px]" : "pt-[75px]"
      }
    >
      <ToastArea />
      {authPath.includes(location.pathname || window?.location.pathname) ? (
        <AuthNavbar />
      ) : (
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      )}
      <UpdateProfileProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route
            path="/home"
            element={
              <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
          <Route path="/meet" element={<Meet />} />
          <Route path="/earning_history" element={<EarningsHistory />} />
          <Route path="/meet/:id" element={<Meeting />} />

          <Route path="/stories" element={<Stories />} />
          <Route path="/dating" element={<Dating />} />

          <Route path="/profile" element={<ProfileLayout />}>
            <Route path="" element={<Navigate to="posts" />} />
            <Route path="posts" element={<Posts />} />

            <Route path="about" element={<About />}>
              <Route path="" element={<Navigate to="overview" />} />
              <Route path="overview" element={<Overview />} />
              <Route path="work_and_education" element={<WorkAndEducation />} />
              <Route path="places" element={<Places />} />
              <Route
                path="contact_and_basic_info"
                element={<ContactAndBasicInfo />}
              />
              <Route
                path="family_and_relationships"
                element={<FamilyAndRelationships />}
              />
              <Route path="details" element={<Details />} />
              <Route path="life_events" element={<Events />} />
            </Route>

            <Route path="friends" element={<Friends />} />
            <Route path="photos" element={<h1>Photos</h1>} />
            <Route path="earnings" element={<Earnings />}>
              <Route path="" element={<Navigate to="wallet-address" />} />
              <Route path="wallet-address" element={<WalletAddress />} />
              <Route path="balance" element={<TotalBalance />} />
              <Route path="earning_history" element={<EarningsHistory profile={true} />} />
            </Route>
            <Route path="videos" element={<h1>Videos</h1>} />
            <Route path="meeting" element={<h1>Meeting</h1>} />
          </Route>

          <Route path="/user/:id" element={<UserProfileLayout />}>
            <Route path="" element={<Navigate to="posts" />} />
            <Route path="posts" element={<UserPosts />} />

            <Route path="about" element={<UserAbout />}>
              <Route path="" element={<Navigate to="overview" />} />
              <Route path="overview" element={<UserOverview />} />
              <Route
                path="work_and_education"
                element={<UserWorkAndEducation />}
              />
              <Route path="places" element={<UserPlaces />} />
              <Route
                path="contact_and_basic_info"
                element={<UserContactAndBasicInfo />}
              />
              <Route
                path="family_and_relationships"
                element={<UserFamilyAndRelationships />}
              />
              <Route path="details" element={<UserDetails />} />
              <Route path="life_events" element={<UserEvents />} />
            </Route>

            <Route path="friends" element={<Friends />} />
            <Route path="photos" element={<h1>Photos</h1>} />
            <Route path="videos" element={<h1>Videos</h1>} />
            <Route path="meeting" element={<h1>Meeting</h1>} />
          </Route>

          {/*
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        */}
          <Route path="/stream" element={<Stream />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </UpdateProfileProvider>
    </div>
  );
}

export default App;