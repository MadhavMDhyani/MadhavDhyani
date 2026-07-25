const StateInfoCard = ({ count, label }) => {
  return (
    <div className="flex-1 flex items-center gap-4 bg-gradient-to-b from-[#fcf4ec] to-[#ffffff] rounded-2xl p-5 border border-[#fee6cc] shadow-sm hover:shadow-md transition-all">
      <h4 className="text-3xl md:text-4xl font-bold text-[#b56141]">{count}</h4>
      <p className="text-xs md:text-sm font-medium text-slate-700 leading-snug whitespace-pre-line">
        {label}
      </p>
    </div>
  );
};

export default StateInfoCard;