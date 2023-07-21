import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function FAQ() {
  const faq = [
    {
      ques: "How does the billing work?",
      ans: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ques: "What is your cancellation policy?",
      ans: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ques: "Can other info be added to an invoice?",
      ans: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      ques: "How do I change my Account Details?",
      ans: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  return (
    <Box flex={1}>
      {faq.map((faq, i) => {
        return (
          <Accordion
            key={faq}
            sx={{
              marginBottom: "30px",
              backgroundColor: "#30CC9B",
              borderRadius: "15px",
              textAlign: "start",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${i + ""}a-content`}
              id={`panel${i + ""}a-header`}
            >
              <Typography>{faq.ques}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ color: "white" }}>
              <Typography>{faq.ans}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
