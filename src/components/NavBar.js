import preprLogo from '../assets/preprLogo.png'
import userImg from '../assets/userImg.png'

const NavBar = () => {
  return (
    <div className="navContainer">
      <nav className='headerNav bold'>

        <div>
          <a href="https://preprlabs.org/explore"><img src={preprLogo} alt="prepr labs logo" className="preprLogo" /></a>
        </div>

        <ul  className="navBarText">
          <li><a href="https://preprlabs.org/explore">Explore</a></li>
          <li><a href="https://preprlabs.org/user/home">Dashboard</a></li>
          <li><a href="https://preprlabs.org/list/challenge">My <br /> Challenges</a></li>
          <li><a href="https://preprlabs.org/joinedLab">My <br /> Labs</a></li>
          <li><a href="https://preprlabs.org/my-projects">My <br />  Projects</a></li>
          <li><a href="https://preprlabs.org/explore">Career <br />  Explorer</a></li>
        </ul>

        <ul className="navBarIcons">
          <li><i class="bi bi-bell-fill"></i></li>
          <li><i class="bi bi-chat-left-fill"></i></li>
          <li><i class="bi bi-question-circle-fill"></i></li>

        <form className="navSearchBar">
          <label htmlFor="navBarSearch"></label>
          <input type="text" placeholder="Search..." name="navBarSearch" />
        </form>

          <li className="userIcons"><img src={userImg} alt="" /></li>
          <li className="userIcons"><i class="bi bi-grid-3x3-gap-fill"></i></li>
        </ul>

      </nav>
    </div>
  )
}

export default NavBar;