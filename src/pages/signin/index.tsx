import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Image from "next/image";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Flower from "../../../public/login.png";
import Memo from "../../../public/memonew.png";
import { indie } from "@/fonts/fonts";


export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="flex w-full h-full items-center justify-center bg-[#27262c]">
      <div className="w-full h-full object-cover">
        <Image
          className="w-full h-full object-cover opacity-80"
          fill={true}
          src={Flower}
          alt="signin"
          priority={true}
          unoptimized
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-black lg:justify-center  lg:items-start lg:px-32 ">
        <div className="flex flex-col  gap-10 items-center">
          <div className="flex items-center gap-5">
            <Image
              className=""
              src={Memo}
              width={100}
              height={100}
              alt="memo"
              unoptimized
            />
            <h1 className={`${indie.variable} font-sans text-4xl font-bold`}>Memo</h1>
          </div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="border rounded ">
              <button
                onClick={() => signIn(provider.id)}
                className="font-bold text-xl bg-[rgba(255,255,255,0.49)] w-full p-2"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
