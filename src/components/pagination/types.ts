export interface PaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
  totalPages: number;
}
