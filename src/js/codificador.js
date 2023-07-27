export const encriptarTexto = (texto) => {
  return texto
    .replaceAll("e", "enter")
    .replaceAll("E", "Enter")
    .replaceAll("i", "imes")
    .replaceAll("I", "Imes")
    .replaceAll("a", "ai")
    .replaceAll("A", "Ai")
    .replaceAll("o", "ober")
    .replaceAll("O", "Ober")
    .replaceAll("u", "ufat")
    .replaceAll("U", "Ufat");
};

export const descriptogafarTexto = (texto) => {
  return texto
    .replaceAll("ufat", "u")
    .replaceAll("Ufat", "U")
    .replaceAll("ober", "o")
    .replaceAll("Ober", "O")
    .replaceAll("ai", "a")
    .replaceAll("Ai", "A")
    .replaceAll("imes", "i")
    .replaceAll("Imes", "I")
    .replaceAll("enter", "e")
    .replaceAll("Enter", "E");
};
