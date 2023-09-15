
import { NavLink } from 'react-router-dom'; 

const List = ({ name, path }) => {
  return (
    <li className='inline-block mx-2 hover:text-gray-400 color-'>
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};

export default List;
