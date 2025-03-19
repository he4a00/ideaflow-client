import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useId } from "react";

interface PublicCheckboxProps {
  isPublic: boolean;
  onToggle: (value: boolean) => void;
}

export default function PublicCheckbox({
  isPublic,
  onToggle,
}: PublicCheckboxProps) {
  const id = useId();
  return (
    <div className="flex items-start gap-2">
      <Checkbox
        checked={isPublic}
        id={id}
        aria-describedby={`${id}-description`}
        onCheckedChange={onToggle}
      />
      <div className="grid grow gap-2">
        <Label htmlFor={id}>Share Your Mindmap Publicly</Label>
        <p id={`${id}-description`} className="text-muted-foreground text-xs">
          Enable this option to make your mindmap visible to anyone. When
          public, others can view and learn from your creation.
        </p>
      </div>
    </div>
  );
}
