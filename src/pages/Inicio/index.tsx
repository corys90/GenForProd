import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import PageConsumo from '../Consumo';
import PageProduccion from '../Produccion';
import PageConsprod from '../Consprod';

import "./style.css";
const imgLeonera = require('./imgLeonera2.png');

const MenuLateralHome = () =>{

    return (
        <nav className="">
            <div style={{backgroundColor: "#303742", width: "256px", height: "100%"}}>
                <div>
                    <img src={imgLeonera} alt="Leonera" style={{width: "65%", height:"auto"}} className="mt-3 ms-4"/>
                </div>
                <div className="pt-4 mt-2"></div>
                <div className=" text-white" id="v-pills-tab">
                    <div className="paddLinksDiv  nav-pills active"><NavLink  className="linksDecor" to="/consumo" >Consumo Trozos</NavLink></div>
                    <div className="paddLinksDiv"><NavLink  className="linksDecor" to="/producion" >Producción</NavLink></div>
                    <div className="paddLinksDiv"><NavLink  className="linksDecor" to="/consprod" >Consumo producción</NavLink></div>
                </div>           
            </div>
        </nav>
    )

}

const Home = () => {

    return(
        <>
           <div style={{display: "flex", flexDirection: "row"}}>
                <BrowserRouter>
                    <MenuLateralHome />
                    <Routes>
                        <Route path={"/"} element={<PageConsumo />} />
                        <Route path={"/consumo"} element={<PageConsumo />} />
                        <Route path={"/producion"} element={<PageProduccion />} />
                        <Route path={"/consprod"} element={<PageConsprod />} />
                    </Routes>
                </BrowserRouter>
           </div>
        </>
    );


}

export default Home;