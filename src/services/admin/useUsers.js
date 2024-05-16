import { toast } from "react-toastify";
import axios from "../../api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetUsers = (page, limit) => {
  console.log(page, 'query');
  return useQuery({
    queryKey: ["users-get"],
    queryFn: async () =>
      await axios
        .get(
          `/admin/getUsersForAdmin/?page=${page}&limit=${
            limit ? limit : 10
          }`
        )
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        }),
  });
};

export const useBlockUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      await axios.post(`/admin/blockUser/${userId}`);
    },
    onSuccess: () => {
      toast.success("User bloklandi!", {
        position: toast.POSITION.TOP_RIGHT
      });
      queryClient.invalidateQueries("users-get");
    },
  });
};

export const useUnblockUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      await axios.post(`/admin/unBlockUser/${userId}`);
    },
    onSuccess: () => {
      toast.success("User blokdan chiqarildi!", {
        position: toast.POSITION.TOP_RIGHT
      });      queryClient.invalidateQueries("users-get");
    },
  });
};

export const useGetJobSeekers = () => {
  return useQuery({
    queryKey: ["jobseeker-get"],
    queryFn: async () =>
      await axios
        .get(`admin/getJobSeekersForAdmin`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        }),
  });
};
export const useGetEmployers = () => {
  return useQuery({
    queryKey: ["employer-get"],
    queryFn: async () =>
      await axios
        .get(`admin/getEmployersForAdmin`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        }),
  });
};
