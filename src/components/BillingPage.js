
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import BillingPagedata from './BillingPagedata';
import Form from './Form';

const BillingPage = () => {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const res = await axios.get(`http://localhost:7000/search?q=${query}`);
    setData(res.data);
  };
  if (query.length === 0 || query.length > 2) fetchData();
}, [query]);

console.log(data)


        return (
          <div>
            <div className="flex justify-evenly items-center p-2 bg-red-200 mx-20">
              <div className="flex ">
                <h2 className="text-xl font-semibold mx-2">Billings</h2>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setQuery(e.target.value.toLowerCase())}
                  className="border-solid border -2"
                />
              </div>
              <label for="my-modal-3" class="btn modal-button">
                open modal
              </label>
            </div>

            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative">
                <label
                  for="my-modal-3"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <Form />
              </div>
            </div>
            <BillingPagedata />
          </div>
        );
};

export default BillingPage;