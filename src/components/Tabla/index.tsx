import React from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit, FaInfoCircle, FaTrashAlt } from 'react-icons/fa';
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
                  <th key={9}><FaEdit  className='text-warning text-center'/></th>
                }
                {
                  <th key={10}><FaInfoCircle  className='text-primary text-center'/></th>
                }
                {
                  <th key={11}><FaTrashAlt className='text-danger text-center'/></th>
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
                          <td key={9}><a href="#!"  onClick={()=>props.handlerDelete(index)}><FaEdit className='text-warning'/></a></td>
                        }
                        {
                          <td key={10}><a href="#!" onClick={()=>props.handlerInfo(index)}><FaInfoCircle className='text-primary'/></a></td>
                        }
                        {
                          <td key={11}><a href="#!" onClick={()=> props.handlerDelete(index)}><FaTrashAlt className='text-danger'/></a></td>
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