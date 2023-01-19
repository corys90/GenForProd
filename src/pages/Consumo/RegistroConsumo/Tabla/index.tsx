import React from 'react';
import { Table } from 'react-bootstrap';
import './style.css';

const imgDelete = require('./delete.png');

function Tabla(props: any) {

  return (
    <div className='container-fluid'>
        <div className='mb-4 fw-bold'>
          {props.header}  
        </div>
        <div className='table-responsive'>
          <Table bordered striped hover className='sombra'>
            <thead  className='fontColumnHeader' >
              <tr>
                {
                  props.columHeader.map((title: string, index: number) => <th  className='text-center ' key={index}>{title}</th>)
                }
                {
                  <th key={11} className='' ><img src={imgDelete} alt="Borrar" width="24px" height="24px"/></th>
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
                        {
                          <td key={11}><a href="#!" onClick={()=> props.handlerDelete(index)}><img src={imgDelete} alt="Borrar" width="24px" height="24px"/></a></td>
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