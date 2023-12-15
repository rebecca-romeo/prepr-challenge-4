import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filters = () => {
  return (
    <aside className="filters bold">
      <h4 className='poppins bold'>Filters</h4>
      <div> <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> <span className='p-2'>Duration</span> </div>
      <div> <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> <span className='p-2'>Level</span></div>
      <div> <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> <span className='p-2'>Organizations</span></div>
      <div> <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> <span className='p-2'>Skills</span></div>
    </aside>
  )
}

export default Filters;