import "./navbar.css"

export default function navbar(){
    return(
        <nav className="links">
        <a href="./index.html"  className="nav_link ">HOME</a>
        <a href="./about.js"  className="nav_link">ABOUT</a>
        <a href="../blogs.js"  className="nav_link">BLOGS</a>
        <a href="../contact.js"  className="nav_link">CONTACT</a>
        <a href="../skills.js"  className="nav_link">SKILLS</a>
        <a href="./login" id="account"  className="nav_link">LOGIN</a>
        </nav>
    )
}