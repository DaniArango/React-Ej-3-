import React, { Component } from "react";
import '../Home/Home.css'
import foto from '../assets/Dani.jpg'

export class Home extends Component {
    render() {
        return (
            <div className='Homecss'>
                <h2>Un poco sobre mi</h2>
                
                <p className="texto">Nací el 21 de mayo de 1993 (géminis empedernida, si soy), colombiana y paisa de pura cepa,
                    con un amor infinito a la lectura (pero no me pregunte por cual), a la música (tan variada,
                    que no sabes si estoy despechada, enojada, enamorada, con depre, en la mas grande felicidad),
                    a los tatuajes (pobre de mi madre que no los aguanta), entre otras tantas cosas.
                    Maquilladora profesional (aunque solo para mi), con amor y afinidad a la fotografía,
                    a la naturaleza, a la playa, a la montaña, a muchas cosas en general
                    (esto es como un perfil de Tinder), amable, sincera (aunque tirando, solo a veces,
                    un poco del géminis en mi), empática, perfeccionista (la mayoría de las veces),
                    amigable, sociable pero tímida (o no, no lo sé realmente), y con ganas de comerme el mundo
                    (por eso estamos en la situación que estamos, porque es lo que nos merecemos), directa
                    (la menor parte del tiempo, porque si me da vergüenza a veces),
                    tímida (hasta tomar confianza, luego no me callas) y un mar de contradicciones también.
                </p> <br />

                <h2 className="conocimientos">Conocimientos desarrollados</h2>
                
                <p>
                    Hasta el momento, he logrado aprender con mucho esfuerzo:
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>Sequelize</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul><br />
                    Aun queda mucho mas por aprender, pero sigo en camino para ser una gran <b>Desarrolladora Web</b>
                </p>

                <br />

                <p> ¡Gracias por su visita!, vuelva pronto... O no </p>

                <img src={foto} width="300px" />

            </div>
        );
    }
}

export default Home;