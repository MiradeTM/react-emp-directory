import React from "react";

function UserCard({ firstName, lastName, picture, phone, email, dob }) {
  return (
    <tr>
        <th scope= "row"><img alt= {picture} src= {picture} /></th>
        <td className= "col-md-3"> {firstName} {lastName}</td>
        <td className= "col-md-3"> {phone}</td>
        <td className= "col-md-3"> {email}</td>
        <td className= "col-md-3"> {dob}</td>
    </tr>
    );
}

export default UserCard;