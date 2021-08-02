import React, {useState} from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const UserDetails = () => {
    const ConfirmAge = (age) => {


        if (age > 18){

            return age;
        }
        else{

            return age;
        }

    }

    const [usersData,setUsers] = useState(
        [
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

    );
    usersData.sort((a,b) => parseInt(a.age) - parseInt(b.age));

    const Details = usersData.map((user,id) => {
        return (
            <div  key={id}>
                <p className={'content-item'}>
                    {user.name}  {user.surname} {ConfirmAge(user.age)}
                </p>

            </div>

        )
    }
    )

    return (
        <div className={'container'}>

            <h2 className={'h2'}> List Of Users in Asc Order</h2>
            <div className={'row'}>
                {Details}
            </div>
        </div>

    );

}
export default UserDetails;


