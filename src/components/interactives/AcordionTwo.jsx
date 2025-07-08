import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import content from "../../content/content";

export default function AccordionExpandDefault() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getPanelStyle = (panel) => {
    return {
      boxShadow:
        expanded === panel ? "0px 0px 10px -5px rgba(0, 0, 0, 0.1)" : "none",
      border:
        expanded === panel
          ? "1px solid transparent"
          : "1px solid rgba(0, 0, 0, 0.1)",
      borderTop: expanded === panel ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
    };
  };

  return (
    <div>
      {/* Accordion 1 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={getPanelStyle("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question1.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question1.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={getPanelStyle("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question2.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question2.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 3 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        style={getPanelStyle("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question3.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question3.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 4 */}
      <Accordion
        className="mb-[3%]"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={getPanelStyle("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>
            <h1 className="font-bold font-secondFont">
              {content.texts.faq.questions.question4.question}
            </h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="font-secondFont text-paragraph4 text-paragraphLight ">
              {content.texts.faq.questions.question4.answer}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
