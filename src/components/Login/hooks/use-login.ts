import { useCallback, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { LoginFormModel } from "../Login.model";
import { setUser, useAppDispatch } from "../../../store";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const onLogin = useCallback(async (data: LoginFormModel) => {
    setIsLoading(true);
    const auth = getAuth();

    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      dispatch(
        setUser({
          id: user.uid,
          email: user.email,
          token: (user as any).accessToken,
        })
      );
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    onLogin,
  };
};
