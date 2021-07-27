import React, {Component} from "react";


export default class UserDetails extends Component {
    state = {
        age : 20,
        name : 'Calvin',
        surname: 'Seabala',
        location: 'Mamotintane',

    };
    
    render() {
        return (
            <div>
            <h1> Welcome</h1>
                <h2>{this.state.name}  {this.state.surname} </h2>
                <h2>|{this.state.age} {this.ConfirmAge()} </h2>
            </div>
        );
    }
    ConfirmAge (){
        let message ='';

        if (this.state.age > 18){
             message =  'you are old enough'
        }
        else{
            message = 'You are not old enough'
        }
        return message;
    }


}
