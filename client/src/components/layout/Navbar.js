import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li>
                <Link to='/profiles'>Developers</Link>
            </li>
            <li>
                <Link to='/dashboard'>
                    <i className='fas fa-user' />{' '}
                    <span className='hide-sm'></span>Dashoard
                </Link>
            </li>
            <li>
                <a onClick={() => logout()} href='#!'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to='/profiles'>Developers</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    );

    return (
        <>
            <nav className='navbar bg-dark'>
                <h1>
                    <Link to='/'>
                        <i className='fab fa-connectdevelop'></i> DevMatrix
                    </Link>
                </h1>
                {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
            </nav>
        </>
    );
};

const mapStateToProps = state => ({
    auth: state.auth,
});

Navbar.propTypes = {
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logout })(Navbar);
