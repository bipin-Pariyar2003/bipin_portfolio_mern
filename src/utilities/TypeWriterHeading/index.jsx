// TypewriterHeading.jsx
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

export default function TypewriterHeading({ children }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const type = () => {
      index = 0;
      setDisplayedText("");
      const interval = setInterval(() => {
        setDisplayedText(children.slice(0, index + 1));
        index++;
        if (index === children.length) {
          clearInterval(interval);
          // wait until 10s total before restarting
          setTimeout(type, 10000 - children.length * 100);
        }
      }, 150); // typing speed
    };
    type();
  }, [children]);

  return (
    <Typography
      variant="h2"
      sx={{
        fontWeight: 700,
        mb: 2,
        color: "#fff",
        fontSize: { xs: "1.8rem", md: "3rem" },
        letterSpacing: 1,
        lineHeight: 1.2,
        whiteSpace: "nowrap",
      }}
    >
      {displayedText}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          backgroundColor: "#fff",
          marginLeft: "2px",
          verticalAlign: "bottom",
          animation: "smoothBlink 1.2s infinite",
        }}
      ></span>

      <style>{`
        @keyframes smoothBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Typography>
  );
}
