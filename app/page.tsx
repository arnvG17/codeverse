"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function CodeverseBoot() {
  const router = useRouter();

  const handleEnterSystem = () => {
    router.push("/leaderboard"); // 👈 redirect to Round 1
  };

  const styles = {
    container: {
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },
    video: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    },
    image: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      zIndex: 1,
    },
    clickZone: {
      position: "absolute",
      left: "50%",
      top: "78%", // ⬇️ lowered slightly
      transform: "translate(-50%, -50%)",
      width: "28%", // ⬆️ made a bit wider
      height: "11%", // ⬆️ made a bit taller
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      opacity: 0,
      zIndex: 5,
      pointerEvents: "auto",
    },
  };

  return (
    <div style={styles.container}>
      {/* Background video */}
      <video autoPlay muted loop style={styles.video}>
        <source src="introvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground image */}
      

      {/* Invisible clickable area */}
      <button
        onClick={handleEnterSystem}
        aria-label="Enter the System"
        style={styles.clickZone}
      />
    </div>
  );
}
