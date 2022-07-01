import Link from "next/link"

export default function Post({ post }) {
    return (
        <div>
            <span className="text-white">{post.id}</span>
            {" : "}
            <Link href={`/posts/${post.id}`}>
                <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
                    {post.title}
                </span>
            </Link>
        </div>
    );
}
