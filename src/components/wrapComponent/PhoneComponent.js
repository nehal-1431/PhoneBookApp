import withAuthentication from '../../hoc/withAuthentication';
import PhonebookTable from '../baseComponents/PhoneBookTable';
import PhoneBookForm from '../baseComponents/PhoneBookForm';
import PhoneHeading from '../baseComponents/Phoneheading';

const MyComponent = () => {
  return (
    <div>
        <PhoneHeading />
        <PhoneBookForm />
        <PhonebookTable />
    </div>
  )
};

export default withAuthentication(MyComponent);
