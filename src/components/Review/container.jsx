import { useSelector } from "react-redux";
import { Review } from "./component";

export const ReviewContainer = ({ commentId }) => {
    const comment = useSelector((state) => state.review.entities[commentId]);
    const user = useSelector((state) => state.user.entities[comment.userId]);

    if (!user || !comment) {
        return null;
    }

    return(
        <Review user={user} comment={comment}/>
    );
}