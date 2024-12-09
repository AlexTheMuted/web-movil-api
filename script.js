async function fetchCryptoPrices() {
  const apiUrl = 'https://price-api.crypto.com/price/v1/tags';
  const container = document.getElementById('crypto-list');

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Error fetching the data.');

    const data = await response.json();

    // Limpia el contenedor
    container.innerHTML = '';

    // Itera sobre las monedas y muestra la información
    data.data.forEach(tag => {
      console.log(tag);
      const cryptoDiv = document.createElement('div');
      cryptoDiv.className = 'crypto';
      cryptoDiv.innerHTML = `
        <h2>${tag.tag_name}</h2>
        <p><strong>ID:</strong> ${tag.display_tag_code}</p>
        <p><strong>Precio:</strong> €${tag.price_change_24h.toFixed(5)}</p>
      `;
      container.appendChild(cryptoDiv);
    });
  } catch (error) {
    container.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

// Llama a la función al cargar la página
fetchCryptoPrices();
