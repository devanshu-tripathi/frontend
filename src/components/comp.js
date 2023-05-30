import React from 'react';
import './comp.css';
import Imgge from './photo/t.jpeg';
function Comp() {
    return (
         <div className='id'>
        
            <img src={Imgge} className='rr' />
            <div className='hello'>
                   <div className='id2'>
                   <h3>Name</h3>
                   <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                   <h4>Instagram</h4>
                   <button type="button" class="btn btn-primary" className='ii'>Accepted</button>
                   <button type="button" class="btn btn-secondary" className='iii'>Barter</button>
                 
            </div>
                   <div className='id1'>
                   <button type="button" class="btn btn-primary" className='B3'>DETAIL</button>
                   <button type="button" class="btn btn-outline-primary" className='B2'>INVITE</button>
                   <button type="button" class="btn btn-light" className='B1'>ANALYSE</button>
                   </div>
        </div>
      </div>
    );
}

export default Comp;