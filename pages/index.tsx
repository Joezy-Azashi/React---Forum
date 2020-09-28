import { useContext } from "react";
import { Store } from "../contextStore";
import MainLayout from "../components/MainLayout";

export default function Home() {
  const { state, dispatch } = useContext(Store);
  return (
    <>
      <MainLayout>
        
      </MainLayout>
    </>
  );
}
