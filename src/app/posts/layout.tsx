import TagContextProvider from "@/context/TagContextProvider";
export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TagContextProvider>
      <div className="pt-0 pb-16">{children}</div>
    </TagContextProvider>
  );
}
