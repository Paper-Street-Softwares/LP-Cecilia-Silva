/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.webp";
import { CiUser, CiPhone, CiMail, CiGlobe, CiChat1 } from "react-icons/ci";
import emailjs from "@emailjs/browser";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [uf, setUf] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const capitalizeFirstLetter = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Permite apenas letras e espaços
    setName(capitalizeFirstLetter(onlyLetters));
  };

  const handleUfChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-ZÀ-ÿ\s-]/g, ""); // Permite apenas letras, espaços e hífens
    setUf(capitalizeFirstLetter(onlyLetters));
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/[^\d]/g, ""); // Remove tudo que não for número
    setPhone(formatPhoneNumber(input));
  };

  const sendToWhatsapp = async () => {
    setIsSubmitting(true);

    const validationErrors = {};

    if (!name) {
      validationErrors.name = "O campo Nome é obrigatório.";
    } else if (!validateName(name)) {
      validationErrors.name = "Nome inválido.";
    }

    if (!phone) {
      validationErrors.phone = "O campo Telefone é obrigatório.";
    } else if (!validatePhone(phone)) {
      validationErrors.phone = "Número inválido.";
    }

    if (!email) {
      validationErrors.email = "O campo E-mail é obrigatório.";
    } else if (!validateEmail(email)) {
      validationErrors.email = "E-mail inválido.";
    }

    if (!uf) {
      validationErrors.uf = "O campo Cidade e Estado é obrigatório.";
    } else if (!validateUf(uf)) {
      validationErrors.uf = "Cidade e Estado inválido.";
    }

    if (!validateMessage(message)) {
      validationErrors.message = "O campo mensagem é obrigatório.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      to_name: name,
      name,
      phone,
      email,
      uf,
      to_email: email,
      message,
    };

    try {
      const response = await emailjs.send(
        "service_79yzhx9",
        "template_mhpelei",
        templateParams,
        "HhY_ngFZdJ35Ugc0H"
      );
      console.log(
        "Mensagem enviada com sucesso:",
        response.status,
        response.text
      );

      setName("");
      setPhone("");
      setEmail("");
      setUf("");
      setMessage("");
      setIsSubmitting(false);
      alert(
        "Recebemos os seus dados com sucesso! Em breve nossa equipe entrará em contato. Obrigado!"
      );
      window.location.reload();
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      alert("Houve um erro ao enviar o e-mail. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  const validateName = (name) => {
    const namePattern = /^[a-zA-ZÀ-ÿ\s]{5,}$/; // Permite pelo menos 5 caracteres (letras e espaços)
    return namePattern.test(name.trim());
  };

  const validatePhone = (phone) => {
    const cleanedPhone = phone.replace(/\D/g, ""); // Remove caracteres não numéricos
    return cleanedPhone.length >= 10; // Pelo menos 10 dígitos
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email.trim());
  };

  const validateUf = (uf) => {
    return uf.trim().length >= 5; // Requer ao menos 5 caracteres para Cidade e Estado
  };

  const validateMessage = (message) => !!message;

  const formatPhoneNumber = (phoneNumber) => {
    let cleaned = phoneNumber.replace(/\D/g, ""); // Remove tudo que não for número

    if (cleaned.length > 11) cleaned = cleaned.slice(0, 11); // Limita a 11 dígitos

    // Formatação dinâmica conforme o número é digitado
    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 6)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    if (cleaned.length <= 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(
        6
      )}`;
    }
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7
    )}`;
  };

  return (
    <div className=" bg-primary p-6 rounded-[10px] w-full desktop1:w-full h-auto">
      <div className="w-full text-paragraph3 phone3:text-paragraph4 ">
        {/* <h1 className="w-full mb-2 font-medium text-colorWhite">Fale conosco</h1> */}
        {/* Nome */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <CiUser />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Nome"
              required
            />
          </div>
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        {/* Telefone */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <CiPhone />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Telefone"
              required
            />
          </div>
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        {/* Email */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <CiMail />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        {/* Cidade/Estado */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <CiGlobe />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="uf"
              value={uf}
              onChange={handleUfChange}
              placeholder="Cidade e Estado"
              required
            />
          </div>
          {errors.uf && <p className="text-red-500">{errors.uf}</p>}
        </div>
        {/* Mensagem */}
        <div className="mb-6">
          <div className="flex mb-2 text-gray-500 tablet1:mb-0">
            <div className="flex items-start justify-center w-12 px-1 bg-bgSectionLight">
              <CiChat1 className="mt-[14px]" />
            </div>
            <textarea
              className="w-full px-1 py-2 border-0 rounded-none"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem"
              required
            />
          </div>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        {/* Botão */}
        <button
          type="button"
          className="flex items-center w-full font-medium text-bgSectionDark bg-primary transition-all rounded-lg h-10 phone2:h-12 hover:scale-105"
          onClick={sendToWhatsapp}
          disabled={isSubmitting}
        >
          <div className="flex items-center justify-center w-full">
            <img
              src={WhatsAppIcon}
              className="w-6 h-6 mr-2 phone2:w-8 phone2:h-8"
              alt="WhatsApp Icon"
            />
            <p>{isSubmitting ? "Enviando..." : "Enviar mensagem"}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsappForm;
