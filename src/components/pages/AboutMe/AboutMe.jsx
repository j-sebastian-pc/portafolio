import blueasy from "/public/img/blue.png";
import tuPro from "/public/img/tu pro.png";
import pijam from "/public/img/caramelozzz.png";

export const AboutMe = () => {
  const openBlue = () => {
    window.open('https://blueasy04.netlify.app', '_blank');
  };
  const openPijam = () => {
    window.open('https://pijamascaramelozzz.netlify.app/', '_blank');
  };
  const openBleux = () => {
    window.open('https://iniciotuproveedor.netlify.app/', '_blank');
  };

  return (
    <section className="bg-gray-100 min-h-screen p-10">
      <div className="text-center text-gray-600 py-8">
        
        <p className="text-lg">
          En esta sección, puedes ponerte en contacto conmigo directamente. Si tienes preguntas o necesitas que realice algún proyecto, estoy aquí para ayudarte. Además, encontrarás enlaces directos a mi perfil de GitHub, así como mi número de teléfono y correo electrónico para un contacto más directo o para explorar todos mis proyectos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {[
          {
            name: 'Blueasy',
            image: blueasy,
            openLink: openBlue,
            description: 'Blueasy es un sitio web impresionante construido con HTML y JavaScript, caracterizado por su diseño en tonos azules que transmiten calma y profesionalismo. Ofrece interacciones dinámicas y un diseño receptivo para una experiencia de usuario fluida. Alojado en Netlify, garantiza velocidad y accesibilidad a nivel global. En resumen, Blueasy combina arte, diseño y programación en una experiencia web excepcional.',
          },
          {
            name: 'CarameloZzz',
            image: pijam,
            openLink: openPijam,
            description: 'CarameloZzz es un sitio web excepcional construido con HTML y CSS, resaltando por su diseño acogedor y relajante. Ofrece una experiencia de compra en línea fluida y amigable para el usuario, con una amplia variedad de pijamas de alta calidad para elegir. Además, está alojada en una plataforma confiable, lo que garantiza una navegación rápida y accesible en todo momento. En resumen, la página de pijamas fusiona comodidad, estilo y conveniencia en una experiencia de compra en línea única.',
          },
          {
            name: 'Tu Proveedor',
            image: tuPro,
            openLink: openBleux,
            description: 'Tu Proveedor es una plataforma destacada construida con HTML y JavaScript, caracterizada por su diseño intuitivo que facilita la realización de pedidos y la exploración de productos. Ofrece una amplia gama de productos, incluyendo las últimas novedades, y permite a los usuarios realizar pedidos de manera rápida y sencilla. Además, está alojado en una plataforma confiable, lo que garantiza una experiencia de usuario ágil y accesible. En resumen, el sitio web de pedidos y productos combina comodidad, variedad y eficiencia en una plataforma de compras en línea excepcional.',
          },
        ].map((project, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer transition-transform transform duration-300 ease-in-out"
            onClick={project.openLink}
          >
            <img
              className="w-full h-56 object-cover"
              src={project.image}
              alt={`${project.name} Captura`}
            />
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2">{project.name}</div>
              <p className="text-gray-700 text-base">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
