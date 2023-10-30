import { Review } from "../Review/component";

export const Reviews = ({ commentsIds }) => {
    return (
        <div>
        <h3>Reviews</h3>
        <ul>
            {commentsIds.map((id) => (
                <li key={id}>
                    <Review commentId={id}/>
                </li>
            ))}
        </ul>
    </div>
    );
}