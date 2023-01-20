import  'bootstrap/dist/css/bootstrap.min.css' ;
import Home from './pages/Inicio';
import PersonalizableTabla from '../src/components/PersonalizableTabla';
import { Container } from 'react-bootstrap';


const dataUltimosMov: string[][] = [
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$10.000", "En Proceso"],
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$20.000", "En Proceso"],
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$30.000", "En Proceso"],
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$40.000", "En Proceso"],
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$50.000", "En Proceso"],
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$60.000", "En Proceso"],
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$70.000", "En Proceso"],
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$80.000", "En Proceso"],
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$90.000", "En Proceso"],
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$11.000", "En Proceso"],
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$22.000", "En Proceso"],
  ["Forestal Leonera", "24-10-2023", "$50.000", "En Proceso","Dental", "24-10-2023", "$33.000", "En Proceso"]
];

function App() {

  const header = {
    text: "Cristian A. Cortes Sarmiento",
    styleText: {
      fontFamily: "tahoma, san-serif",
      fontSize: "32px",
      fontWeight: "bold",
      color: "red"
    },
    styleContainer: {
      width: "100%",
      height: "60px",
      textAlign: "center",
      backgroundColor: "yellow"
    }
  }

  const column = {
    styleText: {
      fontFamily: "tahoma, san-serif",
      fontSize: "12px",
      fontWeight: "",
      color: "#AABBCC"
    },
    styleContainer: {
      width: "",
      height: "15px",
      textAlign: "center",
      backgroundColor: "green"
      
    }
  }

  return (
    <>
    <Home/>
      {/* <Container className='container'>
        <PersonalizableTabla
            header={header}
            columnStyle={column}
            columnHeader={["N° Consumo", "Fecha", "Hora", "Centro","Máquina", "Turno", "Jefe Turno", "Operador"]}
            data={dataUltimosMov}
            handlerEdit={()=>{alert("editar")}}
            handlerInfo={()=>{alert("Info")}}
            handlerDelete={()=>{alert("Delete")}}
        />        
      </Container> */}

    </>
  );
}

export default App;
