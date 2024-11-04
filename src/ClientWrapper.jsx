
"use client"
import { useState, useEffect, useRef } from "react";

const ClientWrapper = ({ children }) => {
  const [isMounted, setIsInitialized] = useState(false);

  const observerRef = useRef(null)
  useEffect(() => {
    setIsInitialized(true);

  }, []);
  return (
    <>
      {isMounted && children}
    </>
  );

}

export default ClientWrapper;




