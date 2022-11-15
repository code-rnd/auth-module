import { useAppSelector } from "../../store";

export const useAuth = () => {
  const user = useAppSelector((state) => state.user);

  return {
    isAuth: !!user.id,
    ...user,
  };
};
