import { Routes, Route } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/Login/login.jsx";
import SignupPage from "../pages/Signup/SignupPage.jsx";
import SearchTrainPage from "../pages/SearchTrain/SearchTrainPage.jsx";
import TrainDetailsPage from "../pages/TrainDetails/TrainDetailsPage.jsx";
import BookingPage from "../pages/Booking/BookingPage.jsx";
import BookingHistoryPage from "../pages/BookingHistory/BookingHistoryPage.jsx";
import PaymentPage from "../pages/Payment/PaymentPage.jsx";
import PNRStatusPage from "../pages/PNRStatus/PNRStatusPage.jsx";
import ProfilePage from "../pages/Profile/ProfilePage.jsx";
import AdminPage from "../pages/Admin/AdminPage.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/search-train" element={<SearchTrainPage />} />
      <Route path="/train-details" element={<TrainDetailsPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking-history" element={<BookingHistoryPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/pnr-status" element={<PNRStatusPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default AppRoutes;
