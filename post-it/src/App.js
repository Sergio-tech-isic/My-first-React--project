import './App.css';
import { useState } from 'react';
import Post from './components/post'; 

function App() {
  document.title = "Post it"
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const glosaryItems = [
    {      title: "Embebido",
      content: "En informática, se refiere a la inclusión o integración de un objeto o funcionalidad dentro de otro. Por ejemplo, insertar un vídeo dentro de una página web es un ejemplo de contenido embebido."
    },
    {      title: "Submit (HTML):",
      content: "En HTML, el botón submit se utiliza dentro de un formulario para enviar los datos del formulario al servidor para su procesamiento. Se utiliza dentro de la etiqueta <form> y suele llevar el atributo type=submit."
    },
    {      title: "DOM (Document Object Model):",
      content: "Es una representación estructurada de un documento HTML o XML en forma de un árbol de nodos. Permite a los lenguajes de programación como JavaScript acceder y manipular la estructura y el contenido de la página web."
    },
    {      title: "Renderización",
      content: "En el contexto de desarrollo web, la renderización se refiere al proceso mediante el cual un navegador convierte el código HTML, CSS y JavaScript en una interfaz visual interactiva que el usuario puede ver e interactuar en su pantalla."
    },
    {      title: "Cache (Hardware)",
      content: "En hardware, una caché es una memoria de alta velocidad que almacena temporalmente datos o instrucciones frecuentemente utilizados para reducir el tiempo de acceso y mejorar el rendimiento del sistema."
    },
    {      title: "Cache (Software)",
      content: "En software, la caché es una memoria temporal que guarda copias de datos o archivos de acceso frecuente para acelerar la recuperación de estos datos en futuras solicitudes."
    },
    {      title: "Cast (Programación)",
      content: "En programación, hacer un cast significa convertir un valor de un tipo de dato a otro. Se utiliza cuando es necesario trabajar con diferentes tipos de datos o cuando se deben realizar cálculos que requieren un tipo específico de dato."
    },
    {      title: "Cast implícito",
      content: "Es la conversión automática que hace un lenguaje de programación de un tipo de dato a otro sin intervención explícita del programador. Suele ocurrir en lenguajes con tipado dinámico o fuerte."
    },
    {      title: "Lenguaje de programación declarativo",
      content: "Es un tipo de lenguaje de programación que describe lo que se desea obtener sin especificar cómo realizarlo. Ejemplos de lenguajes declarativos incluyen SQL y HTML. 3"
    },
    {      title: "Single page",
      content: "Una Single Page Application (SPA) es una aplicación web que se carga en una única página y actualiza dinámicamente el contenido sin recargar la página completa."
    },
    {      title: "Prefijo",
      content: "Prefijo es un elemento que se coloca al principio de una palabra o cadena para modificar su significado o función."
    },
    {      title: "Mnemotécnicos",
      content: "Técnicas o estrategias que ayudan a recordar información más fácilmente. En informática, pueden referirse a trucos o abreviaturas que facilitan recordar comandos, sintaxis, o procedimientos."
    },
    {      title: "Deployment",
      content: "En el desarrollo de software, deployment se refiere al proceso de poner una aplicación o sistema en un entorno de producción o en vivo, donde puede ser utilizada por los usuarios finales. Incluye la instalación, configuración, y actualización de software en servidores o dispositivos finales."
    },
    {      title: "Despliegue",
      content: "Es el término en español para deployment. Se refiere al proceso de hacer que una aplicación, sitio web o sistema esté disponible para su uso, generalmente en un servidor o plataforma. Puede incluir la configuración de la infraestructura y la implementación de actualizaciones."
    },
    {      title: "Nodo (Software)",
      content: " En software, un nodo es una entidad dentro de una red o sistema distribuido que puede realizar cálculos, almacenar datos o comunicarse con otros nodos. En un grafo o estructura de árbol, un nodo representa un punto de conexión o unidad de datos."
    },
    {      title: "HTML (HyperText Markup Language)",
      content: "Es el lenguaje de marcado estándar utilizado para crear páginas web. Define la estructura y el contenido de una página web utilizando etiquetas (<html>, <body>, <h1>, etc.). Es uno de los pilares fundamentales del desarrollo web."
    },
    {      title: "CSS (Cascading Style Sheets)",
      content: "Es un lenguaje de hojas de estilo utilizado para describir la presentación de documentos escritos en HTML o XML. CSS controla la apariencia visual de una página web, incluyendo colores, fuentes, disposición y diseño, mejorando la separación entre contenido y presentación."
    },
    {      title: "Hook",
      content: "En programación, un hook es un mecanismo que permite modificar o ampliar el comportamiento de un sistema o función sin alterar su código original. Los hooks son puntos de extensión o ganchos en los que un programador puede enganchar su propio código para ejecutar acciones adicionales antes o después de un evento específico."
    },
    {      title: "useState",
      content: "En React (una biblioteca de JavaScript para construir interfaces de usuario), los hooks permiten usar el estado y otras características de React en componentes funcionales, como el famoso useState o useEffect."
    },
    {      title: "Concepto",
      content: "El concepto es una idea o representación mental que agrupa características esenciales o comunes a una clase de objetos, hechos o fenómenos. Los conceptos permiten abstraer y simplificar la realidad al reducirla a una categoría general, facilitando la comprensión, comunicación y análisis de diversos elementos."
    }

  ];

  // Filtrar los posts por título
  const filteredPosts = glosaryItems.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra por el término de búsqueda
  );

  //Carga a el renderizador los resultados obtenidos
  const resultList = filteredPosts.map((post) => {
    return <Post title={post.title} content={post.content} />;
  });

  //Renderiza la pagina
  return (
    <div className='post it'> 
      <h1>Glosario</h1>
      <form>
        <input 
          type="text" 
          placeholder="Buscar por título..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado con el valor del input
        />
      </form>
      {resultList}
    </div>
  );
}

export default App;
