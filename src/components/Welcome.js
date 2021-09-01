import { useState } from 'react'
import styles from '../styles/Welcome.module.css'

const Welcome = () => {
  const [data, setData] = useState('')
  const [getData, setGetData] = useState('')
  const handleChange = (e) => {
    setData(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setGetData(data)
  }

  return (
    <div className={styles.container}>
      <img src="/zurichatlogo.svg" alt="Zuri Chat Logo" />
      <strong>Welcome to the Workspace</strong>
      <div className="text-center" >
        Input component Example
        <p>
          This is a totally new react app just for hosting sake
        </p>

      </div>
      <div>
        {getData}
      </div>
      <form>
        <input type="text" value={data} className='form-control' placeholder="UserName" onChange={e => setData(e.target.value)} />
        <button className="btn btn-primary" onClick={handleSubmit} >
          Check input value
        </button>
      </form>

    </div>
  )
}

export default Welcome
