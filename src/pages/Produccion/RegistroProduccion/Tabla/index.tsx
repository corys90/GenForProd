import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { FaPrint } from 'react-icons/fa';
import './style.css';

function Tabla(props: any) {

  return (
    <div className='container-fluid'>
        <div className='mb-4 fw-bold'>
          {props.header}  
        </div>
        <div className='table-responsive'>
          <table className='table table-hover table-bordered'>
            <thead  className='fontColumnHeader' >
              <tr >
                {
                  props.columHeader.map((title: string, index: number) => <th className='text-center' key={index}>{title}</th>)
                }
                {
                  <td key={10}>Acción</td>
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
                        {
                          <td key={10}>
                            <div className=' d-flex gap-2 align-item-center' >
                              <a href="#!" onClick={()=> props.handlerPrint(index)}>
                                <div className='align-middle text-center '  style={{width: "30px", height: "30px"}}>
                                   <FaPrint className='text-dark h4'/>
                                </div>
                              </a>
                              <a href="#!" onClick={()=> props.handlerEdit(index)}>
                                <div className='bg-primary align-middle text-center rounded-circle '  style={{width: "30px", height: "30px"}}>
                                  <BsFillPencilFill title="" color={'white'} className='action mt-1 ' />
                                </div> 
                              </a>
                              <a href="#!" onClick={()=> props.handlerDelete(index)}>
                                <div className='bg-danger align-middle text-center rounded-circle '  style={{width: "30px", height: "30px"}}>
                                  <BsFillTrashFill title="" color={'white'} className='action mt-1 ' size={18}/>
                                </div> 
                              </a> 
                            </div>                             
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