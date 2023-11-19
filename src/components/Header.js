const Header = () => {
  return (
    <header>
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