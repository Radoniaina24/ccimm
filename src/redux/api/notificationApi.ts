// redux/api/notificationApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Notification {
  _id: string;
  recipient: string;
  message: string;
  type: "TASK_ASSIGNED" | "TASK_UPDATED" | "TASK_DELETED" | "TASK_DEADLINE_APPROACHING";
  task?: {
    _id: string;
    title: string;
    status: string;
  };
  read: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationResponse {
  data: Notification[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  tagTypes: ["Notifications"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    credentials: "include",
  }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({

    // Récupérer toutes les notifications
    getNotifications: builder.query<NotificationResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 20 }) => ({
        url: `notifications`,
        params: { page, limit },
      }),
      providesTags: ["Notifications"],
    }),

    // Compter les notifications non lues
    getUnreadCount: builder.query<{ count: number }, void>({
      query: () => "notifications/unread-count",
      providesTags: ["Notifications"],
    }),

    // Marquer comme lue
    markAsRead: builder.mutation<Notification, string>({
      query: (id) => ({
        url: `notifications/${id}/read`,
        method: "PATCH",
      }),
      invalidatesTags: ["Notifications"],
    }),

    // Marquer comme non lue
    markAsUnread: builder.mutation<Notification, string>({
      query: (id) => ({
        url: `notifications/${id}/unread`,
        method: "PATCH",
      }),
      invalidatesTags: ["Notifications"],
    }),

    // Marquer toutes comme lues
    markAllAsRead: builder.mutation<void, void>({
      query: () => ({
        url: "notifications/mark-all-read",
        method: "PATCH",
      }),
      invalidatesTags: ["Notifications"],
    }),

    // Supprimer une notification
    deleteNotification: builder.mutation<void, string>({
      query: (id) => ({
        url: `notifications/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notifications"],
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useGetUnreadCountQuery,
  useMarkAsReadMutation,
  useMarkAsUnreadMutation,
  useMarkAllAsReadMutation,
  useDeleteNotificationMutation,
} = notificationApi;