import Layout from "../components/Layout"
import Link from "next/link"
import { getAllPostData } from "../lib/posts";
import Post from "../components/Post"

export default function BlogPage({ filteredPosts }) {
    return (
        <Layout title="Blog page">
            <ul>
                {filteredPosts && filteredPosts.map((post) => <Post key={post.id} post={post}/>)}
            </ul>

            <Link href="/main-page">
            <div className="flex cursor-pointer mt-12">
                <svg
                    className="w-6 h-6 mr-3"
                    fillRule="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >

                <path
                    fillRule="evenodd"
                    d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                />


                </svg>
                <span>Back to main page</span>
            </div>
            </Link>
        </Layout>
    );
}

// build時に呼び出されてサーバサイドで実行される奴。
export async function getStaticProps() {
    const filteredPosts = await getAllPostData();
    return {
        props: {filteredPosts},
        revalidate: 3,
    }
}
