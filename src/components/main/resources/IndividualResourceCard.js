import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resourceIcon from '../../../assets/resourceIcon.svg';


const IndividualResourceCard = () => {
  return (
    <div className="cardContainer">

      <div className="cardContainerLeft">
        <div>
          <img src="https://d3f06rtlkr354b.cloudfront.net/uploads/resources/image/Vv7i5Wrrz2I4WnAsW0qfTWaB87u8Avavi9clrbp1.png" alt="" className='cardImgBorder' />
        </div>

        <p className="poppins">Hosted by <span className="bold">Prepr</span> </p>
      </div> {/* END cardContainerLeft */}

      <div className="cardContainerRight">
        <div className='cardTitle'>
          <h3 className='blue poppins bold cardH3'><a href="#">SFS - Creativity and Innovation - Day 1</a></h3>
        </div>

        <div className='cardStats'>
          <img src={resourceIcon} alt="resource icon" className='cardIcon' />
          <p className='poppins'>
            <span className='bold'> Status: Open</span> ·
            Duration: <span className='bold'>None</span> ·
            Level: <span className='bold'>None</span>
          </p>
        </div>

        <div className="starIcon">
        <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>
        </div>

        <p className='cardDescription'>This is the Skills for Program's lecture decks on Creativity & Innovation.</p>

        <a href="#" className='greyButton'>Creativity</a>
        <a href="#" className='greyButton'>Innovation</a>


      </div> {/* END cardContainerRight */}

    </div> //  END cardContainer
  )
}

export default IndividualResourceCard;