import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';

const Profile = ({
    getProfileById,
    match,
    profile: { profile, loading },
    auth,
}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById]);
    return (
        <>
            {profile === null || loading ? (
                <Spinner />
            ) : (
                <>
                    <Link to='/profiles' className='btn btn-like'>
                        Back to Profiles
                    </Link>
                    {auth.isAuthenticated &&
                        auth.loading === false &&
                        auth.user._id === profile.user._id && (
                            <Link to='/edit-profile' className='btn btn-dark'>
                                Edit Profile
                            </Link>
                        )}
                </>
            )}
        </>
    );
};

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
