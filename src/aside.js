const Aside = () =>{
    return <aside className="col-8">
        <h1 className="d-flex justify-content-center">CONTACTAR</h1>
        <form>
            <div className="form-group row">
                <div className="col-6">
                    <label for="">Nombre</label>
                    <input type="text" className="form-control" placeholder="Valentin"></input>
                </div>
                <div className="col-6">
                    <label for="">Apellido</label>
                    <input type="text" className="form-control" placeholder="Fernandez"></input>
                </div>
            </div>
            <br></br>
            <div className="form-group">
                    <label for="">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ejemplo@test.com" required></input>
                </div>
                <br></br>
                <div className="form-group">
                    <label for="">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"></input>
                </div>
                <br></br>
                <div className="form-group">
                    <label for="">Mensaje</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escriba su mensaje aqui"></textarea>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </aside>
}

export default Aside;