import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl">Nextjs Tutorial</h1>
      <Link href={"/client"} className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
