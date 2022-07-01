import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SetUser, User } from '../App';


const BillingPagedata = () => {
        const user = useContext(User);
        const setUser = useContext(SetUser);
        const [pagecount,setPagecount] = useState(0);
        const [page,setPage] = useState(0);
        const [size,setSize] = useState(10)

       
        const [isloading,setIsloading] = useState(false)

        useEffect(() => {
          fetch(
            `http://localhost:7000/api/billing-list?page=${page}&size=${size}`
          )
            .then((res) => res.json())
            .then((data) => {
              setUser(data);
              setIsloading(false);
            });
        },[page,size,user])


      useEffect(() => {
        fetch("http://localhost:7000/api/billings-count")
        .then(res => res.json())
        .then(data => {
          const count = data.count;
          const pages = Math.ceil(count/10);
          setPagecount(pages);
        })

      },[])


      const handledelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
          const url = `http://localhost:7000/api/delete-billing/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
              const remaining = user.filter((user) => user._id !== id);
              setUser(remaining);
            });
        }
      };


        const handleedit = (id) => {
         
        
            const url = `http://localhost:7000/api/update-billing/${id}`;
            fetch(url, {
              method: "PATCH",
            })
              .then((res) => res.json())
              .then((result) => {
                const remaining = user.filter((user) => user._id !== id);
                setUser(remaining);
              });
       
        };



      // axios
      //   .get(`http://localhost:7000/api/billing-list?page=${page}&size=${size}`)
      //   .then((response) => {
      //     if(response.status === 200){
      //       console.log(response.status);
      //      setUser(response.data)
      // //    setIsloading(!isloading)
      //     }
      //     else{
      //       setUser(" ");

      //     }
        
       
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });



   

    return (
      <div className="px-10">
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
              {user?.map((user,index) => (
                <tr>
                  <td>{index}</td>
                  {isloading ? <td>"Generating Id"</td> : <td>{user?._id}</td>}

                  <td>{user?.fullname}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.paidamount}</td>
                  <td>
                    <button
                      className="btn btn-outline btn-warning mx-1"
                      onClick={() => handledelete(user._id)}
                    >
                      Delete
                    </button>
                    <Link to={`/form/${user._id}`}>
                      <button className="btn btn-outline btn-accent">
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          {[...Array(pagecount).keys()].map((number) => (
            <button
              onClick={() => setPage(number)}
              className={page === number ? "selected" : ""}
            >
              {number + 1}
            </button>
          ))}
          <select name="" onChange={(e) => setSize(e.target.value)} id="">
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    );
};

export default BillingPagedata;