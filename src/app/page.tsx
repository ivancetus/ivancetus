import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="items-center justify-center">
        <h1>Hello !</h1>
      </div>
      <Image
        src="/profile-pic-1-transformed.png"
        alt="text"
        width={500}
        height={500}
      />
    </>
  );
}
