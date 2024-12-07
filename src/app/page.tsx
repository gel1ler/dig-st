import { MoreBtn } from "@/components/UI/form/Buttons";
import Line from "@/components/UI/line";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen items-stretch">
      {/* Start */}
      <div className="flex w-screen h-screen items-center relative">
        <Line />
        <div className="flex items-center gap-2 w-full px-10">
          <Image
            className=""
            src="/logo.svg"
            alt="Logo"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-2">
            <p className="text-6xl">Цифровой студенческий <br /> офис МГТУ</p>
            <p className="text-2xl">Все нужное в одном месте</p>
            <MoreBtn
              href='/login'
              text='Войти'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
