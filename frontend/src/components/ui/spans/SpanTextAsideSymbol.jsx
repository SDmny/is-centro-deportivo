function SpanTextSymbol({ text, symbol }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-secondary text-xl">
          {symbol}
        </span>
        <span className="text-sm font-semibold text-on-surface-variant">
          {text}
        </span>
      </div>
    </>
  );
}

export default SpanTextSymbol;
