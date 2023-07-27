import { useState, useCallback } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const open = useCallback(() => {
    setIsShowing(true);
  }, []);

  const close = useCallback(() => {
    setIsShowing(false);
  }, []);

  return {
    isShowing,
    open,
    close,
  };
};

export default useModal;
