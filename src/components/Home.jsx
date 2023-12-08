import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import ListJobs from "./ListJobs";
import HireSomeOne from "./HireSomeOne";
import FooterComponent from "./FooterComponent";

export default function Home(){
    return(
        <div>   
            <BrowserRouter>
            <HeaderComponent/>
                <Routes>
                    <Route path="/listJobs" element={ <ListJobs /> }></Route>
                    <Route path="/hiresomeone" element={ <HireSomeOne /> }></Route>
                </Routes>
            <FooterComponent/>
            </BrowserRouter>
        </div>
    )
}