import ContactListItem from '../ContactsListItem/ContactSListItem';
import s from './ContactList.module.css';
import filterContacts from '../../helpers/filterContacts';
import { useGetContactsQuery } from '../../redux/contacts-api';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const { data } = useGetContactsQuery();
    const filterValue = useSelector((state) => state.apiContacts.filter)

    return(
        <ul className={s.ContactList}>
            {data &&
                filterContacts(data, filterValue).map(({ id, name, avatar }) => (
        <li key={id}>
            <ContactListItem
                id={id}
                name={name}
                avatar={avatar}
            />
        </li>          
    ))}
    </ul>
    )
}

export default ContactList;