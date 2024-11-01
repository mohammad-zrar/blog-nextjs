import PostItem from "./post-item";
import classes from './posts-grid.module.css'

export default function PostsGrid(props: any) {
    const { posts } = props;

    return <ul className={classes.grid}>
        {posts.map((post: any) => <PostItem key={post.slug} post={post} />)}
    </ul>
}