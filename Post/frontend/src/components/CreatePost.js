"use client";
import axios from "axios";
import NavIcon from "./NavIcon";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function CreatePost() {
  const [preview, setPreview] = useState(null);
  const [success, setSuccess] = useState(false);

  const queryClient = useQueryClient();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const createPost = useMutation({
    mutationFn: async (formData) => {
      const response = await axios.post(
        "http://localhost:3000/post-create",
        formData,
      );
      return response.data; // Assuming the server returns the created post data
    },
    onSuccess: (data) => {
      console.log("Post created successfully:", data);
      setSuccess(true); // Set success state to true to show success message
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      // Optionally, you can redirect to the post page or show a success message
    },
    onError: (data) => {
      console.error("Error creating post:", data);
    },
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    createPost.mutate(formData);
  }

  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-violet-700">MAKE IT YOURS</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Create a post
        </h1>
        <p className="mt-2 text-slate-500">
          Share a moment with your community.
        </p>
      </div>

      <form
        className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/3 sm:p-8"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-800"
            htmlFor="post-image"
          >
            Image
          </label>
          <label
            className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-7 text-center transition hover:border-violet-400 hover:bg-violet-50/50"
            htmlFor="post-image"
          >
            {preview ? (
              <>
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-40 rounded-lg object-cover"
                />
                <span className="mt-3 text-sm font-medium text-green-600">
                  ✓ Image uploaded! Click to change
                </span>
              </>
            ) : (
              <>
                {/* tumhara purana icon span */}
                <span className="text-sm font-medium text-slate-800">
                  Click to upload an image
                </span>
                <span className="mt-1 text-xs text-slate-500">
                  PNG, JPG or GIF
                </span>
              </>
            )}
            <input
              accept="image/*"
              className="sr-only"
              id="post-image"
              name="image"
              type="file"
              required
              onChange={handleImageChange}
            />
          </label>
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-800"
            htmlFor="post-caption"
          >
            Caption
          </label>
          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
            id="post-caption"
            name="caption"
            placeholder="Write something about your post..."
            type="text"
            required
          />
        </div>

        {success && (
          <div className="flex justify-center">
            <p className="text-green-600">Post Created Successfully</p>
          </div>
        )}

        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-violet-700"
          type="submit"
          disabled={createPost.isPending}
        >
          <NavIcon type="create" />
          {createPost.isPending ? "Creating..." : "Share post"}
        </button>
      </form>
    </section>
  );
}
