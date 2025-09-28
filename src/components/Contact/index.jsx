import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Headings from "../../utilities/Headings";
import GradientButton from "../../utilities/GradientButton";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const playClick = () => {
    const audio = new Audio("/click.mp3"); // same as Navbar
    audio.play();
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    playClick(); // play sound on form submission
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  const handleIconClick = (url) => {
    playClick(); // play sound
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 10,
        px: 4,
        background: "linear-gradient(135deg, #000000, #434343)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Headings>Contact Me</Headings>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 2,
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 4,
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "#fff" } }}
          InputProps={{
            sx: {
              color: "#fff",
              borderRadius: "10px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.3)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#00ffff" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00ffff",
              },
            },
          }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "#fff" } }}
          InputProps={{
            sx: {
              color: "#fff",
              borderRadius: "10px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.3)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#00ffff" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00ffff",
              },
            },
          }}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={form.message}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "#fff" } }}
          InputProps={{
            sx: {
              color: "#fff",
              borderRadius: "10px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.3)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#00ffff" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00ffff",
              },
            },
          }}
        />
        <GradientButton>Send Message</GradientButton>
      </Box>

      <Box sx={{ mt: 6, display: "flex", gap: 3 }}>
        <FacebookIcon
          onClick={() => handleIconClick("https://www.facebook.com/bipin.pariyar.568/")}
          sx={{
            fontSize: "2.5rem",
            cursor: "pointer",
            transition: "0.3s ease",
            "&:hover": { transform: "scale(1.2)", color: "#3b5998" },
          }}
        />
        <GitHubIcon
          onClick={() => handleIconClick("https://github.com/bipin-Pariyar2003")}
          sx={{
            fontSize: "2.5rem",
            cursor: "pointer",
            transition: "0.3s ease",
            "&:hover": { transform: "scale(1.2)", color: "#333" },
          }}
        />
        <InstagramIcon
          onClick={() =>
            handleIconClick("https://www.instagram.com/pariyar_bipin/?__pwa=1")
          }
          sx={{
            fontSize: "2.5rem",
            cursor: "pointer",
            transition: "0.3s ease",
            "&:hover": { transform: "scale(1.2)", color: "#c13584" },
          }}
        />
        <LinkedInIcon
          onClick={() =>
            handleIconClick("https://www.linkedin.com/in/bipin-pariyar-767782208/")
          }
          sx={{
            fontSize: "2.5rem",
            cursor: "pointer",
            transition: "0.3s ease",
            "&:hover": { transform: "scale(1.2)", color: "#0077b5" },
          }}
        />
      </Box>
    </Box>
  );
}
