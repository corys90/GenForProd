import React from 'react';
import { Table } from 'react-bootstrap';
import { FaInfoCircle, FaPrint, FaTrashAlt } from 'react-icons/fa';
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
                {
                  <td key={10}><FaPrint className='text-dark'/></td>
                }                         
                {
                  <td key={11}><FaInfoCircle className='text-warning'/></td>
                }                        
                {
                  <td key={12}><FaTrashAlt className='text-danger'/></td>
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
                          <td key={10}><a href="#!" onClick={()=> props.handlerPrint(index)}><FaPrint className='text-dark'/></a></td>
                        }                         
                        {
                          <td key={11}><a href="#!" onClick={()=> props.handlerEdit(index)}><FaInfoCircle className='text-warning'/></a></td>
                        }                        
                        {
                          <td key={12}><a href="#!" onClick={()=> props.handlerDelete(index)}><FaTrashAlt className='text-danger'/></a></td>
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