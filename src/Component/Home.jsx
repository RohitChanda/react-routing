import React, { Suspense, lazy, useState } from "react";
const PreviewComponent = lazy(() => delayForDemo(import("./Preview")));

const delayForDemo = (promiseCb) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, 2000);
  }).then(() => promiseCb)
}
const Home = () => {
  const [showPrev, setShowPrev] = useState(false);
  return (
    <div>
      
      Home Component
      <h1>Example of Lazy loading with supense</h1>
      <button onClick={() => setShowPrev((prev) => !prev)}>Show Preview</button>
      {showPrev && (
        <>
        <Suspense fallback={<> Loading.....</>}>
          <h2> This is your previeww</h2>
          <PreviewComponent />

        </Suspense>
        </>
      )}
    </div>
  );
};

export default Home;
