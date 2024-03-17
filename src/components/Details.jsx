import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Delete from '../pages/Delete'
import { getAll } from '../services/allApi'
import Loader from './Loader'

function Details() {

    const [studData, setStudata] = useState([]);
    const [delStatus, setDelstatus] = useState({});

    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsloading(true);
            try {
                let res = await getAll();
                setStudata(res.data);
            } catch (error) {
                console.log(error);
            }
            setIsloading(false);
        };
        getData();
    }, [delStatus]);

    if (isLoading) {
        return (
           <Loader/>
        )
    }

    return (
        <div className='text-white  h-100'>
            <table className="table table-dark border border-top-none">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Class</th>
                        <th scope="col">Mark</th>
                        <th scope="col">Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studData?.map((each) => (
                            <tr className='py-4'>
                                <td>{each.studid}</td>
                                <td>{each.name}</td>
                                <td>{each.dob}</td>
                                <td>{each.Class}</td>
                                <td>{each.mark}</td>
                                <td>{each.email}</td>
                                <td><Link className='btn btn-warning me-3' to={`/edit/${each.id}`}>Edit</Link>
                                    <Delete studId={each.id} setDelstatus={setDelstatus} /></td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Details
