import React from 'react';
import toast from 'react-hot-toast';
const AdminRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    return toast.error('failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount =1) {
                    refetch()
                    console.log(data)
                    toast.success(`Successfully make an admin`)
                }

            })
    }

    return (
        <tr>
            <th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-primary">Make Admin</button>}</td>
            <td>{role !== 'admin' && <button className="btn btn-danger">Delete</button>}</td>

        </tr>
    );
};

export default AdminRow;