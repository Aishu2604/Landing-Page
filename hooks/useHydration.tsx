import { useEffect, useState } from "react";

const useHydration = ()=>{
    const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted
}


export default useHydration