import labIcon from '../../assets/labIcon.svg';

const IndividualLab = () => {
  return (
    <div className="individualLabContainer">

      <div className="individualLabContainerLeft">
        <div>
          <img src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/GU4ZjyHg7uFtLdcW4A44qcQtj.png" alt="" />
        </div>

        <span className="blue heart"><i class="bi bi-heart"></i></span>0
        <span className="blue share"><i class="bi bi-share-fill"></i></span>0

        <p className="poppins">Hosted by <span className="bold">Prepr</span> </p>
      </div> {/* END individualLabContainerLeft */}

      <div className="individualLabContainerRight">
        <div className='labContainerTitle'>
          <h3 className='blue poppins bold labContainerH3'><a href="https://preprlabs.org/labs/getting-started-lab-for-employment-service-providers-esp">Getting Started Lab For Employment Service Providers (ESP)</a></h3>
          <button className="btnBlue"> + Follow</button>
        </div>

        <div className='individualLabStats'>
          <img src={labIcon} alt="lab icon" className='labIcon' />
          <p className='poppins'>
            <span className='bold'> Public Lab</span> ·
            Last update: <span className='bold'> 1 year ago</span> ·
            Members: <span className='bold'> 35</span> ·
            Duration: <span className='bold'>None</span> ·
            Level: <span className='bold'>None</span>
          </p>
        </div>

        <p className='individualLabDescription'>If you're here then you're a passionate employment service provider who’s constantly looking for new tools and concepts. We've prepared a series of Challenges just for you! The Challenges in this Lab are designed to help you learn how you can get the most out of our platform, get started today!</p>

        <a href="https://preprlabs.org/skillrelated/37174/lab" className='greyButton'>Prepr Labs</a>

      </div> {/* END individualLabContainerRight */}

    </div> //  END individualLabContainer
  )
}

export default IndividualLab;