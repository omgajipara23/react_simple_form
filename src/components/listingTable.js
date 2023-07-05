import { useEffect, useState } from "react"

const ListingTable = () => {



    const [data, setData] = useState([])

    useEffect(() => {
        const localStorageData = localStorage.getItem('userAllData')
        const parseData = JSON.parse(localStorageData)
        setData(parseData)
    }, []);

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
                                </tr>
                            </thead>
                            <tbody>


                                <tr className="spacer"><td colSpan="100"></td></tr>
                                {
                                    data.map((item, index) => {
                                        console.log(item[3].allDocument[0].documentfile[0], "iteammmmmmmmmm");
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