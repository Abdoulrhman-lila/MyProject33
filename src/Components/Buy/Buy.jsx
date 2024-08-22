import "./Buy.css";
import { useForm } from 'react-hook-form';

function Buy() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="buyy">
        <h2>To complete the payment process, <span>fill in the following fields:</span></h2>
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}

        <label>Credit Card Number:</label>
        <input {...register('creditCardNumber', { required: true, pattern: /^[0-9]{16}$/ })} />
        {errors.creditCardNumber && <span>Please enter a valid 16-digit credit card number</span>}



        <button className="pay" type="submit">Pay</button>
      </form>
    </div>
  );
}

export default Buy;