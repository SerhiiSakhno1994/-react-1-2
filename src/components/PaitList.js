import PropTypes from 'prop-types';
import Pait from "./Pait";

function PaitList({ items }) {
    return ( <ul>
        {items.map(item => (
            <li key={item.id} >
                  <Pait
    url={item.url}
    title={item.title}
    author={item.author.tag}
    profileUrl={item.author.url}
    price={item.price}
    quantity={item.quantity}
/>
            </li>
        ))}
   </ul>)
};


PaitList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
};

export default PaitList;




   