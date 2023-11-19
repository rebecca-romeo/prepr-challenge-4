const Header = () => {
  return (
    <header>
      <div>
        <h1 className="poppins">Explore Your Interests</h1>
        <p className='arial'>We’ll recommend content based on your interests we’ve listed here. <br /> Feel free to add or remove topics to customize your experience !</p>

        <form className="headerSearchBar">
          <label htmlFor="headerBarSearch"></label>
          <input type="text" placeholder="Search skills" name="headerBarSearch" className="arial" />
        </form>

        <h2 className="poppins">Click an interest to narrow your recommendations.</h2>

      </div>
    </header>
  )
}

export default Header;