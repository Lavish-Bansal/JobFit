import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const data = await login({ email, password });
      setUser(data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);
    try {
      const data = await register({ username, email, password });
      setUser(data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      // eslint-disable-next-line no-unused-vars
      const data = await logout();
      setUser(null);
      // eslint-disable-next-line no-empty, no-unused-vars
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getAndSetUser = async () => {
      try {
        const data = await getMe();
        setUser(data.user);
        // eslint-disable-next-line no-unused-vars, no-empty
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    getAndSetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, loading, handleRegister, handleLogin, handleLogout };
};
