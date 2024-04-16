const Main = () => {
    return <main>
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/pizzas_selector_1600x900.jpg?rev=6a81e278-07fc-4e95-9ba1-361063f35adf&hash=B8B1264AB6FC3F4B1AE140EB390208CD" class="d-block w-100" alt="Pizza 1"/>
                </div>
                <div class="carousel-item">
                    <img src="https://th.bing.com/th/id/R.9e0caa8628009f5bb525d1e09604fda9?rik=dI0nOfBy3ahp1w&riu=http%3a%2f%2fvitaitaliantours.com%2fwp-content%2fuploads%2f2016%2f03%2fNeapolitan-Pizza-Margherita.jpg&ehk=Rk%2bfgzpAHbGig6ZHOExH6bwW62dG29BR4XPCsHqKBSI%3d&risl=1&pid=ImgRaw&r=0" class="d-block w-100" alt="Pizza 2" />
                </div>
                <div class="carousel-item">
                    <img src="https://th.bing.com/th/id/R.469eaee2b9ac36c27feedfd2796cee0a?rik=Rvec%2b%2bz8yQtN5g&riu=http%3a%2f%2fastrolabio.com.mx%2fwp-content%2fuploads%2f2015%2f11%2fPizza-Margherita.jpg&ehk=oLfkE5pRt3sWIYWRbo76Bpm4LZPNIJozQ3VuCCbX16M%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="Pizza 3"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </main>;
}

export default Main;