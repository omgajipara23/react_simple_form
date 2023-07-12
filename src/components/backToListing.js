import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";



export function BackToListing() {

    const navigate = useNavigate();

    function goToListing() {
        navigate('/listing')
    }

    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <Button onClick={() => goToListing()}>Back To Listing</Button>

            </div>
        </>
    )
}