import Productos from './data/productos.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const Producto = Productos.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{Producto.name}</h1>
        <hr></hr>
        <img src={Producto.picture}></img>
        <p>{Producto.description}</p>
    </>);
}

export default Single;