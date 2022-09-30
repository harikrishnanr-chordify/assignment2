import { useForm } from "react-hook-form";
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required().email(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required().oneOf([yup.ref("password")], "Passwords do not match"),
}).required();

const RegisterHook = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input  {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p role="alert">{errors.email?.message}</p>}
        </div>
        <br></br>

        <div>
          <label>FIrst Name</label>
          <input {...register("firstName")} />
          {errors.firstName && <span>First Name is required</span>}
        </div>
        <br></br>

        <div>
          <label>Last Name</label>
          <input {...register("lastName")} />
          {errors.lastName && <span>Last Name is required</span>}
        </div>
        <br></br>

        <div>
          <label>Password</label>
          <input type="password" {...register("password")} />
          {errors.password && <span>Password is required</span>}
        </div>
        <br></br>

        <div>
          <label>Confirm Password</label>
          <input type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>}
        </div>
        <br></br>

        <input type="submit" />
      </form>
    </div>
  );
}

export default RegisterHook;