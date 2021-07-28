import React, {Component} from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class UserDetails extends Component {

    state = {
        users: [
            {
                id:1,
                age : 25,
                name : 'Calvin',
                surname: 'Seabala',
                location: 'Mamotintane',
            },
            {
                id:2,
                age : 25,
                name : 'Tyson',
                surname: 'Mothlabeng',
                location: 'Matlala',
            },
            {
                id:3,
                age : 17,
                name : 'Andries',
                surname: 'Sebola',
                location: 'Tzaneen',
            } ,
            {
                id:4,
                age : 18,
                name : 'Richard',
                surname: 'Bra Richie',
                location: 'Bendor',
            },
        ]

    };




    render() {
        const UserDetails = this.state.users.map((user,id) => {
            return (
                <div  key={id}>
                    <p className={'content-item'}>
                        {user.name}  {user.surname} {this.ConfirmAge(user.age)}
                    </p>

                </div>

            )
        });

        return (
            <div className={'container'}>

            <h1> Welcome</h1>
           <div className={'row'}>
               {UserDetails}
           </div>
            </div>
        );
    }
    ConfirmAge = (age) => {
        let message ='';

        if (age > 18){
             message =  'you are old enough'
            return message;
        }
        else{
            message = 'You are not old enough'
            return message;
        }

    }


}
