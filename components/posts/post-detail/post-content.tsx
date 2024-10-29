import PostHeader from "./post-header";
import classes from './post-content.module.css'
const DUMMY_POST = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With Next.js',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next.js is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2024-10-29',
    content: '# This is a first post'
}
export default function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

    return <article className={classes.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath} />
        {DUMMY_POST.content}
    </article>
}