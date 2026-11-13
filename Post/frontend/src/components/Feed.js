import Image from "next/image";

function PostCard({ post }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-950/3">
      <div className="w-full bg-slate-100">
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.caption || "Post image"}
            unoptimized
            width={1200}
            height={800}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-auto w-full"
          />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
            {post.name?.slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-900">
              {post.name}
            </p>
            <p className="text-xs text-slate-500">
              {post.username}
              {post.time && (
                <>
                  <span className="px-1">·</span> {post.time}
                </>
              )}
            </p>
          </div>
          <span
            aria-label={`${post.likes ?? 0} likes`}
            className="text-sm text-slate-500"
          >
            <span aria-hidden="true" className="mr-1 text-rose-500">
              ♥
            </span>
            {post.likes ?? 0}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="mt-4 text-sm leading-6 text-slate-700">
            {post.caption}
          </p>
          {/* <button
            type="button"
            aria-label="Delete post"
            className="rounded-full p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
          >
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
            </svg>
          </button> */}
        </div>
      </div>
    </article>
  );
}

export default function Feed({ posts, refetchPosts }) {
  // refetchPosts();
  return (
    <>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-violet-700">YOUR COMMUNITY</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            Feed
          </h1>
          <p className="mt-2 text-slate-500">
            A little inspiration from around your community.
          </p>
        </div>
        <span className="w-fit rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700">
          {posts.length} posts
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
}
