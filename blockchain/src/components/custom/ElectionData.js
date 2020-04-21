import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ElectionData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            election_name: [],
            election_organizer: [],
            election_id: [],
            final: [],
            id: null,
        };
    }

    componentDidMount(){
        let currentComponent = this;
      
        axios.get('http://localhost:8000/api/electionName', {})
        .then(function(response){ 
            var data = response.data;
            currentComponent.setState({
                // election_name: data[0],
                // election_organizer: data[1],
                // election_id: data[2],
                final: data
            })
        })
        .catch(function(err){
            console.error(err);
        });

    }

    handleInputChange = (e) => {
        var name = e.target.innerHTML;
        var index = 0;
        for(let i = 0; i < this.state.election_name.length; i++){
            if(name === this.state.election_name[i]){
                index = i;
                break;
            }
        }
        var id = this.state.election_id[index];
        this.setState({
            id : id
        })
    };


    render(){
        const electionList = this.state.final.map(election => {
            return (
                <div className="contact" key={election.election_id}>
                    <li className="collection-item avatar">
                        <i className="material-icons circle blue darken-2">ballot</i>
                        <p><b>{election.election_name}</b></p>
                        <br></br>
                        <Link to={"/candidates/" + election.election_id} className="title" onClick={this.handleInputChange}><button id={election.election_id} className="waves-effect waves-light btn yellow darken-3">Add candidate</button></Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to={"/voteCount/" + election.election_id} className="title" onClick={this.handleInputChange}><button id={election.election_id} className="waves-effect waves-light btn red darken-3">View vote Count</button></Link>
                        
                    </li>
                </div>
            )
        }) 
        return(
            <div className="container">
                <ul className="collection">
                    <li className="collection-item avatar">
                        <h3>Elections</h3>
                    </li>
                        {electionList}
                </ul>
            </div>
        )
    }
}

export default ElectionData;