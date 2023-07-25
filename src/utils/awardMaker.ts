export function cardAwardMaker(
  roleOrAwardAbbreviation: string,
  bestPositionPaper: boolean
) {
  const resultArray = [];
  if (roleOrAwardAbbreviation !== "D") {
    resultArray.push(roleOrAwardAbbreviation);
  }

  if (bestPositionPaper) {
    resultArray.push("BPP");
  }

  if (resultArray.length === 1) {
    return resultArray[0];
  }

  return resultArray.join(" & ");
}

export function pageAwardMaker(
  roleOrAward: string,
  bestPositionPaper: boolean
) {
  const resultArray = [];

  const roleOrAwardAbbreviation = roleOrAward
    .split(" ")
    .map((word) => word[0])
    .join("");

  if (roleOrAwardAbbreviation !== "D") {
    resultArray.push(roleOrAward);
  }

  if (bestPositionPaper) {
    resultArray.push("Best Position Paper");
  }

  if (resultArray.length === 1) {
    return resultArray[0];
  }

  return resultArray.join(" & ");
}
