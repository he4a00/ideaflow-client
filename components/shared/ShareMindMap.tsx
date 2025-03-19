import { toPng } from "html-to-image";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Download, Save, Share2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PublicCheckbox from "./PublicCheckbox";
import { useSaveMindMap } from "@/app/services/hooks/Mindmap/useMindMap";

const ShareMindMap = () => {
  const [title, setTitle] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);

  const searchParams = new URLSearchParams(window.location.search);
  const conentjson = searchParams.get("data") || "";

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const exportAsImage = () => {
    const reactFlowNode = document.querySelector(".react-flow");
    if (!reactFlowNode) return;

    toPng(reactFlowNode as HTMLElement, {
      backgroundColor: "#fff",
      quality: 1,
      pixelRatio: 2,
      filter: (node) => {
        return (
          !node.classList?.contains("react-flow__minimap") &&
          !node.classList?.contains("react-flow__controls")
        );
      },
    })
      .then((dataUrl: string) => {
        const link = document.createElement("a");
        link.download = `mindmap-${new Date().toISOString().slice(0, 10)}.png`;
        link.href = dataUrl;
        link.click();

        toast("Your mind map has been exported as an image");
      })
      .catch((error: unknown) => {
        console.error("Error exporting image:", error);
        toast("There was an error exporting your mind map");
      });
  };

  const { mutate: saveMindmap, isPending } = useSaveMindMap({
    title,
    contentjson: conentjson,
    isPublic,
  });

  const handleSave = () => {
    saveMindmap(undefined, {
      onSuccess: () => {
        setIsDialogOpen(false);
      },
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-10 flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            <Save className="mr-2 h-4 w-4" />
            Save Mindmap
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={exportAsImage}>
            <Download className="mr-2 h-4 w-4" />
            Export as image
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Save Your Mindmap</DialogTitle>
            <DialogDescription>
              Save your mindmap by giving it some details.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="items-center">
              <Label htmlFor="title" className="py-3">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
              />
            </div>
            <PublicCheckbox isPublic={isPublic} onToggle={setIsPublic} />
          </div>
          <DialogFooter>
            <Button
              onClick={handleSave}
              disabled={isPending}
              className="cursor-pointer"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Mindmap
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShareMindMap;
