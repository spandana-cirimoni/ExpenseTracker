import { Form } from "react-router-dom";

import {UserPlusIcon} from "@heroicons/react/24/solid";

import illustration from "../assets/illustration1.jpg";

const Intro = () => {
    return (
      <div className="intro">
        <div>
          <h1>Take control of <span className="accent">
            Your Money</span>
          </h1>
          <p>Budgeting made easy!
          </p>
          <Form method="post">
            <input 
            type="text" 
            name="userName" 
            required
            placeholder="Enter your name" 
            aria-label="Your Name"
            autoComplete="given-name" />
            <input 
            type="hidden" 
            name="_action" 
            value="newUser" />
            <button type="submit" className="btn btn--dark">
              <span>
                Create Account
              </span>
              <UserPlusIcon width={20}/>
            </button>
          </Form>
        </div>
        <img src={illustration} />
      </div>
    );
  }
  
  export default Intro