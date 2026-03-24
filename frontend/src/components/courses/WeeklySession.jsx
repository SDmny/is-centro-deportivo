function WeeklySession({
  day,
  dayNumber,
  activity,
  time,
  spotInfo,
  buttonText,
}) {
  return (
    <>
      <div className="bg-surface-container-lowest p-6 rounded-lg flex items-center justify-between group hover:shadow-[0_8px_24px_rgba(76,100,85,0.06)] transition-all">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-lg bg-surface-container-low flex flex-col items-center justify-center">
            <span className="text-[10px] font-bold text-outline">{day}</span>
            <span className="text-lg font-extrabold text-primary">
              {dayNumber}
            </span>
          </div>
          <div>
            <h4 className="font-bold text-on-surface">{activity}</h4>
            <p className="text-sm text-on-surface-variant font-medium">
              {time}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-xs font-bold text-on-tertiary-fixed-variant bg-tertiary-fixed px-3 py-1 rounded-full">
            {spotInfo}
          </span>
          <button className="text-primary font-bold text-sm hover:underline">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}

export default WeeklySession;
