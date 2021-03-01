import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

/**
 * Selector to get the directory sections array
 *
 * @returns {array} with the directory sections.
 */
const getDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);

/**
 * Selector to get the props for the directory component
 *
 * @returns {object} with sections (getDirectorySections).
 */
export const getDirectoryProps = createSelector([getDirectorySections], sections => ({
  sections,
}));
