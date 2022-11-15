import { useCallback, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { setUser, useAppDispatch } from "../../../store";
import { LoginFormModel } from "../../Login";

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const onSignUp = useCallback(async (data: LoginFormModel) => {
    setIsLoading(true);
    const auth = getAuth();

    try {
      const { user } = await createUserWithEmailAndPassword(
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
    onSignUp,
  };
};
