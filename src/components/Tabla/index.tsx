import {BsFillTrashFill, BsFillEyeFill, BsFillPencilFill} from "react-icons/bs"
import { Table } from 'react-bootstrap';
import './style.css';

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
                  <th key={9}>
                    <div className='bg-success align-middle text-center rounded-circle '  style={{height: "30px"}}>
                      <BsFillEyeFill title="Código" color={'white'} className='action mt-1 ' size={20}/>
                    </div>
                  </th>
                }
                {
                  <th key={10}  className='text-center' >
                    <div className='bg-primary align-middle text-center rounded-circle '  style={{height: "30px"}}>
                      <BsFillPencilFill title="Código" color={'white'} className='action mt-1 ' size={20}/>
                    </div>               
                  </th>
                }
                {
                  <th key={11} className='text-center' >
                    <div className='bg-danger align-middle text-center rounded-circle '  style={{height: "30px"}}>
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
                          <td key={9} className='text-center' >
                            <a href="#!"  onClick={()=>props.handlerEdit(index)}>
                                <div className='bg-success align-middle text-center rounded-circle '  style={{height: "30px"}}>
                                  <BsFillEyeFill title="Código" color={'white'} className='action mt-1 ' size={20}/>
                                </div>
                            </a>
                          </td>
                        }
                        {
                          <td key={10} className='text-center' >
                            <a href="#!" onClick={()=>props.handlerInfo(index)}>
                              <div className='bg-primary align-middle text-center rounded-circle '  style={{height: "30px"}}>
                                <BsFillPencilFill title="Código" color={'white'} className='action mt-1 ' size={20}/>
                              </div>  
                            </a>
                          </td>
                        }
                        {
                          <td key={11} className='text-center' >
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