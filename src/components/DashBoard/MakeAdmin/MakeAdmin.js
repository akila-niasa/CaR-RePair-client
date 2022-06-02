import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import SideBar from '../SideBar/SideBar';
import AdminRow from './AdminRow';


const MakeAdmin = () => {
    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className="container">
        <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 mt-5">
            <h3 className="text-danger fw-bold fs-3">All Users: <span className='text-secondary'>{users?.length}</span></h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-danger'>Name</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <AdminRow key={user._id} user={user} refetch={refetch}></AdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default MakeAdmin;