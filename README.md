# web-movil-api
Este proyecto es una página web que muestra información sobre el precio y el rendimiento de varias criptomonedas en tiempo real, con la posibilidad de ordenar los resultados por precio y buscar criptomonedas específicas. Descripción General del Proyecto: Propósito: El proyecto tiene como objetivo proporcionar una interfaz sencilla donde los usuarios puedan ver los precios actuales de las criptomonedas y también interactuar con la lista de criptomonedas mediante funciones de búsqueda y ordenación.

Tecnologías Utilizadas: 
HTML: Estructura básica de la página. 
CSS: Estilos y diseño visual, incluyendo transiciones y efectos en los botones. 
JavaScript: Funcionalidad dinámica de la página, como la carga de precios desde una API, la interacción con el usuario y la actualización de la vista en tiempo real. 
API de CoinGecko: Para obtener datos en tiempo real sobre los precios, el volumen de mercado y otras métricas de las criptomonedas.

Estructura de la Página: 
  Header: Contiene el título "Precio de las CryptoMonedas" y tiene una imagen de fondo que cubre todo el espacio del encabezado. 
  Contenedor Principal: Ordenar por Precio: Un dropdown (menú desplegable) que permite al usuario ordenar las criptomonedas por su precio, de mayor a menor o de menor a mayor. 
  Barra de Búsqueda: Una barra de búsqueda para filtrar las criptomonedas por nombre o símbolo. 
  Lista de Criptomonedas: Una lista dinámica que muestra las criptomonedas con su precio actual, volumen de mercado y otras métricas. 
  Footer: Contiene enlaces a las redes sociales oficiales de Crypto.com, además del enlace al sitio web de Crypto.com y su logo. Este pie de página está fijado en la parte inferior de la página para que siempre sea            visible mientras el usuario navega. 
  
Funcionalidades: 
  Carga Dinámica de Datos: Los precios de las criptomonedas se obtienen desde la API de CoinGecko mediante una llamada fetch(). Al obtener los datos, la página los muestra de manera dinámica. 
  Ordenación por Precio: El usuario puede ordenar las criptomonedas por su precio mediante el desplegable. 
  Búsqueda de Criptomonedas: Los usuarios pueden buscar criptomonedas por su nombre o símbolo. El código filtra los resultados en tiempo real mientras el usuario escribe en la barra de búsqueda. 
  Gráficos de Precios: Para cada criptomoneda, se genera un gráfico de barras mostrando su precio actual, utilizando la librería Chart.js. Esto ayuda a visualizar mejor los precios. 

Interactividad: 
  Hover Effects en Botones: El proyecto tiene efectos de hover para los botones y el logo de Crypto.com, lo que mejora la interacción del usuario al proporcionar retroalimentación visual cuando se pasa el ratón por                              encima. 
  Animaciones Suaves: Se utiliza CSS para agregar animaciones suaves a los elementos, como la expansión de la barra de búsqueda y la transición en los botones. 
  Footer: El pie de página está diseñado para ser siempre visible en la parte inferior de la pantalla, gracias a la propiedad position: fixed. Incluye los enlaces a las redes sociales de Crypto.com. 
  Responsive Design: La página es responsiva, lo que significa que se ajusta bien a diferentes tamaños de pantalla. En dispositivos móviles o pantallas más pequeñas, el contenido del footer y los iconos se                                reorganizan para ser más legibles y accesibles.
  
Funcionalidad en detalle: 
  Obtención de Precios: El proyecto hace uso de la API de CoinGecko para obtener los datos de las criptomonedas. La función fetchCryptoPrices hace la solicitud HTTP para obtener la lista de criptomonedas y sus                               precios en tiempo real. Esta información se presenta de forma organizada con su nombre, símbolo, precio actual, volumen y capitalización de mercado. 
  Ordenar y Filtrar: La función sortByPrice permite al usuario ordenar las criptomonedas por precio, ya sea de mayor a menor o de menor a mayor. Los resultados se actualizan dinámicamente cuando el usuario cambia la                      opción en el menú desplegable. La función filterCryptoData permite buscar criptomonedas específicas mediante una barra de búsqueda. Filtra la lista según el término de búsqueda 
                    (nombre o símbolo) y solo muestra los resultados relevantes. 
  Gráficos: Se genera un gráfico para cada criptomoneda utilizando Chart.js. Estos gráficos son de tipo bar (barras), mostrando el precio actual de cada criptomoneda. También se planea la funcionalidad para mostrar              precios históricos con gráficos de tipo line, que permitirán ver la evolución de una criptomoneda durante varios días.  
  
  Conclusión: En este proyecto he representado una página de seguimiento en tiempo real de criptomonedas, con precios, gráficos en tiempo real. Añadiendo funciones como: Filtrar de mayor a menor precio y viceversa,                Una barra de búsqueda que permita al usuario ver la cripto moneda que desea buscar. 

  ¿Por qué elegiste esa API?

  Porque veía una idea más creativa y diferente a los demás.
  
  ¿Qué problemas tuviste y cómo los solucionaste?

  Tuve muchos problemas ya que las respuestas del JSON aveces daban muchos errores al filtrar por precio y también implementando la barra de búsqueda.
  
  Ponte una nota del 1 al 10, explica por qué te la pones y qué crees que podrías mejorar.

  Yo creo que me pondría un 9 ya que me ha costado mucho que el JSON no diese problemas, ya que la API de las crypto es limitada y aveces se quedaba colgada. También me costo encontrar una API que me implementase      los gráficos en tiempo real. Creo que podría mejorar en el entorno de las solicitudes de API de paginas de registro y con respuestas limitadas.
