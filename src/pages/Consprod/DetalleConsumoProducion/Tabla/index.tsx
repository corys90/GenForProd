import React from 'react';
import './style.css';

function Tabla(props: any) {

  return (
    <div className='container-fluid'>
        <div className='mb-4 fw-bold'>
          {props.header}  
        </div>
        <div className='table-responsive'>
          <table   className='table table-hover table-bordered'>
            <thead  className='fontColumnHeader' >
              <tr>
                {
                  props.columHeader.map((title: string, index: number) => <th className='text-center fw-bold' key={index}>{title}</th>)
                }               
              </tr>
            </thead>
            <tbody  style={{fontSize: "14px"}}>
                {
                    props.data.map((data: string[], index: number) => 
                      <tr key={index}>
                        {
                          data.map((value: string, index: number)=> <td key={index}>{value}</td>)
                        }
                      </tr>
                    )
                }
            </tbody>
          </table>
        </div>
    </div> 
  );
}

export default Tabla;