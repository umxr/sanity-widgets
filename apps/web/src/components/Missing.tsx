export const Missing = (block: any) => {
  console.warn("Missing component for", block);
  return (
    <div className="relative flex h-[50vh] p-8 bg-gray-100">
      <div className="relative m-auto text-center max-w-prose flex flex-col gap-2 opacity-50">
        <h1 className="uppercase font-bold text-6xl">{block._type}</h1>
        <h2 className="uppercase text-xs">
          missing component for this block type
        </h2>
      </div>
    </div>
  );
};
