import { SignIn } from "@phosphor-icons/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Panda from "../../../public/panda.png";
import { indie } from "@/fonts/fonts";

const User = () => {
  const { data} = useSession();


  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="rounded-full w-11 ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              src={Panda}
              width={20}
              height={20}
              alt="userimage"
              unoptimized
            />
          </div>
        </div>
        <h1 className={`${indie.variable} font-sans font-bold text-2xl`}>{data?.user?.name}</h1>
      </div>

      <div className="tooltip tooltip-bottom" data-tip="SignOut">
      <SignIn
        className="cursor-pointer"
        size={30}
        color="#d4d4d4"
        weight="fill"
        onClick={() => signOut()}
      />
      </div>

    </div>
  );
};

export default User;

// data?.user?.image ??
