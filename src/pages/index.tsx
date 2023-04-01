import { useRouter } from "next/router";
import { useSession} from "next-auth/react";
import { useEffect } from "react";
import SideBar from "@/components/SideBar/SideBar";
import View from "@/components/View/View";

export default function Home() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    status === "unauthenticated" && router.push(`/signin`);
  }, [router, status]);

  return (
    <>
      {status === "authenticated" && (
        <div className="relative flex">
          <SideBar />
          <View />
        </div>
      )}
    </>
  );
}
