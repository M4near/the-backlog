import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

function Navbar({user, setUser}) {
  const history = useHistory();
  function handleLogout() {
    fetch("/logout",{
      method: "DELETE",
    }).then(() => setUser())
    // .then(() => {
    //   history.push('/login')
    // })
    // .then(window.location.reload())
  }

  if(!user) 
    return(
      <header className="navBarHeader">
      <div class="navBar">
        <h1 class="logo-name">The Backlog </h1>
        <h5 class="logo-sub">"I swear I will check that out once I get through my backlog."</h5>
      </div>
      
    </header>
    )
    else{
  return (
    <header className="navBarHeader">
      <div >

        <h1 class="logo-name">The Backlog </h1>
        <h5 class="logo-sub">"I swear I will check it out once I get through my backlog."</h5>
      </div>
      <nav >

        <Link className="navBarLink" to="/">Home</Link>
        <Link className="navBarLink" to="/games">Games</Link>
        <Link className="navBarLink" to="/backlog">Backlog</Link>
        <Link className="navBarLink" to="/" onClick={handleLogout}>Logout</Link>
        <Link className="navBarLink" to="/addgame">Add Game</Link>
      </nav>
    </header>

  );
}}

export default Navbar;