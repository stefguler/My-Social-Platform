import { Card } from "./PostCard.styles"

export default function PostCard(props) {
    const post = props.post

    console.log(post)

    return (
        <>
        <Card>
            <span>Post #{post.id}</span>
        </Card>
        </>
    )
}