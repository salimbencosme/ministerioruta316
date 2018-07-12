import React, {Component} from 'react'
import Card from "./Card";

class Agenda extends Component{

    constructor(props){
        super(props);
        this.state = {presentation : []};
    }

    componentWillMount() {
        fetch('https://ministerioruta316-7fc25.firebaseio.com/agenda.json')
            .then((response) => {
                return response.json()
            })
            .then((agenda) => {

                var arr = [];

                for(var x in agenda){
                    arr.push(agenda[x]);
                }

                this.setState({ presentation: arr })

                console.log(this.state.presentation);
            })
    }


    createAgenda(){
/*
        const listCards = this.state.presentation.map((data) =>
            alert(data.year)
        );
        return ({listCards});

        */

        var x = [1,2,3,4].map( function(item) {return item * 10;});
    }


    render(){

        return(

            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="agenda">
                <div className="my-auto">
                    <h2 className="mb-5">Agenda</h2>
                    <h3 className="mb-0">Ruta de programas</h3>
                    <div className="subheading mb-3">Les dijo: «Vayan por todo el mundo y anuncien las buenas nuevas a toda criatura.» <strong>Marcos 16:15</strong></div>
                    <p>Ni se enciende una lámpara para cubrirla con un cajón. Por el contrario, se pone en la repisa para que alumbre a todos los que están en la casa. Hagan brillar su luz delante de todos, para que ellos puedan ver las buenas obras de ustedes y alaben al Padre que está en el cielo. <strong>Mateo 5:15-16</strong></p>
                    <br/>
                    <div className="demo">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-timeline">
                                        {this.createAgenda()}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>

        );

    }


}

export default Agenda;