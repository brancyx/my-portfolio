import { client, postsQuery } from "@/lib/sanity";
import type { Post } from "@/types";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { PenLine } from "lucide-react";

export const metadata: Metadata = { title: "Blog | Brandon Chen", description: "Thoughts, articles and writings by Brandon Chen." };

async function getPosts(): Promise<Post[]> {
  try { return await client.fetch<Post[]>(postsQuery) ?? []; }
  catch { return []; }
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main className="bg-gray-900 text-gray-400 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <PenLine className="w-10 h-10 text-gray-400 mb-4" />
          <h1 className="text-4xl font-medium text-white mb-3">Blog</h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">Thoughts on software, technology, and whatever else is on my mind.</p>
        </div>
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-2">No posts yet.</p>
            <p className="text-gray-600 text-sm">Posts you create in Sanity Studio will appear here automatically.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map(post => <PostCard key={post._id} post={post} />)}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
