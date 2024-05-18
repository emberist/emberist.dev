import { AppCanvas } from "./components/Canvas";
import { DimensionsProvider } from "./components/DimentionsProvider";

const App = () => (
  <DimensionsProvider>
    <div className=" flex flex-col w-full h-screen justify-center items-center">
      <AppCanvas />
    </div>

    <div className="absolute top-0 left-0 w-screen h-screen pointer-events-none">
      <div className="absolute flex gap-2 text-white bottom-[40px] left-[90px] text-sm">
        <a
          className=" text-white pointer-events-auto hover:underline"
          target="_blank"
          href="https://github.com/emberist"
        >
          github
        </a>

        <a
          className=" text-white pointer-events-auto hover:underline"
          target="_blank"
          href="https://x.com/emberist"
        >
          x.com
        </a>
      </div>

      <div className="absolute text-white bottom-[40px] right-[40px] text-sm">
        created with ❤ using{" "}
        <a
          className="pointer-events-auto hover:underline"
          href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
          target="_blank"
        >
          r3f
        </a>
      </div>

      <a
        className="absolute text-white top-[40px] left-[90px] text-sm"
        href="#"
      >
        Find the secret...
      </a>
    </div>
  </DimensionsProvider>
);

export default App;
