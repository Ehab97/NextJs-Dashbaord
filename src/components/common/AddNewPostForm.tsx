import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef, useContext } from "react";

import { useQueryClient } from "react-query";
import { useMultiUrlQuery } from "../hooks/useMultiUrlQuery";
export const AddNewPostForm: React.FC = () => {
  const queryClient = useQueryClient();
  const [key, setKey] = useState(0);
  let [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError } = useMultiUrlQuery(
    ["/api/posts"],
    async () => {
      const response = await fetch("/api/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      console.log({ posts: data.posts });
      return data.posts.reverse();
    },
    {
      // Set a unique key for this query to force a re-fetch when the key changes
      queryKey: ["/api/posts", key],
    }
  );
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  function closeModal() {
    setKey((prevKey) => prevKey + 1);
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleClick = async () => {
    const title = titleRef?.current?.value;
    const body = bodyRef?.current?.value;
    console.log({ title, body });
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });

      if (response.ok) {
        console.log("Post created successfully");
        queryClient.invalidateQueries("/api/posts");
        // Optionally, you can fetch and update the list of posts here
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Add New Post
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Add your Post
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="col-span-full">
                      <label htmlFor="postTitle" className="block text-sm font-medium leading-6 text-gray-900">
                        title
                      </label>
                      <div className="mt-2">
                        <input
                          ref={titleRef}
                          type="text"
                          name="postTitle"
                          id="postTitle"
                          autoComplete="postTitle"
                          className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label htmlFor="body" className="block text-sm font-medium leading-6 text-gray-900">
                        Body
                      </label>
                      <div className="mt-2">
                        <textarea
                          ref={bodyRef}
                          id="body"
                          name="body"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences Post.</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 mr-4"
                      onClick={() => {
                        handleClick();
                        closeModal();
                      }}
                    >
                      save
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
