import React from 'react';
import { Table } from 'react-bootstrap';
import './style.css';

const imgEdit = require('./edit.png');
const imgView = require('./view.png');
const imgDelete = require('./delete.png');

function Tabla(props: any) {

  return (
    <div className='container-fluid'>
        <div  className="mb-4 fw-bold" >
          {props.header}  
        </div>
        <div className='table-responsive'>
          <Table striped hover className='sombra'>
            <thead className='fontColumnHeader' >
              <tr >
                {
                  props.columHeader.map((title: string, index: number) => <th className='text-center fw-bold ' key={index}>{title}</th>)
                }
                {
                  <th key={9}  className='text-center' ><img src={imgEdit} alt="Editar" width="24px" height="24px"/></th>
                }
                {
                  <th key={10} className='text-center' ><img src={imgView} alt="Ver" width="24px" height="24px"/></th>
                }
                {
                  <th key={11} className='text-center' ><img src={imgDelete} alt="Borrar" width="24px" height="24px"/></th>
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
                          <td key={9} className='text-center' ><a href="#!"  onClick={()=>props.handlerEdit(index)}><img src={imgEdit} alt="Editar" width="24px" height="24px"/></a></td>
                        }
                        {
                          <td key={10} className='text-center' ><a href="#!" onClick={()=>props.handlerInfo(index)}><img src={imgView} alt="Ver" width="24px" height="24px"/></a></td>
                        }
                        {
                          <td key={11} className='text-center' ><a href="#!" onClick={()=> props.handlerDelete(index)}><img src={imgDelete} alt="Borrar" width="24px" height="24px"/></a></td>
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