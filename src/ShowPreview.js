const ShowPreview = ({ input }) => {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <h1 className="font-bold text-4xl tracking-widest">Markdown Preview</h1>
      <div>{input}</div>
    </div>
  );
};

export default ShowPreview;
