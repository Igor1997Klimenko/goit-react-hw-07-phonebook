import PropTypes from 'prop-types'; 
import styles from './ContactListItem.module.css';
import { useDeleteContactsMutation } from '../../redux/contacts-api';

const ContactListItem = ({ id, name, avatar }) => {
    const [deleteContact] = useDeleteContactsMutation();

    return(
        <>
        <span className={styles.NumberContacts}>
            {name}: {avatar}
        </span>
            <button
                className={styles.ButtonsContact}
                type="button"
                onClick={() => deleteContact(id)}>
            Delete
        </button>
        </>
    );
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default ContactListItem;