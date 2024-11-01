import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from './post-content.module.css';
import Image from "next/image";

export default function PostContent(props: any) {
    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        // img(image: any) {

        //     return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} priority />
        // },
        p(paragraph: any) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return <div className={classes.image}>
                    <Image src={`/images/posts/${post.slug}/${image.properties.src}`} alt={image.properties.alt} width={600} height={300} priority />
                </div>
            }

            return <p>{paragraph.children}</p>
        }


    }

    return <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
}