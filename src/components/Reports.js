import React from 'react';
import {PieChart} from 'react-minimal-pie-chart';
import {connect} from "react-redux";

function Reports({ChiqimlarReducer, FoydalanuvchilarReducer, KassalarReducer, KirimlarReducer}) {
    const filterCh = (Kassa, Name) => {
        let chiqimlar = ChiqimlarReducer.chiqimlar
        return chiqimlar.filter((item) => item.kassaID === Kassa && item.nameID === Name)
    }
    const filterK = (Kassa, Name) => {
        let kirimlar = KirimlarReducer.kirimlar
        return kirimlar.filter((item) => item.kassaID === Kassa && item.nameID === Name)
    }
    const sumCh = (Kassa, Name) => {
        let a = filterCh(Kassa, Name)
        if (a !== []) {
            let summa = 0;
            for (let i = 0; i < a.length; i++) {
                summa += parseInt(a[i].Miqdori)
            }
            return summa;
        }
        return 0
    }
    const sumK = (Kassa, Name) => {
        let a = filterK(Kassa, Name)
        if (a !== []) {
            let summa = 0;
            for (let i = 0; i < a.length; i++) {
                summa += parseInt(a[i].Miqdori)
            }
            return summa;
        }
        return 0
    }
    const filterUK = (Name) => {
        let kirimlar = KirimlarReducer.kirimlar
        return kirimlar.filter((item) => item.nameID === Name)
    }
    const filterUCh = ( Name) => {
        let chiqimlar = ChiqimlarReducer.chiqimlar
        return chiqimlar.filter((item) =>  item.nameID === Name)
    }
    const sumUK = (Name) => {
        let a = filterUK(Name)
        if (a !== []) {
            let summa = 0;
            for (let i = 0; i < a.length; i++) {
                summa += parseInt(a[i].Miqdori)
            }
            return summa;
        }
        return 0
    }
    const sumUCh = (Name) => {
        let a = filterUCh(Name)
        if (a !== []) {
            let summa = 0;
            for (let i = 0; i < a.length; i++) {
                summa += parseInt(a[i].Miqdori)
            }
            return summa;
        }
        return 0
    }
    return (
        <div className={"container "}>
            <div className="row mt-2">
                <div className="col-4 bg-info text-center pb-3">
                    <h1>Kassa 1</h1>
                    <h4>
                        {KirimlarReducer.kirimlar.filter((kirim) => {
                        return kirim.kassaID === "Kassa 1"
                    }).reduce(
                        (previousValue, currentValue) => previousValue + parseInt(currentValue.Miqdori),
                        0,
                      )- ChiqimlarReducer.chiqimlar.filter((kirim) => {
                        return kirim.kassaID === "Kassa 1"
                    }).reduce(
                        (previousValue, currentValue) => previousValue + parseInt(currentValue.Miqdori),
                        0,
                      )
                    } UZS</h4>
                    <div className="row ">
                        <div className="col-6">
                            <h5 className={"text-success"}>Kirimlar</h5>
                            <ul className={"list-group"}>
                                {KirimlarReducer.kirimlar.map((item, index) => {
                                    if (item.kassaID === "Kassa 1") {
                                        return (
                                            <li className={"list-group-item"} key={index}>{item.Miqdori + " UZS"} </li>)
                                    }
                                })}
                            </ul>
                        </div>
                        <div className="col-6">
                            <h5 className={"text-danger"}> Chiqimlar</h5>
                            <ul className={"list-group"}>
                                {ChiqimlarReducer.chiqimlar.map((item, index) => {
                                    if (item.kassaID === "Kassa 1") {
                                        return (<li className={"list-group-item text-danger"}
                                                    key={index}>{item.Miqdori + " UZS"} </li>)
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-4 bg-info text-center">
                    <h1>Kassa 2</h1>
                    <h4>{KirimlarReducer.kirimlar.filter((kirim) => {
                        return kirim.kassaID === "Kassa 2"
                    }).reduce(
                        (previousValue, currentValue) => previousValue + parseInt(currentValue.Miqdori),
                        0,
                      ) - ChiqimlarReducer.chiqimlar.filter((kirim) => {
                        return kirim.kassaID === "Kassa 2"
                    }).reduce(
                        (previousValue, currentValue) => previousValue + parseInt(currentValue.Miqdori),
                        0,
                      )} UZS</h4>
                    <div className="row ">
                        <div className="col-6">
                            <h5 className={"text-success"}>Kirimlar</h5>
                            <ul className={"list-group"}>
                                {KirimlarReducer.kirimlar.map((item, index) => {
                                    if (item.kassaID === "Kassa 2") {
                                        return (
                                            <li className={"list-group-item"} key={index}>{item.Miqdori + " UZS"} </li>)
                                    }
                                })}
                            </ul>
                        </div>
                        <div className="col-6">
                            <h5 className={"text-danger"}> Chiqimlar</h5>
                            <ul className={"list-group"}>
                                {ChiqimlarReducer.chiqimlar.map((item, index) => {
                                    if (item.kassaID === "Kassa 2") {
                                        return (<li className={"list-group-item text-danger"}
                                                    key={index}>{item.Miqdori + " UZS"} </li>)
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-4 bg-info text-center">
                    <h1>Kassa 3</h1>
                    <h4>{KirimlarReducer.kirimlar.filter((kirim) => {
                        return kirim.kassaID === "Kassa 3"
                    }).reduce(
                        (previousValue, currentValue) => previousValue + parseInt(currentValue.Miqdori),
                        0,
                      ) - ChiqimlarReducer.chiqimlar.filter((kirim) => {
                        return kirim.kassaID === "Kassa 3"
                    }).reduce(
                        (previousValue, currentValue) => previousValue + parseInt(currentValue.Miqdori),
                        0,
                      )} UZS</h4>
                    <div className="row ">
                        <div className="col-6">
                            <h5 className={"text-success"}>Kirimlar</h5>
                            <ul className={"list-group"}>
                                {KirimlarReducer.kirimlar.map((item, index) => {
                                    if (item.kassaID === "Kassa 3") {
                                        return (
                                            <li className={"list-group-item"} key={index}>{item.Miqdori + " UZS"} </li>)
                                    }
                                })}
                            </ul>
                        </div>
                        <div className="col-6">
                            <h5 className={"text-danger"}> Chiqimlar</h5>
                            <ul className={"list-group"}>
                                {ChiqimlarReducer.chiqimlar.map((item, index) => {
                                    if (item.kassaID === "Kassa 3") {
                                        return (<li className={"list-group-item text-danger"}
                                                    key={index}>{item.Miqdori + " UZS"} </li>)
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-around">
                <div className="col-4 ">
                    <h1>Umumiy Kirimlar</h1>
                    <PieChart
                        label={({ dataEntry }) => dataEntry.value + "UZS " + dataEntry.title}
                        labelStyle={{
                            fontSize: '5px',
                            fontFamily: 'sans-serif',
                        }}
                        animate={true}
                        data={[
                            {title: 'Maqsud', value:sumUK("Maqsud"), color: '#82e34e'},
                            {title: 'Elyor', value: sumUK("Elyor"), color: '#5150c1'},
                            {title: 'Abdulloh', value: sumUK("Abdulloh"), color: '#6a1112'},
                        ]}
                    />;
                </div>
                <div className="col-4 ">
                    <h1>Umumiy Chiqimlar</h1>
                    <PieChart
                        label={({ dataEntry }) => dataEntry.value + "UZS " + dataEntry.title}
                        labelStyle={{
                            fontSize: '5px',
                            fontFamily: 'sans-serif',
                        }}
                        animate={true}
                        data={[
                            {title: 'Maqsud', value:sumUCh("Maqsud"), color: '#E38627'},
                            {title: 'Elyor', value: sumUCh("Elyor"), color: '#C13C37'},
                            {title: 'Abdulloh', value:sumUCh("Abdulloh") , color: '#6A2135'},
                        ]}
                    />;
                </div>

            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ism</th>
                            <th scope="col">Kassa</th>
                            <th scope="col">Jammi</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Maqsud</td>
                            <td><p>Kassa 1</p><p>Kassa 2</p><p>Kassa 3</p></td>
                            <td>
                                <p>
                                    {sumK("Kassa 1", "Maqsud") - sumCh("Kassa 1", "Maqsud")}
                                </p>

                                <p>
                                    {sumK("Kassa 2", "Maqsud") - sumCh("Kassa 2", "Maqsud")}
                                </p>
                                <p>
                                    {sumK("Kassa 3", "Maqsud") - sumCh("Kassa 3", "Maqsud")}
                                </p>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Elyor</td>
                            <td><p>Kassa 1</p><p>Kassa 2</p><p>Kassa 3</p></td>
                            <td>
                                <p>
                                    {sumK("Kassa 1", "Elyor") - sumCh("Kassa 1", "Elyor")}
                                </p>

                                <p>
                                    {sumK("Kassa 2", "Elyor") - sumCh("Kassa 2", "Elyor")}
                                </p>
                                <p>
                                    {sumK("Kassa 3", "Elyor") - sumCh("Kassa 3", "Elyor")}
                                </p>

                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Abdulloh</td>
                            <td><p>Kassa 1</p><p>Kassa 2</p><p>Kassa 3</p></td>
                            <td>
                                <p>
                                    {sumK("Kassa 1", "Abdulloh") - sumCh("Kassa 1", "Abdulloh")}
                                </p>

                                <p>
                                    {sumK("Kassa 2", "Abdulloh") - sumCh("Kassa 2", "Abdulloh")}
                                </p>
                                <p>
                                    {sumK("Kassa 3", "Abdulloh") - sumCh("Kassa 3", "Abdulloh")}
                                </p>

                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default connect((state => state))(Reports);