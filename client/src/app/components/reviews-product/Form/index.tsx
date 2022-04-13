import React from 'react';
import './style.css';
import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="form-group">
        <div className="form-item">
          <span className="form-title">Your review *</span>
          <input
            className={"form-input"} 
            type="textarea"
            placeholder="Your review"
            {...register('Your review', { required: true, maxLength: 100 })}
          />
        </div>
        <div className="form-item">
          <span className="form-title">Email *</span>
          <input
            className={"form-input"} 
            type="text"
            placeholder="Email"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>

        <input className="form-submit" type="submit" value="Submit"/>
      </form>
  );
}

export default Form;
