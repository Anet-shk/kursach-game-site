import { useState } from "react";

export function useUserOpen(init = false) {
  const [userOpen, setUserOpen] = useState(init);

  return { userOpen, setUserOpen }
}