import { Suspense } from "react";

export const SuspenseLoadable = (ChildComponent) => {
  return (props) => {
    return (
      <Suspense fallback={<>Loading...</>}>
        <ChildComponent {...props} />
      </Suspense>
    );
  };
};
