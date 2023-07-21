import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function MediaCard({ card }) {
  return (
    <Card
      sx={{
        textAlign: "center",
        marginBottom: "30px",
        // "&:hover": {
        //   transform: "scale(1.25)",
        // },
        cursor:"pointer",
        borderRadius: "24px",
        boxShadow: "0px 48px 80px -3px rgb(0 0 0 / 7%)",
        marginTop: "56px",
        transition:
          "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
      }}
    >
      <CardMedia
        sx={{
          transitionDelay: "0.1s",
          transitionDuration:"1.5s",
          height: 250,
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        image={card.img}
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="p"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {card.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          {card.des}
        </Typography>
      </CardContent>
    </Card>
  );
}
