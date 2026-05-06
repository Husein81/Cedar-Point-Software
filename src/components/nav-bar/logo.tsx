import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/favicon.ico"}
        width={35}
        height={35}
        alt=""
        className="rounded size-7 md:size-8"
      />
      <span className="text-sm md:text-lg font-bold">Cedar Point Software</span>
    </div>
  );
}
