'use client';

import { useState, useMemo, useCallback } from 'react';
import { RegistrationFormData, SortConfig, SortDirection } from '@/types/registration';

interface UsePaginationProps {
  data: RegistrationFormData[];
  initialItemsPerPage?: number;
}

interface UsePaginationReturn {
  currentData: RegistrationFormData[];
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  sortConfig: SortConfig;
  searchTerm: string;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (count: number) => void;
  handleSort: (key: keyof RegistrationFormData) => void;
  setSearchTerm: (term: string) => void;
  goToFirstPage: () => void;
  goToLastPage: () => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

export function usePagination({
  data,
  initialItemsPerPage = 10,
}: UsePaginationProps): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: null,
  });
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrage des données
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return data.filter((item) =>
      Object.values(item).some((value) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowerSearchTerm);
        }
        if (typeof value === 'boolean') {
          return value.toString().includes(lowerSearchTerm);
        }
        return false;
      })
    );
  }, [data, searchTerm]);

  // Tri des données
  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      let comparison = 0;
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      } else if (aValue instanceof Date && bValue instanceof Date) {
        comparison = aValue.getTime() - bValue.getTime();
      } else if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
        comparison = aValue === bValue ? 0 : aValue ? -1 : 1;
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }

      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [filteredData, sortConfig]);

  // Calcul de la pagination
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Données de la page actuelle
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, itemsPerPage]);

  // Gestion du tri
  const handleSort = useCallback((key: keyof RegistrationFormData) => {
    setSortConfig((prev) => {
      let direction: SortDirection = 'asc';
      if (prev.key === key) {
        if (prev.direction === 'asc') direction = 'desc';
        else if (prev.direction === 'desc') direction = null;
      }
      return { key: direction ? key : null, direction };
    });
  }, []);

  // Navigation
  const goToFirstPage = useCallback(() => setCurrentPage(1), []);
  const goToLastPage = useCallback(() => setCurrentPage(totalPages), [totalPages]);
  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);
  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  // Reset page when search or items per page changes
  const handleSetSearchTerm = useCallback((term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  }, []);

  const handleSetItemsPerPage = useCallback((count: number) => {
    setItemsPerPage(count);
    setCurrentPage(1);
  }, []);

  return {
    currentData,
    currentPage,
    totalPages,
    itemsPerPage,
    totalItems,
    sortConfig,
    searchTerm,
    setCurrentPage,
    setItemsPerPage: handleSetItemsPerPage,
    handleSort,
    setSearchTerm: handleSetSearchTerm,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
  };
}
