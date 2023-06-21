import React from "react";
import "../styles.css/Css.css";
import { Link } from 'react-router-dom'
const Forthpage = () => {
    return (
        <div>
            <header className="forth">
                <h1>Agriculture sector</h1>
            </header>

            <div className="container">
                <p><a href="#"></a>PROJECT1</p>
            </div>

            <div className="container">
                <p><a href="#"></a>PROJECT 2</p>
            </div>

            <div className="container">
                <p>  <a href="#"></a>PROJECT 3</p>
            </div>

            <div className="container">
                <p>  <a href="#"></a>PROJECT 4</p>
            </div>

            <div className="button" align="right">
                <Link to="/thridpage"> <button type="button" class="btn btn-danger">
                    Back
                </button>
                </Link>


                <a href="#">
                    <button type="button" class="btn btn-danger">
                        Delete
                    </button>
                </a>


                <a href="#">
                    <button type="button" class="btn btn-danger">
                        Add
                    </button>
                </a>


                <a href="#">
                    <button type="button" class="btn btn-primary">
                        Status
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Forthpage;