import React, {Component} from 'react'
import pablo from '../resources/img/dramas/pablo.jpg';

class Drama extends Component {


    constructor(props){
        super(props);

        this.state = {dramas : []};
    }

    componentWillMount() {
        fetch('https://ministerioruta316-7fc25.firebaseio.com/dramas.json')
            .then((response) => {
                return response.json()
            })
            .then((dramasParam) => {
                var dramaData = [];
                for (var key in dramasParam) {
                    var dramaTemp = {
                        id : key,
                        actors_quantity: dramasParam[key].actors_quantity,
                        descripcion: dramasParam[key].descripcion,
                        image: dramasParam[key].image,
                        name: dramasParam[key].name,
                        time: dramasParam[key].time,
                        video_url: dramasParam[key].video_url
                    }
                    dramaData.push(dramaTemp);
                }
                this.setState({ dramas: dramaData});
            })
    }


    createCard = () => {
        let card = [];

        for (let i = 0; i < this.state.dramas.length; i++) {
            card.push(
            <div className="movie-card">
                <div className="movie-header manOfSteel">
                    <div className="header-icon-container">
                        <a href="#">
                            <i className="fa fa-play header-icon"></i>
                        </a>
                    </div>
                </div>

                <div className="movie-content">
                    <div className="movie-content-header">
                        <a href="#">
                            <h3 className="movie-title">{this.state.dramas[i].name}</h3>
                        </a>

                    </div>
                    <div className="movie-info">
                        <div className="info-section">
                            <label>Tiempo</label>
                            <span>{this.state.dramas[i].time}</span>
                        </div>

                        <div className="info-section">
                            <label>Cantidad de actores</label>
                            <span>{this.state.dramas[i].actors_quantity}</span>
                        </div>

                        <div className="info-section">
                            <label>Referencias</label>
                            <span>{this.state.dramas[i].descripcion}</span>
                        </div>
                    </div>
                </div>

            </div>

            )
        }
        return card;
    }


    render() {

        return (

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="drama">
                <div className="my-auto">
                    <h2 className="mb-5">Dramas {this.state.dramas.length}</h2>

                    <h3 className="mb-0">Obras</h3>

                    {this.createCard()}

                    <h3 className="mb-0">Musicales</h3>
                    <div className="movie-card">
                        <div className="movie-header manOfSteel">
                            <div className="header-icon-container">
                                <a href="#">
                                    <i className="fa fa-play header-icon"></i>
                                </a>
                            </div>
                        </div>

                        <div className="movie-content">
                            <div className="movie-content-header">
                                <a href="#">
                                    <h3 className="movie-title">Pablo el Emisario</h3>
                                </a>

                            </div>
                            <div className="movie-info">
                                <div className="info-section">
                                    <label>Tiempo</label>
                                    <span>45 min</span>
                                </div>

                                <div className="info-section">
                                    <label>Cantidad de actores</label>
                                    <span>30 personas</span>
                                </div>

                                <div className="info-section">
                                    <label>Referencias</label>
                                    <span>Libro de Hechos</span>
                                </div>


                            </div>
                        </div>

                    </div>


                    <h3 className="mb-0">Openings</h3>
                    <div className="movie-card">
                        <div className="movie-header manOfSteel">
                            <div className="header-icon-container">
                                <a href="#">
                                    <i className="fa fa-play header-icon"></i>
                                </a>
                            </div>
                        </div>

                        <div className="movie-content">
                            <div className="movie-content-header">
                                <a href="#">
                                    <h3 className="movie-title">Pablo el Emisario</h3>
                                </a>

                            </div>
                            <div className="movie-info">
                                <div className="info-section">
                                    <label>Tiempo</label>
                                    <span>45 min</span>
                                </div>

                                <div className="info-section">
                                    <label>Cantidad de actores</label>
                                    <span>30 personas</span>
                                </div>

                                <div className="info-section">
                                    <label>Referencias</label>
                                    <span>Libro de Hechos</span>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

            </section>

        );

    }
}

export default Drama;