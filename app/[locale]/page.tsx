"use client";

import React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Fade,
  Slide,
} from "@mui/material";
import { getTheme } from "@theme/theme";
import { useColorMode } from "@contexts/color-mode";
import { useTranslations } from "next-intl";
import Footer from "@components/Front/Footer";
import NavBar from "@components/Front/Navbar";
import Contact from "@components/Front/Contact";

export default function AICampaignPage() {
  const { mode } = useColorMode();
  const theme = getTheme(mode);
  const t = useTranslations("HomePage");

  return (
    <>
      {/* Animated Header using Slide */}
      <Slide in={true} direction="down" timeout={800}>
        <Box>
          <NavBar />
        </Box>
      </Slide>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        {/* Hero Section with Fade */}
        <Fade in={true} timeout={1000}>
          <Box
            component="section"
            sx={{
              display: "flex",
              backgroundColor: theme.palette.background.paper,
              borderColor: "divider",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 4,
              mb: 4,
              p: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h2" gutterBottom>
                {t("hero.title")}
              </Typography>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                {t("hero.subtitle")}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {t("hero.description")}
              </Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Box
                component="img"
                src="/img1.jpg"
                alt={t("hero.imageAlt")}
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  height: 300, // set a fixed height for cropping
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Box>
          </Box>
        </Fade>

        <hr />

        {/* New Grid Section: Two Sets */}
        <Fade in={true} timeout={1200}>
          <Box component="section" sx={{ mb: 4 }}>
            {/* First Grid Set */}
            <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
              <Grid item xs={12} md={4}>
                <Typography variant="body1">
                  {t("grid.first.text1")}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src="/about-hero-bg.svg"
                  alt={t("grid.first.imageAlt")}
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 3,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1">
                  {t("grid.first.text2")}
                </Typography>
              </Grid>
            </Grid>

            {/* Second Grid Set */}
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src="/WhatsApp Image 2025-03-15 at 14.31.28.jpeg"
                  alt={t("grid.second.imageAlt")}
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 3,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1">
                  {t("grid.second.text")}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src="/WhatsApp Image 2025-03-15 at 14.31.35.jpeg"
                  alt={t("grid.second.imageAlt")}
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 3,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Fade>

        {/* Content Section with Fade */}
        <Fade in={true} timeout={1400}>
          <Box component="section" sx={{ mb: 4 }}>
            <Typography variant="body1" paragraph>
              {t("content.paragraph1")}
            </Typography>

            <Paper sx={{ p: 2, my: 4 }}>
              <Box
                component="img"
                src="/WhatsApp Image 2025-03-15 at 14.31.41.jpeg"
                alt={t("content.paper1.alt")}
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 1,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                color="text.secondary"
              >
                {t("content.paper1.caption")}
              </Typography>
            </Paper>

            <Typography variant="body1" paragraph>
              {t("content.paragraph2")}
            </Typography>
          </Box>
        </Fade>
      </Container>

      {/* Contact Section with Fade */}
      <Fade in={true} timeout={1600}>
        <Box>
          <Contact />
        </Box>
      </Fade>

      {/* Animated Footer with Slide */}
      <Slide in={true} direction="up" timeout={800}>
        <Box>
          <Footer />
        </Box>
      </Slide>
    </>
  );
}
