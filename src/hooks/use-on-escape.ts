import { useCallback, useEffect } from "react";

export default function usePressEscape(callBack: () => void): void {
  const escFunction = useCallback(
    (event: any) => {
      // escape code = 27
      if (event.keyCode === 27) {
        callBack();
      }
    },
    [callBack]
  );

  useEffect(() => {
    document?.addEventListener("keydown", escFunction);

    return () => {
      document?.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);
}
