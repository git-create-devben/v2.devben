import dynamic from "next/dynamic";

const V2 = dynamic(() => import("@/components/v2"));

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <V2/>
    </div>
  );
}
