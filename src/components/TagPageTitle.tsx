type Props = {
  tagName: string;
};
export default function TagPageTitle({ tagName }: Props) {
  return <h2>Tag: {tagName.toUpperCase()}</h2>;
}
