import type { PropsOf } from '@builder.io/qwik';

export const InlineComponentPropsSpread = (props: PropsOf<'div'>) => {
  return <div {...props}>inline component with props spread</div>;
};
