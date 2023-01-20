import React from 'react';
import { Table } from 'react-bootstrap';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { FaPrint, FaTrashAlt } from 'react-icons/fa';
import './style.css';

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
                  <td key={11}>
                    <div className='bg-primary align-middle text-center rounded-circle '  style={{height: "30px"}}>
                      <BsFillPencilFill title="Código" color={'white'} className='action mt-1 ' size={20}/>
                    </div>  
                  </td>
                }                        
                {
                  <td key={12}>
                    <div className='bg-danger align-middle text-center rounded-circle '  style={{height: "30px"}}>
                      <BsFillTrashFill title="Código" color={'white'} className='action mt-1 ' size={18}/>
                    </div> 
                  </td>
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
                          <td key={11}>
                            <a href="#!" onClick={()=> props.handlerEdit(index)}>
                              <div className='bg-primary align-middle text-center rounded-circle '  style={{height: "30px"}}>
                                <BsFillPencilFill title="Código" color={'white'} className='action mt-1 ' size={20}/>
                              </div> 
                            </a>
                          </td>
                        }                        
                        {
                          <td key={12}>
                            <a href="#!" onClick={()=> props.handlerDelete(index)}>
                              <div className='bg-danger align-middle text-center rounded-circle '  style={{height: "30px"}}>
                                <BsFillTrashFill title="Código" color={'white'} className='action mt-1 ' size={18}/>
                              </div> 
                             </a>
                          </td>
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