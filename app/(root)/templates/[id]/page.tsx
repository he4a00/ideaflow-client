"use client";

import { useGetDiagramById } from "@/app/services/hooks/Diagram/useDiagram";
import CloneMindMap from "@/components/shared/CloneMindMap";
import DiagramFlow from "@/components/shared/CommunityMindmapFlow";
import StarDiagramButton from "@/components/shared/StarDiagramButton";
import { useParams } from "next/navigation";

const DiagramPage = () => {
  // const router = useRouter();
  // const { user } = useUserContext();
  // if (!user) {
  //   router.push("/sign-in");
  // }
  const { id } = useParams();

  const {
    data: diagramData,
    isLoading,
    isFetching,
  } = useGetDiagramById({
    id: id as string,
  });

  console.log(diagramData);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (!diagramData) {
    return <div>No diagram found</div>;
  }

  return (
    <div className="mx-auto container p-10">
      {/* start of the header */}
      <div className="flex justify-between gap-2">
        <div className="flex-grow">
          <p className="opacity-50">Mind map for</p>
          <h1 className="text-2xl font-semibold">{diagramData.result.title}</h1>
          <p>
            {" "}
            {diagramData.result.fullName}: {diagramData.result.description}
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <StarDiagramButton
            diagramID={diagramData.result.diagramID}
            isInFavorite={diagramData.result.isInFavorite}
            numberOfFavorites={diagramData.result.numberOfFavorites || 0}
          />
          <CloneMindMap
            contentjson={diagramData.result.contentJson || ""}
            isPublic={diagramData.result.isPublic}
            title={diagramData.result.title}
            isClone={diagramData.result.isClone}
            baseDiagramID={diagramData.result.diagramID}
          />
        </div>
      </div>
      <hr className="mt-10" />
      {/* end of the header */}
      <DiagramFlow id={diagramData.result.diagramID} />
    </div>
  );
};

export default DiagramPage;
