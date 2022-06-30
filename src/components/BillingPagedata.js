import React, { useContext } from 'react';
import { User } from '../App';


const BillingPagedata = () => {
        const user = useContext(User);
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
                  <td>Genrating Id</td>
                  <td>{user?.fullname}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.paidamount}</td>
                  <td><button>Delete/Update</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default BillingPagedata;