import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-slate-100 flex justify-center items-center">
        <div className="w-1/3 bg-white h-3/4 rounded-xl flex items-center flex-col">
          <Image src='/logo.svg' alt='reg' width={300} height={300} className="w-1/2 mt-16" />
          <h4 className="text-2xl">Вход</h4>
          <div className="w-2/3 text-left text-gray-500  mt-3">
            <h4>Имя пользователя</h4>
          </div>
          <input
            className="rounded-lg border-gray-400 border-2 w-2/3 h-11 p-3"
            type="text"
          />

          <div className="w-2/3 text-left text-gray-500 mt-3">
            <h4>Пароль</h4>
          </div>
          <input
            className="rounded-lg border-gray-400 border-2 w-2/3 h-11 p-3"
            type="text"
          />
          <div className="mt-8 flex w-2/3 space-x-0 justify-between">
            <Link href='/main'>
              <button className="w-40 h-11 bg-white border-blue-600 border-2 rounded-2xl text-blue-600">
                Регистрация
              </button>
            </Link>
            <Link href='/main'>
              <button className="w-40 h-11 bg-blue-600 border-blue-600 border-2 rounded-2xl text-white">
                Вход
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
