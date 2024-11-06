import { AreaDensity, GroomScale } from "@/type/types";

const ONE_TENTH = 0.1;
const ONE_THIRD = 0.3;

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
  if (
    (groomScale === GroomScale.Small && areaDensity === AreaDensity.Low) ||
    (groomScale === GroomScale.Small && areaDensity === AreaDensity.High)
  ) {
    const clumpTwo = descriptionDensity * ONE_THIRD;
    const clumpOne = clumpTwo * ONE_THIRD;
    const clumpOneMasked = clumpOne * clumpOneMask;
    const clumpTwoMasked = clumpTwo * clumpTwoMask;

    return {
      clumpOne,
      clumpTwo,
      clumpOneMasked,
      clumpTwoMasked,
    };
  }

  if (
    (groomScale === GroomScale.Big && areaDensity === AreaDensity.Low) ||
    (groomScale === GroomScale.Big && areaDensity === AreaDensity.High)
  ) {
    const clumpTwo = descriptionDensity * ONE_TENTH;
    const clumpOne = clumpTwo * ONE_TENTH;
    const clumpOneMasked = clumpOne * clumpOneMask;
    const clumpTwoMasked = clumpTwo * clumpTwoMask;

    return {
      clumpOne,
      clumpTwo,
      clumpOneMasked,
      clumpTwoMasked,
    };
  }

  throw new Error("Invalid parameters");
};
