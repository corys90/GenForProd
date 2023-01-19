import { FaUserCircle } from 'react-icons/fa';

const BarraUserIn = (props: {username: string}) => {

    return(
        <>
            <div className="container-fluid 
                 d-flex justify-content-end
                 align-items-center gap-2 text-dark mb-2 shadow"  
                 style={{backgroundColor: "white"}}>
                <div className='p-3 border-end'>{props.username}</div>
                <div>Cerrar Sesión</div>
                <div><h3><FaUserCircle/></h3></div>
            </div>
        </>
    );

}

export default BarraUserIn;