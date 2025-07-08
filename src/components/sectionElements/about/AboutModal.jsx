import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content, { abstractions } from "../../../content/content";
import Button from "../../interactives/Button";
import { MoveRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import { color } from "framer-motion";

export default function AboutModal() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle(abstractions.titleModal);
    setModalContent(
      <p className="text-paragraph3">
        <p className="mb-[20px]">{abstractions.subtitleModal}</p>
        {content.texts.about.modal}
        <p className="mb-[20px]"> {content.texts.about.modalCtaButton}</p>
        <div>
          <Button
            aria-label={content.texts.about.ctaButtonAriaLabel}
            label={content.texts.about.ctaButtonText}
            animation={false}
            className="hover:scale-105 bg-buttonColor text-labelButtons"
            icon={<FaWhatsapp color="text-labelButtons" size={24} />}
            labelColor="text-labelButtons"
          />
        </div>
      </p>
    );
    setVisible(true);
  };

  return (
    <div>
      <Button
        className="mt-[48px] text-labelButtons"
        label={content.texts.about.buttonModalLabelAbout}
        onClick={onClick}
        removeAnchor={true}
        removeTarget={true}
        animation={true}
        icon={<MoveRight />}
      />
      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </div>
  );
}
