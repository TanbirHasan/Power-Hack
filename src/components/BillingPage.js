
import { useRef, useState } from 'react';
import BillingPagedata from './BillingPagedata';
import Form from './Form';

const BillingPage = () => {

  const [searchresult,setSearchresult] = useState([])




  const searching = () => {
   
  }


        return (
          <div>
            <div className="flex justify-evenly items-center p-2 bg-red-200 mx-20">
              <div className="flex ">
                <h2 className="text-xl font-semibold mx-2">Billings</h2>
                <input
                  type="text"
                  placeholder="Search"
               
                
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