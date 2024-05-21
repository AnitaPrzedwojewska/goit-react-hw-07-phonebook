import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import css from './Contact.module.css';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import deleteIcon from '../../../assets/delete-icon.svg';

import { deleteContact } from '../../../redux/operation';

const Contact = ({id, name, phone}) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <li className={css.contact} key={id}>
      <div className={css.pair}>
        <span className={css.name}>{name}</span>
        <span className={css.phone}>{phone}</span>
      </div>
      <Button
        className={css.deleteButton}
        type='button'
        onClick={() => {
          handleDeleteContact(id);
        }}>
        <Icon src={deleteIcon} size='24' />
      </Button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string
}

export default Contact;