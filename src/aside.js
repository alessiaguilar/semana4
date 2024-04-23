const Aside = () => {
    return <form>
        <h1 class="d-flex justify-content-center">Regístrate aquí!</h1>
        <br />
        <div class="form-group">
            <label for="nombres">Nombres</label>
            <input type="text" id="nombres" class="form-control" required />
        </div>
        <br />
        <br />
        <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" id="apellidos" class="form-control" required />
        </div>
        <br />
        <br />
        <div class="form-group">
            <label for="correo">Correo</label>
            <input type="email" id="correo" class="form-control" aria-describedby="emailHelp" required />
        </div>
        <br />
        <br />
        <div class="form-group">
            <label for="contraseña">Contraseña</label>
            <input type="password" id="contraseña" class="form-control" required />
        </div>
        <br />

        <button type="submit" class="btn btn-primary" style="background-color: rgb(170, 7, 7); margin-left: 180px;">Enviar</button>
    </form>;
}

export default Aside;