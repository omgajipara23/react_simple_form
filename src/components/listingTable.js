import { startTransition, useContext, useEffect, useState } from "react"
import { Button, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/context";

const ListingTable = () => {


    const { alldata, setAlldata } = UserContext();

    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [perPageItem, setPerPageItem] = useState(2)

    const [sorting, setSorting] = useState({
        column: "",
        order: "",
    });

    const navigate = useNavigate();
    const [data, setData] = useState([])

    useEffect(() => {

        // const localStorageData = [...alldata]

        const pageData = [...alldata]
        const start = ((currentPageNumber - 1) * perPageItem)
        const end = (perPageItem)
        // setData(pageData.splice(start, end))
        // setData(localStorageData.splice(0, perPageItem))

        // ------------------------Shorting------------------------


        let { column, order } = sorting;
        let searched = [...pageData];

        if (column) {
            switch (order) {
                case "ASC":
                    searched = searched.sort((a, b) => {
                        return a[0].basicDetails[column].toLowerCase() > b[0].basicDetails[column].toLowerCase() ? 1 : -1
                    }
                    );

                    break;
                case "DESC":
                    searched = searched.sort((a, b) => {
                        return a[0].basicDetails[column].toLowerCase() < b[0].basicDetails[column].toLowerCase() ? 1 : -1
                    }
                    );
                    break;
                default:

            }
        }
        setData(searched.splice(start, end));
    }, [sorting, currentPageNumber]);

    function removeElement(i) {


        const getAllDataFromLocal = [...alldata]

        let indexToBeDeleted
        getAllDataFromLocal.map((ele, index) => {
            if (ele[4].id == +i) {
                indexToBeDeleted = index
            }
        })

        getAllDataFromLocal.splice(indexToBeDeleted, 1)

        setAlldata(getAllDataFromLocal)
        setData(getAllDataFromLocal)
    }

    function editElement(i) {
        navigate(`/form/edit/${i}`)
    }

    function viewElement(i) {
        navigate(`/form/view/${i}`)
    }

    function paginationData(number) {
        setCurrentPageNumber(number)
        const pageData = [...alldata]
        const start = ((number - 1) * perPageItem)
        const end = (perPageItem)
        // setData(pageData)
    }


    function pagination() {
        let active = currentPageNumber;
        let totalpage = Math.ceil(alldata.length / perPageItem)
        let items = [];
        for (let number = 1; number <= totalpage; number++) {

            items.push(
                <Pagination.Item key={number} active={active === number} onClick={() => paginationData(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
        return items
    }


    function searchValueFunction(event) {


        const localStorageData = [...alldata]
        if (event.target.value == "") {
            setData(localStorageData)
        }
        else {
            const filterArray = localStorageData.filter(check)

            function check(item) {
                return (event.target.value.toLowerCase().includes(item[0].basicDetails.firstname.toLowerCase()) || event.target.value.toLowerCase().includes(item[0].basicDetails.lastname.toLowerCase()))
            }
            setData(filterArray)
        }


    }

    function goToForm() {
        navigate('/form')
    }

    const sort = (column) => {
        const tempsorting = { ...sorting };

        if (column === tempsorting.column) {
            switch (tempsorting.order) {
                case "":
                    tempsorting.column = column;
                    tempsorting.order = "ASC";
                    break;
                case "ASC":
                    tempsorting.column = column;
                    tempsorting.order = "DESC";
                    break;
                default:
                    tempsorting.order = "";
                    tempsorting.column = column;
            }
        } else {

            tempsorting.column = column;
            tempsorting.order = "ASC";
        }
        setCurrentPageNumber(1)
        setSorting(tempsorting);

    };

    return (
        <>
            <div className="content">

                <div className="container" style={{ maxWidth: '1225px' }}>


                    <div className="table-responsive custom-table-responsive">

                        <div style={{ marginBottom: '28px' }}>
                            <input id="search" type="search" placeholder="Search..." autoFocus style={{ padding: '6px', borderRadius: '12px' }} onChange={(e) => searchValueFunction(e)} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <Button onClick={() => goToForm()}>Fill Form</Button>
                        </div>

                        <table className="table custom-table">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ color: 'black' }} onClick={() => sort("firstname")}>First Name
                                        {/* {
                                            
                                        } */}
                                        {/* <span style={{ color: "black", fontSize: "30px" }}>
                                            &#8593;
                                        </span> */}
                                    </th>
                                    <th scope="col" style={{ color: 'black' }} onClick={() => sort("lastname")}>Last Name</th>
                                    <th scope="col" style={{ color: 'black' }} onClick={() => sort("email")}>Email</th>
                                    <th scope="col" style={{ color: 'black' }} onClick={() => sort("gender")}>Gender</th>
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
                                                    <Button onClick={() => removeElement(item[4].id)}>Delete</Button>
                                                </td>

                                                <td>
                                                    <Button onClick={() => editElement(item[4].id)}>Edit</Button>
                                                </td>

                                                <td>
                                                    <Button onClick={() => viewElement(item[4].id)}>View</Button>
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