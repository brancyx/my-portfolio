import Link from "next/link";
import { Clock, Tag } from "lucide-react";
import type { Post } from "@/types";

export default function PostCard({ post }: { post: Post }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-SG", { year: "numeric", month: "long", day: "numeric" });
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <article className="group bg-gray-800 border border-gray-700 hover:border-green-500/50 rounded-xl p-6 transition-all duration-200 h-full flex flex-col">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.map(tag => <span key={tag} className="flex items-center gap-1 text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded-full"><Tag className="w-2.5 h-2.5" />{tag}</span>)}
          </div>
        )}
        <h2 className="text-white text-xl font-medium group-hover:text-green-400 transition-colors mb-2 flex-1">{post.title}</h2>
        {post.excerpt && <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>}
        <div className="flex items-center gap-4 text-gray-500 text-xs mt-auto pt-4 border-t border-gray-700">
          <span>{date}</span>
          {post.estimatedReadingTime > 0 && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.estimatedReadingTime} min read</span>}
        </div>
      </article>
    </Link>
  );
}
