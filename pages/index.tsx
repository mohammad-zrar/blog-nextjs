import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Fragment } from "react";
import type { Post } from "@/types";
import { getFeaturedPosts } from "@/lib/posts-util";

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

export default function HomePage(props: any) {

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }, revalidate: 60
  }
}
