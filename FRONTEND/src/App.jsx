import "./App.css";
import CircularCarousel from "./components/CircularCarousel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import SideRays from "./components/SideRays";

import kokkiKumar from "./assets/Kokkikumar.jpg";
import maaveeran from "./assets/Maaveeran.jpg";
import padayappa from "./assets/Padayappa.jpg";
import vadachennai from "./assets/Vadachennai.jpg";
import vikram from "./assets/Vikram.jpg";
import billa from "./assets/Billa.jpg";
import thalapathy from "./assets/Thalapathy.jpg";
import minnalmurali from "./assets/Minnalmurali.jpg";
import karnan from "./assets/Karnan.jpg";
import jackie from "./assets/Jackie.jpg";
import bossman from "./assets/Bossman.jpg";
import asuran from "./assets/Asuran.jpg";
import ranga from "./assets/Ranga.jpg";

function App() {
  const items = [
    {
      src: kokkiKumar,
      alt: "Kokki Kumar comic cover",
      title: "Kokki Kumar",
      subtitle: "Crime Drama",
    },
    {
      src: maaveeran,
      alt: "Maaveeran comic cover",
      title: "Maaveeran",
      subtitle: "Superhero",
    },
    {
      src: padayappa,
      alt: "Padayappa comic cover",
      title: "Padayappa",
      subtitle: "Tamil Classic",
    },
    {
      src: vadachennai,
      alt: "Vada Chennai comic cover",
      title: "Vada Chennai",
      subtitle: "Gangster Saga",
    },
    {
      src: vikram,
      alt: "Vikram comic cover",
      title: "Vikram",
      subtitle: "Action Thriller",
    },
    {
      src: billa,
      alt: "Vikram comic cover",
      title: "Vikram",
      subtitle: "Action Thriller",
    },
    {
      src: thalapathy,
      alt: "Vikram comic cover",
      title: "Vikram",
      subtitle: "Action Thriller",
    },
    {
      src: ranga,
      alt: "Vikram comic cover",
      title: "Vikram",
      subtitle: "Action Thriller",
    },
    {
      src: karnan,
      alt: "Vikram comic cover",
      title: "Vikram",
      subtitle: "Action Thriller",
    },
    {
      src: minnalmurali,
      alt: "Vikram comic cover",
      title: "Vikram",
      subtitle: "Action Thriller",
    },
    {
      src: jackie,
      alt: "Vikram comic cover",
      title: "Vikram",
      subtitle: "Action Thriller",
    },
    {
      src: bossman,
      alt: "Vikram comic cover",
      title: "Vikram",
      subtitle: "Action Thriller",
    },
    {
      src: asuran,
      alt: "Vikram comic cover",
      title: "Vikram",
      subtitle: "Action Thriller",
    },
  ];

  const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);


  function handleEmail(event) {
    setEmail(event.target.value);
    setError("");
  }
  function handlePassword(event) {
    setPassword(event.target.value);
    setError("");
  }

 async function check(event) {
  event.preventDefault();

  setError("");

  if (!email.trim() || !password.trim()) {
    setError("Please fill in all fields");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.trim())) {
    setError("Please enter a valid email address");
    return;
  }

  if (password.length < 8) {
    setError("Password must contain at least 8 characters");
    return;
  }

  try {
    setLoading(true);

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/login`,
      {
        email: email.trim(),
        password: password,
      }
    );

    if (response.data.success === true) {
      sessionStorage.setItem("isAuthenticated", "true");
      navigate("/success");
    } else {
      setError("Invalid email or password");
    }
  } catch (err) {
    console.error("Login request failed:", err);

    if (err.response) {
      setError(
        err.response.data.message || "Login failed. Please try again."
      );
    } else {
      setError("Unable to connect to server");
    }
  } finally {
    setLoading(false);
  }
}
  return (
    <div className="login-page">
      <h1 className="login-title">KADHAI NERAM</h1>

      <p className="login-subtitle">EVERY COVER HAS A STORY</p>
      <div className="side-rays-background">
        <SideRays />
      </div>

      <form className="login-card" onSubmit={check}>
  <input
    type="email"
    placeholder="Email address"
    name="email"
    value={email}
    onChange={handleEmail}
  />

  <input
    type="password"
    placeholder="Password"
    name="password"
    value={password}
    onChange={handlePassword}
  />

  <p className={`login-error ${error ? "show" : ""}`}>
    {error}
  </p>

  <button type="submit" disabled={loading}>
    {loading ? "Logging in..." : "Submit"}
  </button>
</form>
      <div
        style={{
          width: "100%",
          height: "250px",
          position: "relative",
          overflow: "visible",
        }}
      >
        <CircularCarousel
          items={items}
          preset="cylinder"
          intro="rise"
          cardWidth={280}
          aspectRatio={2 / 3}
          speed={14}
          captions={false}
          gap={25}
          tilt={-5}
          curve={1}
          perspective={2500}
          autoplay="drift"
          interval={3}
          direction="left"
          momentum={0.6}
          snap
          pauseOnHover
          focusOnClick
          draggable
          parallax={0.3}
          stretch={0.5}
          fadeColor="#000000"
          depthFade={0.55}
          innerShade={0.6}
          cornerRadius={12}
        />
      </div>
    </div>
  );
}

export default App;
