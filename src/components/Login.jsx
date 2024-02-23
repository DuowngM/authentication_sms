import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase";
export default function Login() {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOTP] = useState("");
  const handleSendOTP = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (error) {
      console.log(error);
    }
  };
  const verifyOTP = async () => {
    try {
      const data = await user.confirm(otp);
      if (data) {
        alert("Login Success");
      }
    } catch (error) {
      if (error) {
        alert("Dang nhap that bai");
      }
    }
  };
  return (
    <div>
      <PhoneInput
        country={"vn"}
        value={phone}
        onChange={(phone) => setPhone("+" + phone)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>
      <div id="recaptcha"></div>
      <div>
        <input
          type="text"
          className="border-2 border-sky-500"
          onChange={(e) => setOTP(e.target.value)}
        />
        <button onClick={verifyOTP}>Accept</button>
      </div>
    </div>
  );
}
