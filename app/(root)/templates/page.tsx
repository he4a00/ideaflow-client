"use client";

import { Globe, Lock, Search } from "lucide-react";
import {
  getPublicDiagrams,
  getDiagramByTitle,
} from "@/app/services/api/diagram/diagramApi";
import { TDiagram } from "@/constants/types";
import { useState, useEffect } from "react";
import Link from "next/link";
import FlowPreview from "@/components/templates/flowPreview";

const Page = () => {
  const [search, setSearch] = useState("");
  const [diagrams, setDiagrams] = useState<TDiagram[]>([]);
  const [publicDiagrams, setPublicDiagrams] = useState<TDiagram[]>([]);

  useEffect(() => {
    const fetchPublicDiagrams = async () => {
      const data = await getPublicDiagrams();
      setPublicDiagrams(data.result.items);
    };

    fetchPublicDiagrams();
  }, []);

  useEffect(() => {
    const fetchDiagramsByTitle = async () => {
      if (search.trim() !== "") {
        const data = await getDiagramByTitle(search);
        setDiagrams(data.result.items);
      } else {
        setDiagrams(publicDiagrams);
      }
    };

    fetchDiagramsByTitle();
  }, [search, publicDiagrams]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 bg-gray-100 px-4 py-6">
        <div className="flex items-center justify-center gap-4 ">
          <div className="flex flex-col gap-4 w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight ">
              Mind Map templates
            </h1>
            <p className="text-lg text-muted-foreground">
              Collection of real world mind maps from open-source packages and
              real-world apps that you can use as inspiration when architecting
              your app.
            </p>
          </div>
          <div className="">
            <div className="border rounded-lg p-4 bg-white shadow-sm">
              <div className="h-2 bg-gray-200 rounded mb-3"></div>
              <div className="h-2 bg-blue-200 rounded mb-6"></div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-[#4F46E5] rounded w-[50px] h-[50px]"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-3/4 justify-center mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="search"
            className="block w-full p-4 pl-10 text-sm border rounded-md bg-background border-input"
            placeholder="Search for a mind map"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:max-w-6xl w-full md:mx-auto pb-6">
        {diagrams.length > 0 ? (
          diagrams.map((diagram: TDiagram, index: number) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shado w-full"
            >
              <div className="relative h-40 bg-gray-100">
                {diagram.contentJson && (
                  <FlowPreview contentJson={diagram.contentJson} />
                )}
              </div>
              <div className="p-4 flex flex-col gap-2">
                <Link
                  className="hover:underline"
                  href={`/templates/${diagram.diagramID}`}
                >
                  <h3 className="font-medium text-lg">{diagram.title}</h3>
                </Link>
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex flex-col gap-2">
                    <p>{diagram.fullName}</p>
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
          ))
        ) : (
          <div className="text-center text-gray-500 col-span-full">
            No Mind Maps found
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
