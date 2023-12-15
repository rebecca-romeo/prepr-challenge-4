import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import challengeIcon from '../../../assets/challengeIcon.svg';


const IndividualChallengeCard = () => {
  return (
    <div className="cardContainer">

      <div className="cardContainerLeft">
        <div>
          <img src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/challenge/DGIMMt3qAlFSXjNfOJ0NsrOsW.png" alt="" className='cardImgBorder' />
        </div>

        <span className="blue heart"><i class="bi bi-heart"></i></span>0
        <span className="blue share"><i class="bi bi-share-fill"></i></span>0
        <span className='views'><FontAwesomeIcon icon="fa-solid fa-eye" /></span>0

        <p className="poppins">Hosted by <span className="bold">Prepr</span> </p>
      </div> {/* END cardContainerLeft */}

      <div className="cardContainerRight">
        <div className='cardTitle'>
          <h3 className='blue poppins bold cardH3'><a href="https://preprlabs.org/labs/getting-started-lab-for-employment-service-providers-esp">DTP & FUN - Team Business Innovation Challenge</a></h3>
        </div>

        <div className='cardStats'>
          <img src={challengeIcon} alt="challenge icon" className='cardIcon' />
          <p className='poppins'>
            <span className='bold'> Private Challenge</span> ·
            Challenge deadline: <span className='bold'> 12/01/2023</span> ·
            Total submissions: <span className='bold'> 0</span> ·
            Status: <span className='bold'> Open</span> ·
            Duration: <span className='bold'>None</span> ·
            Level: <span className='bold'>None</span>
          </p>
        </div>

        <p className='cardDescription'>How might we better support businesses around us? Businesses around the world have had to adapt over the last 3 years as the nature of sales has diversified and changed, and will need to continue to evolve to meet the realities of a post-pandemic world. Challenges abound across all aspects of organizations' business models, including operations, workforce, customer experience an...</p>

        <a href="#" className='greyButton'>Audience Analysis</a>
        <a href="#" className='greyButton'>Audience segmentation</a>
        <a href="#" className='greyButton'>Business planning</a>
        <a href="#" className='greyButton'>Collaborative decision-making</a>
        <a href="#" className='greyButton'>Collaborative innovation</a>
        <a href="#" className='greyButton'>Collaborative problem solving</a>
        <a href="#" className='greyButton'>Innovation development</a>
        <a href="#" className='greyButton'>Innovation management</a>
        <a href="#" className='greyButton'>Market entry</a>
        <a href="#" className='greyButton'>Prototyping</a>

      </div> {/* END cardContainerRight */}

    </div> //  END cardContainer
  )
}

export default IndividualChallengeCard;