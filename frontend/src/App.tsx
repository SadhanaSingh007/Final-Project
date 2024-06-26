import { Routes, Route } from "react-router-dom";
import "./app.css";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Services from "./components/services/Services";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/products";
import Cart from "./components/cart/Cart";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import ResetPassword from "./components/resetPassword/ResetPassword";
import ConfirmationPage from "./components/confirmationPge/ConfirmationPage";
import { CartProvider } from "./context/Cart";
import { ServiceProvider } from "./context/serviceContext";
import Contact from "./components/contact/Contact";
import Appointment from "./components/services/appointments/Appointments";
import Logout from "./components/logout/Logout";
import CheckoutForm from "./components/checkout/CheckoutForm";
import About from "./components/about/About";
import BookingDetail from "./components/services/appointments/details&history/BookingDetail";
import ConfirmedBooking from "./components/services/appointments/details&history/ConfirmedBooking";
// import OrderDetails from "./components/order/OrderDetails";
import OrderList from "./components/order/OrderList";
// import ThankYou from "./components/thankYou/ThankYou";

function App() {
  return (
    <>
      <CartProvider>
        <ServiceProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book-appointment" element={<Appointment />} />
            <Route path="/bookingConfirm" element={<ConfirmedBooking />} />
            <Route path="/bookingDetails" element={<BookingDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword/:token" element={<ResetPassword />} />
            <Route path="/confirmationPage" element={<ConfirmationPage />} />

            {/* <Route path="/thank-you" element={<ThankYou/>} /> */}
          </Routes>
        </ServiceProvider>
      </CartProvider>
    </>
  );
}

export default App;
