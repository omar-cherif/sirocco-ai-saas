"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4a70e628-d948-48f9-8b1a-0bd1220737b2");
  }, []);

  return null;
};
