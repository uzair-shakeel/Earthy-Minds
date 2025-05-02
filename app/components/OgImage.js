import { ImageResponse } from "next/server";

export const size = {
  width: 1200,
  height: 630,
};

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#EDE8D0",
          fontFamily: "Cinzel, serif",
          padding: 40,
          position: "relative",
        }}
      >
        {/* Background texture or gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#EDE8D0",
            opacity: 0.7,
          }}
        />

        {/* Logo and brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            zIndex: 10,
          }}
        >
          {/* Replace with your actual logo import */}
          <div
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#ff9d00",
              borderRadius: "50%",
              marginRight: 20,
            }}
          />
          <div>
            <h1
              style={{
                fontSize: 48,
                fontWeight: "bold",
                color: "#000",
                margin: 0,
              }}
            >
              Earthy Minds
            </h1>
            <p
              style={{
                fontSize: 24,
                color: "#000",
                margin: 0,
              }}
            >
              Rise of the Wild
            </p>
          </div>
        </div>

        {/* Main tagline */}
        <h2
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "#000",
            textAlign: "center",
            margin: "30px 0",
            maxWidth: 900,
            zIndex: 10,
          }}
        >
          Eco Habit Tracker meets Fantasy Adventure
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 28,
            color: "#333",
            textAlign: "center",
            maxWidth: 800,
            zIndex: 10,
          }}
        >
          Turn real-world actions into quests. Level up. Save nature.
        </p>

        {/* Call to action */}
        <div
          style={{
            marginTop: 50,
            backgroundColor: "#ff9d00",
            color: "#000",
            padding: "16px 32px",
            fontSize: 24,
            fontWeight: "bold",
            borderRadius: 12,
            border: "2px solid #000",
            zIndex: 10,
          }}
        >
          Join the Quest Today
        </div>
      </div>
    ),
    { ...size }
  );
}
