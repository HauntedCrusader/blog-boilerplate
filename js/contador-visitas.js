document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("http://localhost:3000/visitas", {
      method: "POST"
    });

    const data = await response.json();

    document.getElementById("contador").textContent =
      `Total de visitas: ${data.total_visitas}`;
  } catch (error) {
    console.error(error);
    document.getElementById("contador").textContent =
      "Não foi possível carregar o contador.";
  }
});