import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { DashboardActions } from './DashboardActions';

import Spinner from '../layout/Spinner';

const StyledWrapper = styled.div`
    position: relative;
    height: 50vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Dashboard = ({
    getCurrentProfile,
    profile: { profile, loading },
    auth: { user },
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    console.log(profile);

    return loading && profile === null ? (
        <StyledWrapper>
            <Spinner />
        </StyledWrapper>
    ) : (
        <>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
                {/* <img src={user.avatar} alt={`${user.name}'s Avatar`} /> */}
                <i className='fas fa-user'></i> Welcome {user && user.name}
            </p>
            {profile !== null ? (
                <>
                    <DashboardActions />
                </>
            ) : (
                <>
                    <p>You have not set up a porfile, please add some info.</p>
                    <Link to='/create-profile' className='btn btn-primary my-1'>
                        Create Profile
                    </Link>
                </>
            )}
        </>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
