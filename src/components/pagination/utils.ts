export function getPages(currentPage: number, totalPages: number): number[] {
  let offset = 0;

  if (currentPage === 1) {
    offset = -1;
  } else if (currentPage === totalPages) {
    offset = 1;
  }

  return [
    currentPage - offset - 1,
    currentPage - offset,
    currentPage - offset + 1,
  ];
}
