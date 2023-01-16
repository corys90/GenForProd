import React from 'react';
import { Table } from 'react-bootstrap';

import './style.css';

function Tabla(props: any) {

  return (
    <div className='container-fluid'>
        <div className='fontTitle mb-2'>
          {props.header}  
        </div>
        <div className='table-responsive'>
          <Table striped bordered hover className='sombra table-responsive'>
            <thead >
              <tr className='fontColumnHeader sombra ' >
                {
                  props.columHeader.map((title: string, index: number) => <th className='text-center' key={index}>{title}</th>)
                }               
              </tr>
            </thead>
            <tbody className='fontRows'>
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
          </Table>
        </div>
    </div> 
  );
}

export default Tabla;