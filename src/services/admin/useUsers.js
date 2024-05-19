import { toast } from "react-toastify";
import axios from "../../api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetUsers = (page, limit) => {
  console.log(page, "query");
  return useQuery({
    queryKey: ["users-get"],
    queryFn: async () =>
      await axios
        .get(
          `/admin/getUsersForAdmin/?page=${page}&limit=${limit ? limit : 10}`
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
        position: toast.POSITION.TOP_RIGHT,
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
        position: toast.POSITION.TOP_RIGHT,
      });
      queryClient.invalidateQueries("users-get");
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

export const useGetJobs = () => {
  return useQuery({
    queryKey: ["jobs-get"],
    queryFn: async () =>
      await axios
        .get(`admin/getJobsForAdmin`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        }),
  });
};
export const useGetQuickJobs = () => {
  return useQuery({
    queryKey: ["quickjobs-get"],
    queryFn: async () =>
      await axios
        .get(`admin/getQuickjobsForAdmin`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        }),
  });
};
export const useGetCompanies = () => {
  return useQuery({
    queryKey: ["company-get"],
    queryFn: async () =>
      await axios
        .get(`admin/getOfficesForAdmin`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        }),
  });
};

export const useGetCompany = (page, limit) => {
  console.log(page, "query");
  return useQuery({
    queryKey: ["office-get"],
    queryFn: async () =>
      await axios
        .get(
          `/admin/getOfficesForAdmin/?page=${page}&limit=${limit ? limit : 10}`
        )
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        }),
  });
};

export const useCreateCompany = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newProduct) => {
      return await axios.post('/offices', newProduct);
    },
    onSuccess: () => {
      toast.success("Ofis muvaffaqqiyatli qo'shildi!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      queryClient.invalidateQueries("office-post"); // Invalidate any relevant queries
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  });
};
