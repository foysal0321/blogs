type TInput = {
    type: string
    label: string
    name?: string
  }
  
  function Input({ type, label }: TInput) {
    return (
  
      <label className="form-control w-full max-w-xs py-1">
        <span className="label-text py-2">{label}</span>
        <input type={type} placeholder="Type here" className="input input-bordered w-80 md:w-[500px] p-6" required />
      </label>
  
    )
  }
  
  export default Input