import { useSelector } from "react-redux";

export const Review = ({ commentId }) => {
    const comment = useSelector((state) => state.review.entities[commentId]);
    const user = useSelector((state) => state.user.entities[comment.userId]);
    return(
        <p>{user.name}: {comment.text} {comment.rating}\5</p>
    );
}