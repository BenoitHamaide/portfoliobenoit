import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.scss';

function ContactForm() {
  const [state, handleSubmit] = useForm("mvonngzr");
  const [showLoader, setShowLoader] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Afficher le loader
    setShowLoader(true);

    // Attendre 1 seconde (simulant le chargement)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Soumettre le formulaire
    handleSubmit(event);

    // Cacher le loader après la soumission
    setShowLoader(false);
  };

  if (state.succeeded) {
    return <p>Merci pour le message</p>;
  }

  return (
    <div className="contact-form">
      <form className="contact-formulaire" onSubmit={handleFormSubmit}>
        <span className="heading">Contacter moi</span>
        <label htmlFor="name">Nom:</label>
        <input type="text" required="" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required="" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required=""></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          {showLoader ? 'Chargement...' : 'Envoyer'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;



    

