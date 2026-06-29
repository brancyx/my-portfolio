import { client, postBySlugQuery, postsQuery } from "@/lib/sanity";
import type { Post } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import Link from "next/link";

interface Props { params: Promise<{ slug: string }> }

export const dynamicParams = false;

// Returns all published post slugs. Falls back to a placeholder so the
// static export succeeds even before any posts exist in Sanity.
export async function generateStaticParams() {
  const fallback = [{ slug: "__placeholder__" }];
  try {
    const posts = await client.fetch<Post[]>(postsQuery);
    if (!posts?.length) return fallback;
    return posts.map(p => ({ slug: p.slug.current }));
  } catch {
    return fallback;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "__placeholder__") return { title: "Blog | Brandon Chen" };
  try {
    const post = await client.fetch<Post>(postBySlugQuery, { slug });
    return { title: `${post?.title ?? "Post"} | Brandon Chen`, description: post?.excerpt };
  } catch { return { title: "Post | Brandon Chen" }; }
}

const ptComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => <h2 className="text-2xl font-medium text-white mt-10 mb-4">{children}</h2>,
    h3: ({ children }: { children?: React.ReactNode }) => <h3 className="text-xl font-medium text-white mt-8 mb-3">{children}</h3>,
    normal: ({ children }: { children?: React.ReactNode }) => <p className="text-gray-300 leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }: { children?: React.ReactNode }) => <blockquote className="border-l-4 border-green-500 pl-4 my-6 text-gray-400 italic">{children}</blockquote>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => <strong className="text-white font-medium">{children}</strong>,
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    code: ({ children }: { children?: React.ReactNode }) => <code className="bg-gray-800 text-green-400 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>,
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors">{children}</a>
    ),
  },
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code: ({ value }: { value: any }) => (
      <pre className="bg-gray-800 rounded-xl p-4 overflow-x-auto my-6"><code className="text-sm font-mono text-gray-300">{value.code}</code></pre>
    ),
  },
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  // Placeholder page — redirect visitors to blog index
  if (slug === "__placeholder__") notFound();

  let post: Post | null = null;
  try { post = await client.fetch<Post>(postBySlugQuery, { slug }); } catch { notFound(); }
  if (!post) notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("en-SG", { year: "numeric", month: "long", day: "numeric" });
  return (
    <main className="bg-gray-900 text-gray-400 min-h-screen">
      <Navbar />
      <article className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
        <Link href="/blog" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-10 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>
        <header className="mb-10">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full">
                  <Tag className="w-3 h-3" />{tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl font-medium text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>{date}</span>
            {post.estimatedReadingTime > 0 && (
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.estimatedReadingTime} min read</span>
            )}
          </div>
          {post.excerpt && (
            <p className="mt-4 text-gray-400 text-lg leading-relaxed border-l-4 border-gray-700 pl-4">{post.excerpt}</p>
          )}
        </header>
        {post.body && <PortableText value={post.body} components={ptComponents} />}
      </article>
      <Footer />
    </main>
  );
}
