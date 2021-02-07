import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

const getDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);

export const getDirectoryProps = createSelector(
  [getDirectorySections],
  (sections) => ({
    sections,
  })
);
