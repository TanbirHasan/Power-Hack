import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { SetUser, User } from '../App';


const BillingPagedata = () => {
        const user = useContext(User);
        const setUser = useContext(SetUser)

       
        const [isloading,setIsloading] = useState(false)

      //   useEffect(() => {
      //     fetch("http://localhost:7000/api/billing-list")
      //     .then(res => res.json())
      //     .then(data => {
      //           setBilling(data);
      //           setIsloading(false)
      //     }
      // )
      //   },[billing])

      axios
        .get("http://localhost:7000/api/billing-list")
        .then((response) => {
          if(response.status === 200){
            console.log(response.status);
           setUser(response.data)
        //   setIsloading(!isloading)
          }
          else{
            setUser(" ");

          }
        
       
        })
        .catch((error) => {
          console.error(error);
        });



   

    return (
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Billing Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Paid Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user) => (
                <tr>
                  <td>id</td>
                  {isloading ? <td>"Generating Id"</td> : <td>{user?._id}</td>}

                  <td>{user?.fullname}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.paidamount}</td>
                  <td>
                    <button>Delete/Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default BillingPagedata;