function InputForm({ id, label, type }) {
  return (
    <div className="inputForm">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
}

export default InputForm;

// Solution for task #3

// function InputForm({ id, label, type }) {
//   return (
//     <div className="inputForm">
//       <label htmlFor={id}> {label} </label>
//       <input id={id} type={type} />
//     </div>
//   );
// }

// export default InputForm;
