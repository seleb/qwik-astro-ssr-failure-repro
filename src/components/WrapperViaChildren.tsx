import type { PublicProps } from '@builder.io/qwik';

export const WrapperViaChildren = ({ children }: PublicProps<{}>) => {
  return (
    <div>
      {children}
    </div>
  );
};
