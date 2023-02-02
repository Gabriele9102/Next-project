import Link from "next/link";


const Navbar = () => {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/users">USERS</Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Navbar;
