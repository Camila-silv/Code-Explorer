const possibleErrors = [
  "typeMismatch",
  "valueMissing",
  "customError",
  "tooShort",
  "patternMismatch",
];

const errorMessages = {
  name: {
    typeMismatch: "Nome inválido, preencha corretamente o campo.",
    valueMissing: "Campo vázio, preenchan com um nome válido",
    tooShort: "Nome inválido, o nome está muito curto.",
    customError: "Nome inválido, preencha corretamente o campo.",
    patternMismatch: "Nome inválido, preencha corretamente o campo.",
  },
  email: {
    typeMismatch: "E-mail inválido, preencha corretamente o campo.",
    valueMissing: "Campo vázio, preenchan com um e-mail válido",
    tooShort: "E-mail inválido, o e-mail está muito curto.",
    patternMismatch: "E-mail inválido, preencha corretamente o campo.",
    customError: "E-mail inválido, preencha corretamente o campo.",
  },
  message: {
    typeMismatch: "Mensagem inválida, preencha corretamente o campo.",
    valueMissing: "Campo vázio, preenchan com uma mensagem válida",
    tooShort: "Mensagem inválida, a mensagem está muito curta.",
    customError: "Mensagem inválida, preencha corretamente o campo.",
  },
  subjectTitle: {
    valueMissing: "Campo vázio, selecione uma opção",
    customError: "Campo vázio, selecione uma opção",
  },
};

export { possibleErrors, errorMessages };
