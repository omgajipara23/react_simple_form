import { logDOM } from "@testing-library/react";
import { useEffect, useState } from "react"
import { Button, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ListingTable = () => {

    const navigate = useNavigate();
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

        navigate(`/form/edit/${i}`)
    }

    function viewElement(i) {
        navigate(`/form/view/${i}`)
    }

    function pagination() {
        let active = 2;
        let items = [];
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
        return items
        console.log(items);
    }


    function searchValueFunction(event) {



        const localStorageData = JSON.parse(localStorage.getItem('userAllData'))
        if (event.target.value == "") {
            setData(localStorageData)
        }
        else {
            const filterArray = localStorageData.filter(check)

            function check(item) {
                return (event.target.value.toLowerCase().includes(item[0].basicDetails.firstname.toLowerCase()) || event.target.value.toLowerCase().includes(item[0].basicDetails.lastname.toLowerCase()))
            }
            setData(filterArray)
            console.log(filterArray);
        }


    }

    return (
        <>
            <div className="content">

                <div className="container" style={{ maxWidth: '1225px' }}>


                    <div className="table-responsive custom-table-responsive">

                        <div style={{ marginBottom: '28px' }}>
                            <input id="search" type="search" placeholder="Search..." autoFocus style={{ padding: '6px', borderRadius: '12px' }} onChange={(e) => searchValueFunction(e)} />
                        </div>

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
                                    <th scope="col" style={{ color: 'black' }}>View</th>
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

                                                <td>
                                                    <Button onClick={() => viewElement(index)}>View</Button>
                                                </td>
                                            </tr>



                                        )

                                    })
                                }


                            </tbody>
                        </table>
                        <div>
                            <Pagination>{pagination()}</Pagination>
                        </div>
                    </div>


                </div>

            </div >
        </>
    )
}

export default ListingTable