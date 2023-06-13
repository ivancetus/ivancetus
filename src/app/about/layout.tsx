export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pb-32 px-24 md:px-12 xs:px-8">{children}</div>;
}
