import s from './ContactList.module.css'
import Contact from './Contact/Contact'

const ContactList = ({contactList, deleteContact}) => {

    return (
        <ul className={s.contactList}>
            {contactList.map(item => (<Contact
                key={item.id} {...item}
                id={item.id}
                name={item.name}
                number={item.number}
                deleteContact={deleteContact} />))}
        </ul>
    )  
}

export default ContactList;