import { Form, NavLink } from "react-router-dom";
import logomark from "../assets/logomark.svg";
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid'

const Nav = ({userName}) =>{
    return (
    <nav>
        <NavLink to="/" aria-label="Go to Home">
            <img src={logomark} alt="" height={30}/>
            <span>SpendWise</span>
        </NavLink>
        {
            userName && (
                <Form method="post" action="/logout" 
                onSubmit={(event) => {
                    if(!confirm("Are you sure, you want to logout and delete the entire data?")){
                        event.preventDefault();
                    }
                }}>
                    <button type="submit" className="btn btn--warning">
                        <span>Logout</span>
                        <ArrowLeftEndOnRectangleIcon width={20} />
                    </button>
                </Form>
            )
        }
    </nav>
    )
}
export default Nav;