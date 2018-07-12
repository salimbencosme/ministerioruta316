import React, {Component} from 'react'

class Card extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="timeline">
                <div className="timeline-content">
                    <span className="year">{this.props.year}</span>
                    <div className="content-inner">
                        <span className="icon"><i className={this.props.icon}></i></span>
                        <h3 className="title">{this.props.church}</h3>
                        <p className="description">
                            <ul>
                                <li><strong>Fecha: </strong>{this.props.start_date === this.props.end_date ? this.props.start_date : this.props.start_date - this.props.end_date}</li>
                                <li><strong>Drama: </strong>{this.props.drama}</li>
                                <li><strong>Dirección: </strong>{this.props.address}</li>
                                <li><strong>Location: </strong><a className="colorWhite" href={this.props.location_link} target="_blank">Google Map</a></li>
                            </ul>
                            {this.props.task}
                        </p>
                    </div>
                </div>
            </div>

        );
    }

}

export default Card;