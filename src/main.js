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
                    <h1 className="text-center">¡Descubre la revolución en limpieza con nuestra nueva publicación de productos de limpieza!</h1>
                    
                    <Carousel>
                        {
                                Productos.map(it => {
                                return (<Carousel.Item onClick={(e) => {
                                    e.preventDefault(); handleClick(it.slug)
                                }}>
                                    <img className="d-block w-100" src={it.picture}></img>
                                    <Carousel.Caption>
                                        <h3>{it.name}</h3>
                                        <p>{it.description}</p>
                                    </Carousel.Caption>

                                </Carousel.Item>);
                            })
                        }
                    </Carousel>

                    <div className="py-4">
                        <p>En un mundo donde la limpieza es esencial, nosotros te ofrecemos una solución completa y eficaz para mantener tu hogar, oficina o cualquier espacio impecable y reluciente.</p>
                        <p>¿Qué te ofrecemos?</p>
                        <ul>
                            <li>
                                <strong>Variedad de productos:</strong> Desde desinfectantes hasta detergentes, pasando por limpiadores multiusos, nuestra publicación tiene todo lo que necesitas para abordar cualquier tarea de limpieza.
                            </li>
                            <li>
                                <strong>Calidad superior:</strong> Nuestros productos están formulados con ingredientes de primera calidad que garantizan resultados excepcionales sin comprometer la seguridad ni el medio ambiente.
                            </li>
                            <li>
                                <strong>Eficiencia probada:</strong> Con años de experiencia en el mercado, nuestros productos han demostrado su eficacia en numerosos hogares y establecimientos comerciales. ¡Confía en lo probado y verdadero!
                            </li>
                        </ul>
                        <p>No pierdas más tiempo y únete a la legión de clientes satisfechos que confían en nuestra publicación de productos de limpieza. ¡Haz de la limpieza una tarea fácil y disfruta de un espacio impecable en todo momento!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;