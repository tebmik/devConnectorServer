import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({ post, auth, addLike, removeLike, deletePost }) => {
    return (
        <div className='post bg-white p-1 my-1'>
            <div>
                <Link to={`/profile/${post.user}`}>
                    <img className='round-img' src={post.avatar} alt='' />
                    <h4>{post.name}</h4>
                </Link>
            </div>
            <div>
                <p className='my-1'>{post.text}</p>
                <p className='post-date'>
                    Posted{' '}
                    <Moment fromNow ago>
                        {post.date}
                    </Moment>{' '}
                    ago
                </p>
                <button
                    onClick={e => addLike(post._id)}
                    type='button'
                    className='btn btn-light'
                >
                    <i className='fas fa-thumbs-up'></i>{' '}
                    {post.likes.length > 0 && <span>{post.likes.length}</span>}
                </button>
                <button
                    onClick={e => removeLike(post._id)}
                    type='button'
                    className='btn btn-light'
                >
                    <i className='fas fa-thumbs-down'></i>
                </button>
                <Link to={`/post/${post._id}`} className='btn btn-primary'>
                    Discussion{' '}
                    {post.comments.length > 0 && (
                        <span className='comment-count'>
                            {post.comments.length}
                        </span>
                    )}
                </Link>
                {!auth.loading && post.user === auth.user._id && (
                    <button
                        onClick={e => deletePost(post._id)}
                        type='button'
                        className='btn btn-danger'
                    >
                        <i className='fas fa-times'></i>
                    </button>
                )}
            </div>
        </div>
    );
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
    PostItem
);
