const StateInfoCard = ({ count, label }) => {
  return (
    <div className="flex-1 flex items-center gap-4 bg-gradient-to-b from-[#fcf4ec] to-[#ffffff] dark:from-[#0a0a0a] dark:to-[#050505] rounded-2xl p-5 border border-[#fee6cc] dark:border-[#1a1a1a] shadow-sm hover:shadow-md dark:shadow-black/30 transition-all">
      <h4 className="text-3xl md:text-4xl font-bold text-[#b56141] dark:text-[#f4a44f]">{count}</h4>
      <p className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-400 leading-snug whitespace-pre-line">
        {label}
      </p>
    </div>
  );
};

export default StateInfoCard;