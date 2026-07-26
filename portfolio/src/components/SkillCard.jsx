const SkillCard = ({ icon, skillName, description, progress }) => {
  return (
    <div className="bg-white dark:bg-black rounded-2xl border border-[#fccbd4] dark:border-white/10 p-4 dark:shadow-[0_0_24px_-8px_rgba(255,138,61,0.15)] transition-shadow duration-300">
      <div className="flex gap-3">
        <div className="w-10 h-10 flex items-center justify-center text-primary dark:text-orange-400 bg-gradient-to-b from-[#fdeddd] to-[#ffffff] dark:from-black dark:to-black dark:border dark:border-white/10 rounded-xl">
          {icon}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-black dark:text-white font-medium">{skillName}</p>
            <p className="text-xs text-secondary dark:text-orange-400 font-medium">{progress}%</p>
          </div>

          <div className="w-full bg-background dark:bg-white/5 rounded-md h-[5px] relative mt-2 overflow-hidden">
            <div
              className="bg-primary dark:bg-gradient-to-r dark:from-orange-500 dark:to-amber-300 h-[5px] rounded-md transition-all duration-700"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-600 dark:text-gray-400 text-justify leading-5 mt-2">{description}</p>
    </div>
  )
}

export default SkillCard;