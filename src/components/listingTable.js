import { logDOM } from "@testing-library/react";
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";

const ListingTable = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const localStorageData = localStorage.getItem('userAllData')
        const parseData = JSON.parse(localStorageData)
        setData(parseData)
    }, []);

    function removeElement(i) {
        const getAllDataFromLocal = JSON.parse(localStorage.getItem('userAllData'))
        const remove = getAllDataFromLocal.splice(i, 1)
        localStorage.setItem('userAllData', JSON.stringify(getAllDataFromLocal))
        setData(getAllDataFromLocal)
    }

    function editElement(i) {
        const getAllDataFromLocal = JSON.parse(localStorage.getItem('userAllData'))
        const edit = getAllDataFromLocal.splice(i, 1)
        console.log(edit);
    }

    return (
        <>
            <div className="content">

                <div className="container">


                    <div className="table-responsive custom-table-responsive">

                        <table className="table custom-table">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ color: 'black' }}>First Name</th>
                                    <th scope="col" style={{ color: 'black' }}>Last Name</th>
                                    <th scope="col" style={{ color: 'black' }}>Email</th>
                                    <th scope="col" style={{ color: 'black' }}>Gender</th>
                                    <th scope="col" style={{ color: 'black' }}>Document</th>
                                    <th scope="col" style={{ color: 'black' }}>Delete</th>
                                    <th scope="col" style={{ color: 'black' }}>Edit</th>
                                </tr>
                            </thead>
                            <tbody>


                                <tr className="spacer"><td colSpan="100"></td></tr>
                                {
                                    data.map((item, index) => {

                                        return (

                                            < tr key={index}>
                                                <td>{item[0].basicDetails?.firstname}</td>
                                                <td>{item[0].basicDetails?.lastname}</td>
                                                <td>
                                                    {item[0].basicDetails?.email}

                                                </td>
                                                <td>{item[0].basicDetails?.gender}</td>
                                                <td>
                                                    <div style={{ height: '100%', width: '100%' }}>
                                                        <img src={item[3].allDocument[0].documentfile[0]} style={{ height: '100px' }} />
                                                    </div>
                                                </td>

                                                <td>
                                                    <Button onClick={() => removeElement(index)}>Delete</Button>
                                                </td>

                                                <td>
                                                    <Button onClick={() => editElement(index)}>Edit</Button>
                                                </td>
                                            </tr>



                                        )

                                    })
                                }


                            </tbody>
                        </table>
                    </div>


                </div>

            </div >
        </>
    )
}

export default ListingTable