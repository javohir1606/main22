import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/reducer/user-reducer";
import { useGetUsersMutation } from "../service/user-register";
export const Register = () => {
  const [getusers]= useGetUsersMutation();
  const { handleSubmit, reset, register } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submit = (data) => {
     getusers(data)
     .unwrap()
     .then((res) =>{
      navigate("/app");
      dispatch(createUser(res));
     })
     .catch((error) => console.log(error));
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="absolute rounded-sm w-[400px] p-[20px] bg-cyan-300 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <form onSubmit={handleSubmit(submit)} className="mt-[20px]">
          <div className="mt-[20px]">
            <input
            autoComplete="off"
              className="p-[10px] w-full"
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
            />
          </div>
          <div className="mt-[20px]">
            <input
              autoComplete="off"
              className="p-[10px] w-full"
              type="password"
              {...register("password", { required: true })}
              placeholder="Parol"
            />
          </div>
          <div className="mt-[20px] mb-[20px]">
            <input
              className="p-[10px] w-full"
              type="text"
                autoComplete="off"
              {...register("name", { required: true })}
              placeholder="Ismingiz"
            />
          </div>
          <button
            className="p-[10px] bg-green-500 w-full"
            type="submit"
          >
           
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
