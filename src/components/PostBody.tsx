import styles from "../css/PostBody.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function PostBody({ children }: Props) {
  return (
    <div
      className={`
        ${styles.postBody} prose dark:prose-invert mx-auto transition-colors xs:prose-sm prose-code:
      `}
    >
      {children}
    </div>
  );
}
