import { useNavigate } from "react-router-dom";

import DepthCarousel from "./components/DepthCarousel";
import SideRays from "./components/SideRays";
import StarBorder from "./components/StarBorder";

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

// NOTE: the carousel reads the picture from the `image` key (not `src`)
const covers = [
  { image: kokkiKumar, title: "Kokki Kumar", subtitle: "Crime Drama" },
  { image: maaveeran, title: "Maaveeran", subtitle: "Superhero" },
  { image: padayappa, title: "Padayappa", subtitle: "Tamil Classic" },
  { image: vadachennai, title: "Vada Chennai", subtitle: "Gangster Saga" },
  { image: vikram, title: "Vikram", subtitle: "Action Thriller" },
  { image: billa, title: "Billa", subtitle: "The Original Gangster" },
  { image: thalapathy, title: "Thalapathy", subtitle: "The Lone Warrior" },
  { image: ranga, title: "Ranga", subtitle: "Action" },
  { image: karnan, title: "Karnan", subtitle: "Period Drama" },
  { image: minnalmurali, title: "Minnal Murali", subtitle: "Superhero" },
  { image: jackie, title: "Jackie", subtitle: "Action" },
  { image: bossman, title: "Bossman", subtitle: "Action" },
  { image: asuran, title: "Asuran", subtitle: "Revenge Drama" },
];

const items = covers.map((c) => ({
  ...c,
  alt: `${c.title} comic cover`,
}));

function Success() {
  const navigate = useNavigate();
  function handleLogout() {
    sessionStorage.removeItem("isAuthenticated");
    navigate("/", { replace: true });
  }
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#0d0b12",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* rays: pinned behind everything */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <SideRays
          rayColor1="#FFC46B"
          rayColor2="#96c8ff"
          origin="top-right"
          speed={2.5}
          intensity={2}
          spread={2}
          density={5}
          followMouse
          blend={0.6}
          sharpness={0.5}
          tilt={0}
          falloff={1.6}
          glow={1}
          saturation={1}
          dust={0}
          mouseInfluence={0.5}
          intro
          lightMode={false}
          opacity={1}
        />
      </div>
      <div className="welcome-panel">
        <h1 className="welcome-title">Welcome to Kadhai Neram!</h1>
        <p className="welcome-text">You have successfully logged in.</p>

        <StarBorder
          color="#ffd60a"
          trailColor="#ffffff"
          duration={4}
          direction="clockwise"
          stars={1}
          trailLength={0.3}
          thickness={1}
          radius={12}
          glow={0.6}
          hover="lap"
          sparkle={false}
          clickPulse
          theme="dark"
        >
          <button className="logout-text" onClick={handleLogout}>
            Logout
          </button>
        </StarBorder>
      </div>

      {/* carousel: in front of the rays */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "500px",
        }}
      >
        <DepthCarousel
          items={items}
          depth={220}
          spread={90}
          tilt={22}
          tiltDirection="right"
          perspective={1400}
          visibleCards={4}
          falloff={0.2}
          blur={0}
          autoplay={false}
          loop
          cardWidth={300}
          cardHeight={380}
          radius={18}
          tint="transparent"
          duration={700}
          ease="power3.out"
          autoplayDelay={3200}
          showControls
          showIndicators
        />
      </div>
    </div>
  );
}
export default Success;
