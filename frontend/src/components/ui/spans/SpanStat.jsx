function SpanStat({ statTitle = "", statState = "" }) {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.2em] text-outline font-bold mb-1">
          {statTitle}
        </span>
        <span className="text-on-surface font-semibold">{statState}</span>
      </div>
    </>
  );
}

export default SpanStat;
