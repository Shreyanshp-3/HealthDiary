import React from 'react'
import { Link } from "react-router-dom"
import "bootstrap/js/src/collapse.js";
import './styles.css'





const Navbar = () => {
    return (
        <>
            <section className="header">
                <div className="container-fluids">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <a className="navbar-brand nav-link" href={() => false}>My Fitness</a>
                            <button className="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">

                                <ul className="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/features">Diet Library</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/library">Library</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/food">Foods</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/business">Business</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </section>
        </>
    )
}

export default Navbar