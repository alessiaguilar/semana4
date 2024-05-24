import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Productos from './data/productos.json'
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return (
        <Container className="col-8">
            <Row className="justify-content-center">
                <Col>
                <h1 className="text-center text-e6110a">Bienvenido a</h1>
                <div className="text-center">
                        <img src="https://i.imgur.com/zcGb3W1.png" alt="Il Forno Magico" style={{ width: '300px', height: '150px' }} />
                    </div>
                    
                    <Carousel>
                        {Productos.map(it => (
                            <Carousel.Item onClick={(e) => {
                                e.preventDefault(); handleClick(it.slug)
                            }}>
                                <img className="d-block w-100" src={it.picture} alt={it.name} />
                                <Carousel.Caption>
                                    <h3>{it.name}</h3>
                                    <p>{it.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    <div className="py-4">
                        <p>¡Bienvenido(a) a Il Forno Magico, tu guía definitiva para todo lo relacionado con las pizzas! Sumérgete en el delicioso mundo de este manjar italiano y descubre su historia, variedades, recetas caseras, recomendaciones de pizzerías y mucho más.</p>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>
                                <strong>Explora Nuestra Galería de Delicias</strong> <p>Déjate tentar por nuestras imágenes irresistibles de pizzas recién horneadas. Desde las clásicas margaritas hasta las extravagantes cuatro estaciones, tenemos una pizza para satisfacer todos los antojos y gustos culinarios.</p>
                            </li>
                            <li>
                                <strong>Conoce la Historia de la Pizza</strong> <p>¿Sabías que la pizza tiene una historia fascinante que se remonta a la antigua Roma? Descubre cómo este modesto platillo se convirtió en un fenómeno mundial y en un elemento esencial de la cultura gastronómica italiana.</p>
                            </li>
                            <li>
                                <strong>Sumérgete en el Mundo de las Pizzas</strong> <p>Explora nuestra sección dedicada a los diferentes tipos de pizzas que existen en todo el mundo. Desde la clásica pizza napolitana hasta las innovadoras pizzas de California, te llevaremos en un viaje por los sabores más auténticos de cada región.</p>
                            </li>
                            <li>
                                <strong>Inspírate con Nuestras Recetas Caseras</strong> <p>¿Te gustaría preparar tu propia pizza en casa? ¡Te tenemos cubierto! Descubre nuestras recetas paso a paso para crear pizzas deliciosas y personalizadas en la comodidad de tu cocina. Desde la masa perfectamente crujiente hasta las coberturas más creativas, aprenderás todos los secretos para convertirte en un maestro pizzero.</p>
                            </li>
                            <li>
                                <strong>Descubre las Mejores Pizzerías</strong> <p>¿Buscas la mejor pizza de tu ciudad? Consulta nuestras recomendaciones de pizzerías locales y descubre los lugares más populares y auténticos para satisfacer tu antojo de pizza. Desde acogedores restaurantes familiares hasta modernas pizzerías artesanales, te ayudaremos a encontrar tu nueva favorita.</p>
                            </li>
                            <li>
                                <strong>Únete a la Comunidad de Amantes de la Pizza</strong> <p>Sigue nuestras redes sociales y únete a una comunidad apasionada de amantes de la pizza. Comparte tus experiencias, recetas favoritas y recomendaciones de pizzerías con otros aficionados mientras te sumerges en el apasionante mundo de las pizzas.</p>
                            </li>
                            <li>
                                <strong>¡Comienza tu Aventura Culínaria Hoy!</strong> <p>No esperes más para explorar el emocionante mundo de las pizzas. ¡Comienza tu viaje culinario con PizzaMundo y descubre un universo de sabores, texturas y experiencias que te dejarán con ganas de más!</p>
                            </li>
                        </ul>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default Main;