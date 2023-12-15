import ReachSwitch from 'react-switch';

const Header = (props) => {
  return (
    <header>
      <div className='switch'>
      <label>{props.theme === null ? <i class="bi bi-brightness-high-fill"></i> : <i class="bi bi-moon-stars-fill"></i>}</label>
        <ReachSwitch
          onChange={props.onChange}
          checked={props.checked}
        />
      </div>

      <div>
        <h1 className="poppins bold">Explore Your Interests</h1>
        <p>We’ll recommend content based on your interests we’ve listed here. <br /> Feel free to add or remove topics to customize your experience !</p>

        <form className="headerSearchBar">
          <label htmlFor="headerBarSearch"></label>
          <input type="text" placeholder="Search skills" name="headerBarSearch" />
        </form>

        <h2 className="poppins bold">Click an interest to narrow your recommendations.</h2>

        <div className="exploreRecommendations">
          <ul>
            <li>Wellbeing</li>
            <li>Customer Loyalty</li>
            <li>Hashtags</li>
            <li>Journaling</li>
            <li>Technology Management</li>
            <li>Graphic Design</li>
            <li>HTML</li>
            <li>Foodservice Distribution</li>
            <li>Digital toolkit</li>
            <li>Databases</li>
          </ul>
        </div>

      </div>
    </header>

  )
}

export default Header;