import React from 'react';
import { Table } from 'react-bootstrap';
import { FaInfoCircle, FaPrint, FaTrashAlt } from 'react-icons/fa';
import './style.css';

const imgEdit = require('./edit.png');
const imgView = require('./view.png');
const imgDelete = require('./delete.png');

function Tabla(props: any) {

  return (
    <div className='container-fluid'>
        <div className='mb-4 fw-bold'>
          {props.header}  
        </div>
        <div className='table-responsive'>
          <Table striped bordered hover className='sombra'>
            <thead  className='fontColumnHeader' >
              <tr >
                {
                  props.columHeader.map((title: string, index: number) => <th className='text-center' key={index}>{title}</th>)
                }
                {
                  <td key={10}><FaPrint className='text-dark h5'/></td>
                }                         
                {
                  <td key={11}><img src={imgEdit} alt="Editar" width="24px" height="24px"/></td>
                }                        
                {
                  <td key={12}><img src={imgDelete} alt="Borrar" width="24px" height="24px"/></td>
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
                          <td key={10}><a href="#!" onClick={()=> props.handlerPrint(index)}><FaPrint className='text-dark h5'/></a></td>
                        }                         
                        {
                          <td key={11}><a href="#!" onClick={()=> props.handlerEdit(index)}><img src={imgEdit} alt="Editar" width="24px" height="24px"/></a></td>
                        }                        
                        {
                          <td key={12}><a href="#!" onClick={()=> props.handlerDelete(index)}><img src={imgDelete} alt="Borrar" width="24px" height="24px"/></a></td>
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