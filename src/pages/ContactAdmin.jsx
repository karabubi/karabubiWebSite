import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ContactAdmin() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const loginFailed = queryParams.get("loginFailed") === "true";

  return (
    <div className="contact-admin">
      <h2>Contact Administrator</h2>
      {loginFailed && (
        <p style={{ color: "red" }}>
          You have exceeded the maximum login attempts. Please contact the
          website administrator for further assistance.
        </p>
      )}
      {/* Add any additional content or contact form */}
    </div>
  );
}

export default ContactAdmin;
