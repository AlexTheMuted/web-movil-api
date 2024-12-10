let cryptoData = []; // Variable para almacenar los datos de las criptomonedas

// Función para obtener los precios actuales de criptomonedas
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
    cryptoDiv.dataset.price = crypto.current_price; // Almacenar el precio como atributo data

    // Crear un ID único para el gráfico
    const chartId = `chart-${crypto.id}`;

    cryptoDiv.innerHTML = `
      <h2>${crypto.name} (${crypto.symbol.toUpperCase()})</h2>
      <p><strong>Precio Actual:</strong> $${crypto.current_price.toFixed(2)}</p>
      <p><strong>Market Cap:</strong> $${crypto.market_cap.toLocaleString()}</p>
      <p><strong>Volumen Total:</strong> $${crypto.total_volume.toLocaleString()}</p>
      <canvas id="${chartId}" width="400" height="200"></canvas>
    `;
    container.appendChild(cryptoDiv);

    // Generar el gráfico inicial
    createPriceChart(chartId, crypto.name, crypto.current_price);
  });
}

// Función para crear el gráfico de precio inicial
function createPriceChart(chartId, name, price) {
  const ctx = document.getElementById(chartId).getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [name], // Etiqueta: Nombre de la criptomoneda
      datasets: [
        {
          label: 'Precio ($)',
          data: [price], // Precio como datos
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Función para obtener precios históricos
async function fetchHistoricalPrices(cryptoId, days) {
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=${days}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`Error fetching historical data for ${cryptoId}.`);

    const data = await response.json();
    return data.prices.map(([timestamp, price]) => ({
      timestamp: new Date(timestamp),
      price,
    })); // Convertir timestamp a Date
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

// Crear gráficos históricos
function createHistoricalChart(chartId, name, historicalData) {
  const ctx = document.getElementById(chartId).getContext('2d');

  const labels = historicalData.map(point => point.timestamp.toLocaleDateString());
  const prices = historicalData.map(point => point.price);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: `Precio de ${name} ($)`,
          data: prices,
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1,
          tension: 0.3, // Para suavizar líneas
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

  // Función para ordenar las monedas por precio
function sortByPrice(order) {
    const sortedData = [...cryptoData].sort((a, b) =>
      order === 'asc' ? a.current_price - b.current_price : b.current_price - a.current_price
    );
    displayCryptoData(sortedData); // Actualizar la vista
  }
  
  // Evento para manejar cambios en el desplegable
  document.getElementById('sortOrder').addEventListener('change', function () {
    const order = this.value; // Obtener el valor del select
    sortByPrice(order); // Llamar a la función de ordenar
  });

  // Función para manejar la barra de búsqueda
function handleSearch() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const allCryptos = document.querySelectorAll('.crypto');
  
    allCryptos.forEach(crypto => {
      const name = crypto.dataset.name;
      const symbol = crypto.dataset.symbol;
  
      if (name.includes(searchTerm) || symbol.includes(searchTerm)) {
        crypto.style.display = ''; // Mostrar
      } else {
        crypto.style.display = 'none'; // Ocultar
      }
    });
  }

  // Función para filtrar las criptomonedas según la búsqueda
function filterCryptoData() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase(); // Obtener el texto de la barra de búsqueda
  
    const filteredData = cryptoData.filter(crypto => {
      return crypto.name.toLowerCase().includes(searchTerm) || crypto.symbol.toLowerCase().includes(searchTerm);
    });
  
    displayCryptoData(filteredData); // Mostrar los resultados filtrados
  }
  
  // Agregar el evento a la barra de búsqueda
  document.getElementById('search-bar').addEventListener('input', filterCryptoData);
  
  

// Llama a la función al cargar la página
fetchCryptoPrices();
