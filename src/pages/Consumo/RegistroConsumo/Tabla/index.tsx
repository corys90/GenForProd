import React from 'react';
import { Table } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';
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
                  props.columHeader.map((title: string, index: number) => <th  className='text-center ' key={index}>{title}</th>)
                }
                {
                  <th key={11} className='' >
                    <div className='bg-danger align-middle text-center rounded-circle '  style={{height: "30px", width:"30px"}}>
                      <BsFillTrashFill title="Código" color={'white'} className='action mt-1 ' size={18}/>
                    </div>
                  </th>
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
                          <td key={11}>
                              <a href="#!" onClick={()=> props.handlerDelete(index)}>
                                <div className='bg-danger align-middle text-center rounded-circle '  style={{height: "30px", width:"30px"}}>
                                    <BsFillTrashFill title="Código" color={'white'} className='action mt-1 ' size={18}/>
                                </div>
                              </a>
                          </td>
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