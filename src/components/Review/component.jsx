export const Review = ({ user, comment }) => {

    return(
        <p>{user.name}: {comment.text} {comment.rating}/5</p>
    );
}