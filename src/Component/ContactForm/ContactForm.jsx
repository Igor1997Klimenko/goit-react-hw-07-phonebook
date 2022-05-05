import {useState} from 'react'
import styles from '../ContactForm/ContactForm.module.css'
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useAddContactsMutation } from '../../redux/contacts-api';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const contacts = useSelector((state) => state.contacts.items);
    const [addContact] = useAddContactsMutation();
  
const handleInputChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value)
                break;

            case 'phone':
                setPhone(value)
                break;

            default:
                return;
        }
    }
    
const handleSubmit = e => {
    e.preventDefault();
    if(contactExits()){
        alert(`${name} is already in contacts`)
        return;
    }
    addContact({ name, phone, id: nanoid() });
    setName('');
    setPhone('');
    };
    
    const contactExits = () => {
        contacts.find(contact =>
            contact.name.toUpperCase() === name.toUpperCase() || contact.phone === phone);
    }

    return(
        <form className={styles.forma} onSubmit={handleSubmit}>
            <div className={styles.blockform}>
            <label htmlFor="" className={styles.LabelForm}>
                <span className={styles.NamesForm}>Name</span>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={handleInputChange}
                    />
            </label>
                
                <label className={styles.LabelForm}>
                <span className={styles.NamesForm}>Phone</span>
                <input
                    type="tel"
                    name="phone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={phone}
                    onChange={handleInputChange}
                    />
                </label>
            </div>
            <button
                type="submit"
                className={styles.ButtonsContact}
            >Add contact</button>
        </form>
    );
  }


export default ContactForm;