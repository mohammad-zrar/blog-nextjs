import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import type { Post } from "@/types";

export default function AllPostspage(props: any) {
    return <AllPosts posts={props.posts} />
}

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts,
        }
    }
}