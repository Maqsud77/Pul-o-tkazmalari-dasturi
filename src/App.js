import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Kassalar from "./components/Kassalar";
import Foydalanuvchilar from "./components/Foydalanuvchilar";
import Kirimlar from "./components/Kirimlar";
import Chiqimlar from "./components/Chiqimlar";
import Reports from "./components/Reports";
function App() {
    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-12">
                    <nav>
                        <Link to="/kassalar">Kassalar</Link>
                        <Link className={"mx-2"} to="/foydalanuvchilar">Foydalanuvchilar</Link>
                        <Link className={"mx-2"} to="/chiqimlar">Chiqimlar</Link>
                        <Link className={"mx-2"} to="/kirimlar">Kirimlar</Link>
                        <Link className={"mx-2"} to="/Reports">Reports</Link>
                    </nav>
                    <Routes>
                        <Route  path="/kassalar" element={<Kassalar/>} />
                        <Route path="/foydalanuvchilar" element={<Foydalanuvchilar/>} />
                        <Route path="/chiqimlar" element={<Chiqimlar />} />
                        <Route path="/kirimlar" element={<Kirimlar />} />
                        <Route path="/reports" element={<Reports />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default (App);