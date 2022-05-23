import { Link } from "react-router-dom";

function Navbar({user, setUser}) {
  function handleLogout() {
    fetch("/logout",{
      method: "DELETE",
    }).then(() => setUser())
  }

  if(!user) 
    return(
      <header>
      <div class="logo">
        <h1 class="logo-name">The Backlog </h1>
        <h5 class="logo-sub">"I swear I will check that out once I get through my backlog."</h5>
      </div>
      
    </header>
    )
    else{
  return (
    <header>
      <div class="logo">

        <h1 class="logo-name">The Backlog </h1>
        <h5 class="logo-sub">"I swear I will check it out once I get through my backlog."</h5>
      </div>
      <nav class="nav-bar">

        <Link to="/">||Home</Link>
        <Link to="/games">||Games</Link>
        <Link to="/backlog">||Backlog</Link>
        <Link to="/" onClick={handleLogout}>||Logout||</Link>
      </nav>
    </header>

  );
}}

export default Navbar;