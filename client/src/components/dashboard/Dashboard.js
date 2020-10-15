import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { DashboardActions } from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { deleteAccount } from '../../actions/profile';

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
    deleteAccount,
    profile: { profile, loading },
    auth: { user },
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

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
                    <Experience experience={profile.experience} />
                    <Education education={profile.education} />

                    <div className='my-2'>
                        <button
                            onClick={() => deleteAccount()}
                            className='btn btn-danger'
                        >
                            <i className='fas fa-user-minus'></i> Delete My
                            Account
                        </button>
                    </div>
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
    deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
    Dashboard
);
