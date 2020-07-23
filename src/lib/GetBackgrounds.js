const getBackgroundColor = (name) => {
  switch (name) {
    case "Inteligencia Artificial":
      return "#607d8b"
    case "Desarrollo Web":
      return "#546e7a"
    case "Seguridad Informática":
      return "#455a64"
    case "Desarrollo de Videojuegos":
      return "#37474f"
    default:
      return "#374a5d"
  }
}

export default getBackgroundColor
