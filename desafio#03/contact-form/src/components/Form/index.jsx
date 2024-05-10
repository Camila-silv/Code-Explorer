import { useState } from "react";
import { possibleErrors, errorMessages } from "../../assets/apps/errors";
import { InputField } from "../index";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjectTitle, setSubjectTitle] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectTitleError, setSubjectTitleError] = useState("");
  const [messageError, setMessageError] = useState("");

  const emailRegex = "^[a-zA-Z][a-zA-Z0-9]{3,}@[a-zA-Z]{3,}.[a-zA-Z]{2,}$";

  const sendData = (e) => {
    e.preventDefault();

    const called = {
      name: name,
      email: email,
      subjectTitle: subjectTitle,
      message: message,
    };

    console.log(called);
  };

  const validateEntry = (input) => {
    let errorMessage = "";

    invokeErrorMessage(errorMessage, input);
  };

  const invokeErrorMessage = (errorMessage, input) => {
    possibleErrors.forEach((message) => {
      if (input.validity[message]) {
        errorMessage = errorMessages[input.name][message];
      }
    });

    const inputValidator = input.checkValidity();

    if (!inputValidator) {
      switch (input.name) {
        case "name":
          setNameError(errorMessage);
          break;
        case "email":
          setEmailError(errorMessage);
          break;
        case "subjectTitle":
          setSubjectTitleError(errorMessage);
          break;
        case "message":
          setMessageError(errorMessage);
          break;
      }
    } else {
      switch (input.name) {
        case "name":
          setNameError("");
          break;
        case "email":
          setEmailError("");
          break;
        case "subjectTitle":
          setSubjectTitleError("");
          break;
        case "message":
          setMessageError("");
          break;
      }
    }
  };

  const validateInputs = () => {
    let errorMessage = "";

    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => invokeErrorMessage(errorMessage, input));
  };

  return (
    <form className="form" onSubmit={sendData}>
      <InputField name="email" lbl="E-mail" error={emailError}>
        <input
          name="email"
          type="email"
          placeholder="Digite um e-mail válido"
          maxLength={40}
          min={6}
          id="email"
          className="input-group__input input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          onInvalid={(e) => e.preventDefault()}
          onBlur={(e) => validateEntry(e.target)}
          pattern={emailRegex}
        />
      </InputField>

      <InputField name="name" lbl="Nome" error={nameError}>
        <input
          name="name"
          type="text"
          placeholder="Digite seu nome"
          maxLength={50}
          minLength={3}
          id="name"
          className="input-group__input input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          onInvalid={(e) => e.preventDefault()}
          onBlur={(e) => validateEntry(e.target)}
          pattern="^[a-zA-Z]+$"
        />
      </InputField>

      <InputField name="subjectTitle" lbl="Assunto" error={subjectTitleError}>
        <select
          name="subjectTitle"
          id="subjectTitle"
          className="input-group__input input-group__select input"
          value={subjectTitle}
          onChange={(e) => setSubjectTitle(e.target.value)}
          required
          onInvalid={(e) => e.preventDefault()}
          onBlur={(e) => validateEntry(e.target)}
        >
          <option value=""></option>
          <option value="suporte">suporte</option>
          <option value="teste1">teste1</option>
          <option value="teste2">teste2</option>
          <option value="teste3">teste3</option>
        </select>
      </InputField>

      <InputField name="message" lbl="Mensagem" error={messageError}>
        <textarea
          name="message"
          id="message"
          placeholder="Digite sua mensagem aqui"
          maxLength={300}
          minLength={30}
          className="input-group__textarea input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          onInvalid={(e) => e.preventDefault()}
          onBlur={(e) => validateEntry(e.target)}
        ></textarea>
      </InputField>

      <input
        type="submit"
        className="form__button"
        value="Enviar"
        onClick={validateInputs}
      />
    </form>
  );
}
