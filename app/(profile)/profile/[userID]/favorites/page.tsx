"use client";

import { Button } from "@/components/ui/button";
import { Globe, Lock } from "lucide-react";
import Link from "next/link";
import { TDiagram } from "@/constants/types";

import FlowPreview from "@/components/templates/flowPreview";
import { useGetUserFavDiagrams } from "@/app/services/hooks/Diagram/useDiagram";
import UnStarButton from "@/components/shared/UnStarButton";

const UserFav = () => {
  const { data: favourites, isLoading, error } = useGetUserFavDiagrams();

  console.log(error?.message);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        No diagram found
      </div>
    );
  }

  if (!favourites?.result?.items || favourites.result.items.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        No diagram found
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 flex flex-col gap-6">
      <div className="flex sm:items-center items-start flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
        <h1 className="text-2xl font-semibold">My Favorite Diagrams</h1>
        <Link href="/generate">
          <Button className="bg-purple-600 hover:bg-purple-700 cursor-pointer">
            <span className="mr-1">+</span> Generate New
          </Button>
        </Link>
      </div>

      <div className="">
        <div className="relative inline-block">
          <select className="appearance-none cursor-pointer border rounded-md py-2 pl-3 pr-10 bg-white outline-none text-sm">
            <option>Date updated</option>
            <option>Title</option>
            <option>Recently viewed</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favourites?.result?.items?.map((diagram: TDiagram) => (
          <div
            key={diagram.diagramID}
            className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow relative"
          >
            <div className="absolute top-2 right-3 z-50">
              <UnStarButton id={diagram.favouriteID || ""} />
            </div>

            <div className="relative h-40 z-10">
              {diagram.contentJson && (
                <FlowPreview contentJson={diagram.contentJson} />
              )}
            </div>
            <div className="p-4 flex flex-col gap-2">
              <Link
                href={`/templates/${diagram.diagramID}`}
                className="font-medium text-lg hover:underline"
              >
                {diagram.title}
              </Link>
              <div className="flex justify-between text-sm text-gray-500">
                <div className="flex flex-col gap-2">
                  <span>
                    Last edited{" "}
                    {new Date(diagram.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-end flex-col md:flex-row gap-2">
                  {diagram.isPublic === true && <Globe className="h-4 w-4" />}
                  {diagram.isPublic === false && <Lock className="h-4 w-4" />}
                  <span>{diagram.isPublic ? "Public" : "Private"}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFav;
