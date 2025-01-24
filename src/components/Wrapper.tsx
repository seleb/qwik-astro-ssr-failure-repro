import { InlineComponentPropsSpread } from './InlineComponentPropsSpread';
import { InlineComponentSimple } from './InlineComponentSimple';

export const Wrapper = () => {
  return (
    <div>
      <InlineComponentSimple />
      <InlineComponentPropsSpread />
    </div>
  );
};
