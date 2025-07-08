import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import content from "../../content/content";
import services from "../../content/services";
import ModalComponent from "./ModalComponent";
import ServiceDetailCard from "../cards/ServiceDetailCard";

export default function AcordionModalServices() {
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
          ? "1px solid rgba(0, 0, 0, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)",
      borderTop:
        expanded === panel
          ? "1px solid rgba(0, 0, 0, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)",
    };
  };

  return (
    <div className="w-full">
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
            <h1 className="font-bold font-secondFont">Demais áreas</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="flex flex-col gap-[8px] font-secondFont text-paragraph4 text-paragraphLight">
              {/* Link 1 */}
              <ModalComponent
                header={services.moreServices.demaisAreas.service1.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.demaisAreas.service1.img.img}
                    subtitle={
                      services.moreServices.demaisAreas.service1.cardSubtitle
                    }
                    description={
                      services.moreServices.demaisAreas.service1.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service1.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.demaisAreas.service1.name}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 2 */}
              <ModalComponent
                header={services.moreServices.demaisAreas.service2.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.demaisAreas.service2.img.img}
                    subtitle={
                      services.moreServices.demaisAreas.service2.cardSubtitle
                    }
                    description={
                      services.moreServices.demaisAreas.service2.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service2.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.demaisAreas.service2.name}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 3 */}
              <ModalComponent
                header={services.moreServices.demaisAreas.service3.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.demaisAreas.service3.img.img}
                    subtitle={
                      services.moreServices.demaisAreas.service3.cardSubtitle
                    }
                    description={
                      services.moreServices.demaisAreas.service3.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service3.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.demaisAreas.service3.name}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 4 */}
              <ModalComponent
                header={services.moreServices.demaisAreas.service4.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.demaisAreas.service4.img.img}
                    subtitle={
                      services.moreServices.demaisAreas.service4.cardSubtitle
                    }
                    description={
                      services.moreServices.demaisAreas.service4.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service4.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.demaisAreas.service4.name}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 5 */}
              <ModalComponent
                header={services.moreServices.demaisAreas.service5.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.demaisAreas.service5.img.img}
                    subtitle={
                      services.moreServices.demaisAreas.service5.cardSubtitle
                    }
                    description={
                      services.moreServices.demaisAreas.service5.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service5.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.demaisAreas.service5.name}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 6 */}
              <ModalComponent
                header={services.moreServices.demaisAreas.service6.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.demaisAreas.service6.img.img}
                    subtitle={
                      services.moreServices.demaisAreas.service6.cardSubtitle
                    }
                    description={
                      services.moreServices.demaisAreas.service6.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service6.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.demaisAreas.service6.name}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 7 */}
              <ModalComponent
                header={services.moreServices.demaisAreas.service7.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.demaisAreas.service7.img.img}
                    subtitle={
                      services.moreServices.demaisAreas.service7.cardSubtitle
                    }
                    description={
                      services.moreServices.demaisAreas.service7.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service7.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.demaisAreas.service7.name}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 8 */}
              <ModalComponent
                header={services.moreServices.demaisAreas.service8.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.demaisAreas.service8.img.img}
                    subtitle={
                      services.moreServices.demaisAreas.service8.cardSubtitle
                    }
                    description={
                      services.moreServices.demaisAreas.service8.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service8.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.demaisAreas.service8.name}
                  </span>
                </button>
              </ModalComponent>

              {/* Link 9 */}
              <ModalComponent
                header={services.moreServices.demaisAreas.service9.name}
                content={
                  <ServiceDetailCard
                    img={services.moreServices.demaisAreas.service9.img.img}
                    subtitle={
                      services.moreServices.demaisAreas.service9.cardSubtitle
                    }
                    description={
                      services.moreServices.demaisAreas.service9.cardDescription
                    }
                    buttonLabel={services.moreServices.ctaButtons.buttonLabel}
                    buttonIcon={services.moreServices.ctaButtons.icon}
                    buttonLink={
                      services.moreServices.demaisAreas.service9.buttonLink
                    }
                  />
                }
              >
                <button className="flex text-blue-600">
                  <span>{services.moreServices.arrowIcon}</span>
                  <span className="ml-2 text-left text-blue-600 text-paragraph3">
                    {services.moreServices.demaisAreas.service9.name}
                  </span>
                </button>
              </ModalComponent>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
