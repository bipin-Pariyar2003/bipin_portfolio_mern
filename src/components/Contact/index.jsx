import { useState } from "react";
import { Box, Container, TextField, Snackbar, Alert, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import Headings from "../../utilities/Headings";
import GradientButton from "../../utilities/GradientButton";
import FadeIn from "../../utilities/FadeIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const socials = [
  { icon: <GitHubIcon sx={{ fontSize: 20 }} />, url: "https://github.com/bipin-Pariyar2003", label: "GitHub" },
  { icon: <LinkedInIcon sx={{ fontSize: 20 }} />, url: "https://www.linkedin.com/in/bipin-pariyar-767782208/", label: "LinkedIn" },
  { icon: <InstagramIcon sx={{ fontSize: 20 }} />, url: "https://www.instagram.com/pariyar_bipin/?__pwa=1", label: "Instagram" },
  { icon: <FacebookIcon sx={{ fontSize: 20 }} />, url: "https://www.facebook.com/bipin.pariyar.568/", label: "Facebook" },
];

const fieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    background: "var(--surface)",
    color: "var(--espresso)",
    fontFamily: "var(--font-sans)",
    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
    "& fieldset": { borderColor: "var(--border)" },
    "&:hover fieldset": { borderColor: "var(--violet)" },
    "&.Mui-focused fieldset": { borderColor: "var(--cyan)", borderWidth: 2 },
    "&.Mui-focused": { boxShadow: "0 0 0 4px rgba(0, 229, 255, 0.1)" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "var(--font-sans)",
    color: "var(--mocha)",
    "&.Mui-focused": { color: "var(--cyan)" },
  },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleCloseSnackbar = () => setSnackbar((prev) => ({ ...prev, open: false }));
  const showSnackbar = (message, severity) => setSnackbar({ open: true, message, severity });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showSnackbar("Please fill out all fields before sending.", "warning");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      showSnackbar("Please enter a valid email address.", "warning");
      return;
    }
    emailjs
      .send("bipin_gmail_1976", "template_u2bao7h", form, "7wcq-gWY8bY03Dgpx")
      .then(
        () => { showSnackbar("Message sent — I'll get back to you soon.", "success"); setForm({ name: "", email: "", message: "" }); },
        (error) => { console.error(error); showSnackbar("That didn't go through. Please try again later.", "error"); }
      );
  };

  return (
    <Box component="section" id="contact" className="section">
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} aria-hidden="true">
        <div className="neon-blob neon-blob--coral" style={{ width: 440, height: 440, bottom: "-18%", left: "34%", opacity: 0.42 }} />
      </Box>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <Headings kicker="// contact">Let&apos;s talk</Headings>
          <Typography sx={{ textAlign: "center", color: "var(--mocha)", maxWidth: 500, mx: "auto", mt: -2, mb: 6, fontSize: "1rem", lineHeight: 1.75 }}>
            Have a project, an open role, or a question about something I built? The form and the email both work. Honest answers, quick replies.
          </Typography>
        </FadeIn>

        <FadeIn delay={120} y={22}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="glass-card"
            sx={{ p: { xs: 3, md: 5 }, borderRadius: "20px", display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField required label="Name" name="name" value={form.name} onChange={handleChange} variant="outlined" fullWidth sx={fieldStyles} />
            <TextField required label="Email" name="email" type="email" value={form.email} onChange={handleChange} variant="outlined" fullWidth sx={fieldStyles} />
            <TextField required label="Message" name="message" multiline rows={5} value={form.message} onChange={handleChange} variant="outlined" fullWidth sx={fieldStyles} />
            <FadeIn>
              <Box sx={{ textAlign: "center", mt: 1 }}>
                <GradientButton type="submit" variant="neon">Send message</GradientButton>
              </Box>
            </FadeIn>

            <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: 2, sm: 2.5 }, mt: 6, mb: 3 }}>
              {socials.map((s) => (
                <a key={s.label} className="neon-social" href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </Box>

            <Typography className="script" sx={{ textAlign: "center", color: "var(--mocha)", lineHeight: 1.6 }}>
              / or DM me — always happy to talk shop
            </Typography>
          </Box>
        </FadeIn>
      </Container>

      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled" sx={{ borderRadius: "10px", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.92rem" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
