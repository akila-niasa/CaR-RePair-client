import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


function StatusForm({ orderId, setUpdated, status }) {
  const { register, handleSubmit } = useForm({
    defaultValues: { status: status },
  });
 

  const onChange = (data) => {
    axios
      .put(
        `http://localhost:5000/order/${orderId}`,
        data
      )
      .then(function (response) {
        if (response.data.modifiedCount > 0) {
          setUpdated(true);
          toast.success("Status Updated");
        }
      })
      .catch(function (error) {
        toast.error(error.message + "Try Again");
      });
  };

  return (
    <form onChange={handleSubmit(onChange)}>
      <select {...register("status", { required: true })}>
        <option value='pending'>pending</option>
        <option value='canceled'>canceled</option>
        <option value='confirmed'>confirmed</option>
        <option value='shipped'>shipped</option>
      </select>
    </form>
  );
}

export default StatusForm;