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

        <label>Transaction Number:</label>
        <input {...register('transactionNumber', { required: true, pattern: /^[0-9]{10}$/ })} />
        {errors.transactionNumber && <span>Please enter a valid 10-digit transaction number</span>}

        <label>Bank Account Number:</label>
        <input {...register('bankAccountNumber', { required: true, pattern: /^[0-9]{16}$/ })} />
        {errors.bankAccountNumber && <span>Please enter a valid 16-digit bank account number</span>}

        <label>Amount Paid:</label>
        <input {...register('amountPaid', { required: true, pattern: /^[0-9]+(\.[0-9]{2})?$/ })} />
        {errors.amountPaid && <span>Please enter a valid amount</span>}

        <button className="pay" type="submit">Pay</button>
      </form>
    </div>
  );
}

export default Buy;