import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createBaseQuery } from "../../config/create-bace-query";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/reducer/user-reducer";
import { useGetLoginUsersMutation } from "../service/user-login";

// const request = createBaseQuery();
export const Login = () => {
  const [getLogin] = useGetLoginUsersMutation();
  const { handleSubmit, reset, register } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const onSubmit = (data) => {
     getLogin(data)
     .unwrap()
     .then((res) =>{
      if(res){
        console.log(res);
        dispatch(createUser(res));
        navigate("/app", {replace: true})
        renderToStaticMarkup.success(`Welcome back ${res.user.name}`)
        
      }
     })
     .catch((error) => renderToStaticMarkup.error(error.data))
     reset()
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-teal-500 w-[400px] p-10 rounded-md shadow-lg">
        <Link to={"/register"}>Register</Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
                autoComplete="auto"
              className="p-[10px] w-full"
              type="email"
              placeholder="Email kiriting"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-4">
            <input 
               autoComplete="auto"
              className="p-[10px] w-full"
              type="password"
              placeholder="Parol kiriting"
              {...register("password", { required: true })}
            />
          </div>
          <button
            className="bg-blue-500 text-white p-[10px] w-full"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
