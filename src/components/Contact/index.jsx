import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here (e.g., send to email or API)
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };
  const handleFacebook = () => {
    window.open("https://www.facebook.com/bipin.pariyar.568/", "_blank");
  };

  const handleGitHub = () => {
    window.open("https://github.com/bipin-Pariyar2003", "_blank");
  };
  const handleInstagram = () => {
    window.open("https://www.instagram.com/pariyar_bipin/?__pwa=1", "_blank");
  };
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/bipin-pariyar-767782208/", "_blank");
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 10,
        px: 4,
        background: "linear-gradient(135deg, #000000, #434343)", // dark gradient
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#fff",
          mb: 6,
          textShadow: "0 0 8px #fff, 0 0 16px #00ffff",
          fontWeight: 700,
        }}
      >
        Contact Me
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
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
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00ffff",
              },
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
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00ffff",
              },
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
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00ffff",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00ffff",
              },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #00ffff, #ff00ff)",
            color: "#fff",
            py: 1.5,
            fontWeight: 600,
            borderRadius: "12px",
            boxShadow: "0 0 12px #00ffff, 0 0 24px #ff00ff",
            "&:hover": {
              boxShadow: "0 0 24px #00ffff, 0 0 48px #ff00ff",
              transform: "scale(1.05)",
            },
            transition: "0.3s ease",
          }}
        >
          Send Message
        </Button>
      </Box>
      <Box sx={{ mt: 6, display: "flex", gap: 3 }}>
        <FacebookIcon
          onClick={handleFacebook}
          sx={{
            fontSize: "2.5rem",
            cursor: "pointer",
            transition: "0.3s ease",
            "&:hover": { transform: "scale(1.2)", color: "#3b5998" },
          }}
        />
        <GitHubIcon
          onClick={handleGitHub}
          sx={{
            fontSize: "2.5rem",
            cursor: "pointer",
            transition: "0.3s ease",
            "&:hover": { transform: "scale(1.2)", color: "#333333" },
          }}
        />
        <InstagramIcon
          onClick={handleInstagram}
          sx={{
            fontSize: "2.5rem",
            cursor: "pointer",
            transition: "0.3s ease",
            "&:hover": { transform: "scale(1.2)", color: "#c13584" },
          }}
        />
        <LinkedInIcon
          onClick={handleLinkedIn}
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
