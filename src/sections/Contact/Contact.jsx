import React, { useRef, useState } from "react";
import { useIdioma } from "../../contexts/idioma-context"; // Importa el contexto del idioma
import emailjs from "@emailjs/browser"; // Importa EmailJS para enviar correos
import { IoReload } from "react-icons/io5";
import "./Contact.css"; // Importa los estilos CSS del formulario

const Contact = () => {
  const { language } = useIdioma(); // Obtiene el idioma actual del contexto

  // Estado para manejar el estado de carga del formulario
  const [loading, setLoading] = useState(false);

  // Referencia para el formulario (usado por EmailJS)
  const formRef = useRef();

  // Estado para manejar los datos del formulario
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Maneja los cambios en los inputs del formulario
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de la página al enviar el formulario

    setLoading(true); // Activa el estado de carga

    try {
      // Envía los datos del formulario mediante EmailJS
      emailjs.send(
        "service_bohsg5d", // ID del servicio en EmailJS
        "template_req8s8m", // ID de la plantilla en EmailJS
        {
          from_name: form.name,
          to_name: "Alejandro",
          from_email: form.email,
          to_email: "alejandromartin.ro.ce@gmail.com",
          message: form.message,
        },
        "UJDY_ccOghbt5BiJs" // Clave pública de EmailJS
      );

      setLoading(false); // Desactiva el estado de carga

      // Muestra un mensaje de éxito en el idioma correspondiente
      alert(
        language === "es"
          ? "¡Su mensaje ha sido enviado!"
          : "Your message has been sent!"
      );

      // Limpia el formulario después de enviar el mensaje
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false); // Desactiva el estado de carga en caso de error
      console.log(error);

      // Muestra un mensaje de error en el idioma correspondiente
      alert(language === "es" ? "Algo salió mal" : "Something went wrong");
    }
  };

  return (
    <section className="contact" id="contact">
      <p className="contactame-titulo">
        {language === "es" ? (
          <>
            ¡Ponte en<span> Contacto!</span>
          </>
        ) : (
          <>
            Contact <span>Me!</span>
          </>
        )}
      </p>
      <div className="formulario-contacto">
        <div className="section-contacto">
          {/* Barra de ventana estilo macOS */}
          <div className="ventana">
            <div className="macos-buttons">
              <span className="macos-button close"></span>
              <span className="macos-button minimize"></span>
              <span className="macos-button maximize"></span>
            </div>
            <div className="url-container">
              <div></div> {/* Este div estará vacío */}
              <div className="url">
                <p className="url-text">🔒alejandromartince.com</p>
              </div>
              <p className="reload">
                <IoReload />
              </p>
            </div>
            <div className="copiar">
              <img
                src="/assets/Extras/copy.svg"
                alt="copy"
                style={{ width: "2rem", height: "1.5rem" }}
              />
            </div>
          </div>

          {/* Título y subtítulo del formulario */}
          <div className="contact-title-container">
            <h1 className="contact-title">
              {language === "es"
                ? "¡Pongámonos en contacto!"
                : "Let's have a conversation!"}
            </h1>
            <p className="contact-subtitle">
              {language === "es"
                ? "¿Tienes dudas, curiosidad o quieres charlar sobre algún proyecto? Escríbeme cuando quieras, ¡estaré encantado de ayudarte!"
                : "Do you have questions, curiosity, or just want to chat about a project? Write me whenever you want, I'll love to know about you!"}
            </p>
          </div>

          {/* Formulario de contacto */}
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            {/* Campo de nombre */}
            <label htmlFor="name" className="label">
              {language === "es" ? "Nombre" : "Name"}
            </label>
            <input
              id="name"
              name="name"
              required
              onChange={handleChange}
              value={form.name}
              type="text"
              placeholder={
                language === "es" ? "Introduce tu nombre" : "Enter your name"
              }
              className="input-name"
            />

            {/* Campo de correo electrónico */}
            <label htmlFor="email" className="label">
              {language === "es" ? "Correo electrónico" : "Email"}
            </label>
            <input
              id="email"
              name="email"
              required
              onChange={handleChange}
              value={form.email}
              type="email"
              placeholder={
                language === "es" ? "Introduce tu correo" : "Enter your email"
              }
              className="input-email"
            />

            {/* Campo de mensaje */}
            <label htmlFor="message" className="label">
              {language === "es" ? "Mensaje" : "Message"}
            </label>
            <textarea
              id="message"
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder={
                language === "es"
                  ? "Me gustaría tener una reunión contigo para comentarte que..."
                  : "I would like to have a meeting with you to talk about..."
              }
              className="input-message"
            />

            {/* Botón de enviar */}
            <button type="submit" className="button-submit" disabled={loading}>
              {loading
                ? language === "es"
                  ? "Enviando Mensaje..."
                  : "Sending Message..."
                : language === "es"
                ? "Enviar Mensaje"
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
