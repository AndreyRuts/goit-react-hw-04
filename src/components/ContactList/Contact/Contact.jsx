import s from './Contact.module.css';

const Contact = ({id, name, number, deleteContact}) => {  
    
    return (
        <>
            <li className={s.listItem}>
                <div>
                    <p className={s.text}>{name}</p>
                    <p className={s.text}>{number}</p>
                </div>
                <button className={s.delBtn} type='button' onClick={()=> deleteContact(id)}>Delete</button>
            </li>
        </>
    )
} 

export default Contact;
