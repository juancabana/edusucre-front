import React, { Component } from "react";
import imageslider1 from "../../core/assets/img/imageSlider.png";
import imageslider2 from "../../core/assets/img/imageSlider2.jpg";
import imageslider3 from "../../core/assets/img/imageSlider.png";
import imageslider4 from "../../core/assets/img/imageSlider4.png";
import "./slider.css";

class slider extends Component {
  render() {
    return (
      <main>
        <section className="main">
          <div className="slider">
            <div className="pages">
              <div className="page1">
                <div className="textoPage">
                  <h1 className="title">Configura tu sitio</h1>
                  <p className="paragraph">
                    Es el lugar ideal en donde puedes publicar tu información y
                    todos los elementos necesarios que identifican a tu
                    institución.
                  </p>
                </div>
                <img className="img" src={imageslider1} alt="" />
              </div>
              <div className="page2">
                <div className="textoPage">
                  <h1 className="title">Facilidad para estudiar</h1>
                  <p className="paragraph">
                    Ofrecemos servicios que ayudan a publicar talleres en
                    internet para que sus estudiantes los resuelvan y logren
                    ampliar sus conocimientos por medio de la interacción con el
                    internet de una manera mucho más amplia y diferente.
                  </p>
                </div>
                <img className="img" src={imageslider2} alt="" />
              </div>
              <div className="page3">
                <div className="textoPage">
                  <h1 className="title">Calidad en Servicios</h1>
                  <p className="paragraph">
                    Los servicios en línea que ofrecemos a los docentes tienen
                    una amplia cobertura de funciones, desde el control de
                    asistencia hasta la piblicación de las notas de cada
                    estudiante de manera clara y sencilla
                  </p>
                </div>
                <img className="img" src={imageslider3} alt="" />
              </div>
              <div className="page4">
                <div className="textoPage">
                  <h1 className="title">Consulte lo que desee</h1>
                  <p className="paragraph">
                    Nuestro servicio de mensajeria institucional, consulta de
                    notas y estado financiero para los estudiantes, les permite
                    estar actualizados con la institución de forma directa por
                    medio de la página web en cualquier momento.
                  </p>
                </div>
                <img className="img" src={imageslider4} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default slider;
