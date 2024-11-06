import { AreaDensity, GroomScale } from "@/type/types";

const ONE_TENTH = 0.1;
const ONE_THIRD = 0.3;

const getMultiplier = (groomScale: GroomScale, areaDensity: AreaDensity) => {
  if (
    (groomScale === GroomScale.Small && areaDensity === AreaDensity.Low) ||
    (groomScale === GroomScale.Small && areaDensity === AreaDensity.High)
  ) {
    return ONE_THIRD;
  }

  if (
    (groomScale === GroomScale.Big && areaDensity === AreaDensity.Low) ||
    (groomScale === GroomScale.Big && areaDensity === AreaDensity.High)
  ) {
    return ONE_TENTH;
  }

  throw new Error("Invalid parameters");
};

export const calculateClumps = ({
  descriptionDensity,
  areaDensity,
  groomScale,
  clumpOneMask,
  clumpTwoMask,
}: {
  descriptionDensity: number;
  areaDensity: AreaDensity;
  groomScale: GroomScale;
  clumpOneMask: number;
  clumpTwoMask: number;
}) => {
  const multiplier = getMultiplier(groomScale, areaDensity);
  const clumpTwo = descriptionDensity * multiplier;
  const clumpOne = clumpTwo * multiplier;
  const clumpOneMasked = clumpOne * clumpOneMask;
  const clumpTwoMasked = clumpTwo * (2 - clumpTwoMask);

  return {
    clumpOne,
    clumpTwo,
    clumpOneMasked,
    clumpTwoMasked,
  };
};
