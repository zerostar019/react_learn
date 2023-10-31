import { ReviewContainer } from "../Review/container";

export const Reviews = ({ commentsIds }) => {
    return (
        <div>
        <h3>Reviews</h3>
        <ul>
            {commentsIds.map((id) => (
                <li key={id}>
                    <ReviewContainer commentId={id}/>
                </li>
            ))}
        </ul>
    </div>
    );
}