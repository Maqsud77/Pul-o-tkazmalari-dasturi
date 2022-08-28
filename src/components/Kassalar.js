import React from 'react';
import {useState} from "react";
import {connect} from "react-redux";
import {Button, Form, FormGroup, Input, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {addKassa, changeKassa, deleteKassa} from "../Reducers/KassalarReducers";

function Kassalar(props) {
    const [modal, setmodal] = useState(false)
    const [kassa, setKassa] = useState({id: "", Name: ""})
    const [edit, setEdit] = useState(false)
    const toggle = () => {
        setmodal(!modal)
    }
    const changeForm = (event) => {
        event.preventDefault()
        kassa.Name =event.target[0].value
        const copiedKassa = {...kassa}
        if (edit) {
            toggle()
            setEdit(!edit)
            props.changeKassa(copiedKassa)
        }
        else {
            toggle()
            event.target[0].value = ""
            setKassa({id: "", Name: ""})
            props.addKassa(copiedKassa)
        }
    }
    return (
        <div className={"row mt-4"}>
            <div className="col-9">
                <div className="row text-center">
                    <div className="col-6"><h2>Kassalar</h2></div>
                    <div className="col-6">
                        <button onClick={()=>{
                            setKassa({id: "", Name: ""})
                            toggle()
                        }} className={"btn btn-dark"}>Add</button>
                    </div>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nomi</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.KassalarReducer.kassalar.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.Name}</td>
                                    <td>
                                        <button onClick={() => {
                                            setEdit(!edit)
                                            setKassa(item)
                                            toggle()
                                        }} className={"btn btn-outline-success"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                <path
                                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                        </button>
                                        <button onClick={() => props.deleteKassa(item.id)}
                                                className={"btn btn-outline-danger mx-2"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path
                                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-3">
                {
                    modal && <div>
                        <ModalHeader toggle={toggle}>Add Kassa</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={changeForm} id={"addKassa"}>
                                <FormGroup>
                                    Name <Input defaultValue={kassa.Name} required={true} type="text" id="Name"
                                                placeholder="Name"/>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" form={"addKassa"}>Saqlash</Button>{' '}
                            <Button color="secondary" onClick={toggle}>chiqish</Button>
                        </ModalFooter>
                    </div>
                }
            </div>

        </div>
    );
}

export default connect(state=>state,{addKassa,deleteKassa,changeKassa})(Kassalar);