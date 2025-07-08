import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function CardModal({ visible, onClose, header, content }) {
  return (
    <div>
      <div>
        <Dialog
          className="font-secondFont"
          header={<h2 style={{ fontSize: "16px" }}>{header}</h2>}
          visible={visible}
          onHide={onClose}
          style={{ width: "50vw" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        >
          {content}
        </Dialog>
      </div>
    </div>
  );
}
