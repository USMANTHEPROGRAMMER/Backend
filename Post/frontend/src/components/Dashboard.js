"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import CreatePost from "./CreatePost";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  // const [posts, setPosts] = useState(null);

  
  const [activePage, setActivePage] = useState("feed");
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/posts`);
      // setPosts(response.data.data);
      return response.data;
    },
  });

  console.log(data);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />

      <div className="lg:pl-64">
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
          <p className="text-sm font-medium text-slate-500">
            {activePage === "feed" ? "Community" : "Share something new"}
          </p>
          <div className="flex size-9 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-800">
            U
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
          {activePage === "feed" ? (
            isPending ? (
              <div className="flex items-center justify-center h-12">
                Loading Data...
              </div>
            ) : (
              <Feed posts={data.data} refetchPosts={refetch} />
            )
          ) : (
            <CreatePost />
          )}
        </main>
      </div>
    </div>
  );
}
