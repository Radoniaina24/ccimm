import { ExpoData, ExpoFormData, ExpoListResponse, ExpoQueryParams } from '@/types/registration';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const expoApi = createApi({
  reducerPath: 'expoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      // Ajouter le token d'authentification si nécessaire
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Expo', 'ExpoList'],
  endpoints: (builder) => ({
    // GET - Liste des expos avec pagination
    getAllExpos: builder.query<ExpoListResponse, ExpoQueryParams>({
      query: (params) => {
        const queryParams = new URLSearchParams();

        if (params.page) queryParams.append('page', params.page.toString());
        if (params.limit) queryParams.append('limit', params.limit.toString());
        if (params.search) queryParams.append('search', params.search);
        if (params.sortBy) queryParams.append('sortBy', params.sortBy);
        if (params.sortOrder) queryParams.append('sortOrder', params.sortOrder);
        if (params.visitorType) queryParams.append('visitorType', params.visitorType);
        if (params.country) queryParams.append('country', params.country);

        return `/api/expo?${queryParams.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.expos.map(({ _id }) => ({
                type: 'Expo' as const,
                id: _id,
              })),
              { type: 'ExpoList', id: 'LIST' },
            ]
          : [{ type: 'ExpoList', id: 'LIST' }],
    }),

    // GET - Une seule expo par ID
    getExpoById: builder.query<ExpoData, string>({
      query: (id) => `/expo/${id}`,
      providesTags: (result, error, id) => [{ type: 'Expo', id }],
    }),

    // POST - Créer une nouvelle expo
    createExpo: builder.mutation<ExpoData, ExpoFormData>({
      query: (data) => ({
        url: '/api/expo',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'ExpoList', id: 'LIST' }],
    }),

    // PUT - Mettre à jour une expo
    updateExpo: builder.mutation<ExpoData, { id: string; data: Partial<ExpoFormData> }>({
      query: ({ id, data }) => ({
        url: `/api/expo/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Expo', id },
        { type: 'ExpoList', id: 'LIST' },
      ],
    }),

    // DELETE - Supprimer une expo
    deleteExpo: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/api/expo/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Expo', id },
        { type: 'ExpoList', id: 'LIST' },
      ],
    }),

    // GET - Statistiques
    getExpoStats: builder.query<
      {
        total: number;
        byType: Record<string, number>;
        byCountry: Record<string, number>;
        newsletterCount: number;
      },
      void
    >({
      query: () => '/api/expo/stats',
      providesTags: [{ type: 'ExpoList', id: 'STATS' }],
    }),
  }),
});

export const {
  useGetAllExposQuery,
  useGetExpoByIdQuery,
  useCreateExpoMutation,
  useUpdateExpoMutation,
  useDeleteExpoMutation,
  useGetExpoStatsQuery,
} = expoApi;
