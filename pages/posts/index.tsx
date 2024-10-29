import AllPosts from "@/components/posts/all-posts";
import type { Post } from "@/types";

const DUMMY_POSTS: Post[] = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started With Next.js',
        image: 'getting-started-nextjs.png',
        excerpt: 'Next.js is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
        date: '2024-10-29'
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started With Next.js',
        image: 'getting-started-nextjs.png',
        excerpt: 'Next.js is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
        date: '2024-10-29'
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started With Next.js',
        image: 'getting-started-nextjs.png',
        excerpt: 'Next.js is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
        date: '2024-10-29'
    },
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started With Next.js',
        image: 'getting-started-nextjs.png',
        excerpt: 'Next.js is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
        date: '2024-10-29'
    },
];
export default function AllPostspage() {
    return <AllPosts posts={DUMMY_POSTS} />
}