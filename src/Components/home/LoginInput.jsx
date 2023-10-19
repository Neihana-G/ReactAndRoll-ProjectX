import styles from './LoginInput.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function LoginInput({val, placeholder, type, onInputChange, setValue, validate=false}) {
    const [valid, setValid] = useState(false)

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const handleOnChange = (e) => {
        setValue(e.target.value)
        validateInput();
    }

    const validateInput = () => {
        if(type === 'email' && validate){
            console.log(val)
            if(emailRegex.test(val)){
                setValid(true)
            }
            else{
                setValid(false)
            }
        }
    }

    return(
        <label className={styles.wrapper}>
            <div className={`${styles.icon} ${valid && styles.check}`}>
            {valid && <FontAwesomeIcon icon={faCheck}/>}
            {!valid && validate && <FontAwesomeIcon icon={faX}/>}
            </div>
            <input 
                value={val} 
                placeholder={placeholder} 
                type={type}
                onChange={(e) => handleOnChange(e)}
            ></input>
        </label>
    )

}
