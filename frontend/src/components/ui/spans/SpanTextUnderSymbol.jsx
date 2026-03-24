function SpanTextSymbol({ text, symbol }) {
  return (
    <>
      <div className="flex flex-col items-center text-center group">
        <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center mb-3 group-hover:bg-primary-fixed transition-colors">
          <span className="material-symbols-outlined text-primary text-3xl">
            {symbol}
          </span>
        </div>
        <span className="text-sm font-bold text-on-surface-variant">
          {text}
        </span>
      </div>
    </>
  );
}

export default SpanTextSymbol;
