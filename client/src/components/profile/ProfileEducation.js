import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
    education: { school, from, to, degree, fieldofstudy, description },
}) => {
    return (
        <>
            <div>
                <h3>{school}</h3>
                <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
                {to === null ? (
                    'Current'
                ) : (
                    <Moment format='YYYY/MM/DD'>{to}</Moment>
                )}
                <p>
                    <strong>Degree: </strong>
                    {degree}
                </p>
                <p>
                    <strong>Field Of Study: </strong>
                    {fieldofstudy}
                </p>
                <p>
                    <strong>Description: </strong>
                    {description}
                </p>
            </div>
        </>
    );
};

ProfileEducation.propTypes = {
    education: PropTypes.array.isRequired,
};

export default ProfileEducation;
