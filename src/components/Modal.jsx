import React, {useState} from "react"


export const Modal = ({closeModal, onSubmit}) => {

  const [formState, setFormState] = useState({
    name: "", 
    city: "", 
    date: "", 
    address: ""
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const [errors, setErrors] = useState("")

  const validateForm = () => {
    if (formState.name && formState.city && formState.date && formState.address) {
      setErrors("")
      return true;
    }else{
      let errorFields = [];
      for(const [key, value] of Object.entries(formState)){
        if(!value){
          errorFields.push(key)
        }
      }
      setErrors(errorFields.join(', '))
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateForm()) return;

    console.log(formState);
    onSubmit(formState)
    closeModal();
  }

  return(
    <div className="modal-container" onClick={(e) => {
        if(e.target.className === "modal-container") closeModal()
      }}
    > 
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" value={formState.name} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="city">Tempat Lahir</label>
            <input name="city" value={formState.city} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="date">Tanggal Lahir</label>
            <input name="date" type="date" value={formState.date} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="address">Alamat</label>
            <input name="address" value={formState.address} onChange={handleChange}/>
          </div>
          {errors && <div>{`Silahkan isi kolom yang kosong`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>Simpan</button>

        </form>
      </div>
    </div>
  )
}