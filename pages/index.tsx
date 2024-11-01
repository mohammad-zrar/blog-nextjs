import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { Fragment } from "react";
import type { Post } from "@/types";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";



export default function HomePage(props: any) {

  return (
    <Fragment>
      <Head>
        <title>Zrar's Blog</title>
        <meta name='description' content='I post about programming and web development.' />
      </Head>
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
    }
  }
}
