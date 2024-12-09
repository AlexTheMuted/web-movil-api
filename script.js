let cryptoData = []; // Variable para almacenar los datos de las criptomonedas

// Función para obtener los precios
async function fetchCryptoPrices() {
  const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
  const container = document.getElementById('crypto-list');

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Error fetching the data.');

    cryptoData = await response.json(); // Almacenar los datos en la variable global

    displayCryptoData(cryptoData); // Mostrar los datos iniciales
  } catch (error) {
    container.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

// Función para mostrar las criptomonedas en el contenedor
function displayCryptoData(data) {
  const container = document.getElementById('crypto-list');
  container.innerHTML = ''; // Limpiar el contenedor

  data.forEach(crypto => {
    const cryptoDiv = document.createElement('div');
    cryptoDiv.className = 'crypto';
    cryptoDiv.innerHTML = `
      <h2>${crypto.name} (${crypto.symbol.toUpperCase()})</h2>
      <p><strong>Precio Actual:</strong> $${crypto.current_price.toFixed(2)}</p>
      <p><strong>Market Cap:</strong> $${crypto.market_cap.toLocaleString()}</p>
      <p><strong>Volumen Total:</strong> $${crypto.total_volume.toLocaleString()}</p>
    `;
    container.appendChild(cryptoDiv);
  });
}

// Función para ordenar las criptomonedas por precio y actualizar la vista
function sortByPrice(order) {
  const sortedData = [...cryptoData].sort((a, b) => {
    return order === 'asc'
      ? a.current_price - b.current_price
      : b.current_price - a.current_price;
  });

  displayCryptoData(sortedData);
}

// Agregar eventos a los botones de ordenar
document.addEventListener('DOMContentLoaded', () => {
  fetchCryptoPrices(); // Obtener y mostrar las criptomonedas al cargar la página

  document.querySelector('.dropdown-content a:nth-child(1)').addEventListener('click', () => sortByPrice('asc'));
  document.querySelector('.dropdown-content a:nth-child(2)').addEventListener('click', () => sortByPrice('desc'));
});
