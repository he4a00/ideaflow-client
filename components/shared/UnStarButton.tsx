import React from 'react';
import { useUnStarDiagram } from '@/app/services/hooks/Diagram/useDiagram';
import { Heart } from 'lucide-react';

interface StarButtonProps {
  id: string;
}

const UnStarButton = ({ id }: StarButtonProps) => {
  const { mutate: unStarDiagram, isPending: unStarLoading } =
    useUnStarDiagram(id);
  return (
    <button
      className="cursor-pointer"
      onClick={() => unStarDiagram()}
      disabled={unStarLoading}
    >
      <Heart fill="red" />
    </button>
  );
};

export default UnStarButton;
