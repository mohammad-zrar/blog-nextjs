import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
}

export function getPostData(postIndentifier: string) {
    const postSlug = postIndentifier.replace(/\.md$/, '') // removes the file extension in the end
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);


    const postData = {
        slug: postSlug,
        ...data,
        content
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    })

    const sortedPosts = allPosts.sort((postA:any, postB:any) => postA.date > postB.date?-1: 1)

    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter((post: any) => post.isFeatured);

    return featuredPosts;
}