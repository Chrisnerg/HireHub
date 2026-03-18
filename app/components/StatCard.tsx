import type { ReactNode } from "react"

type StatCardProps = {
  value: number
  label: string
  valueClassName?: string
  icon?: ReactNode
}

const StatCard = ({ value, label, valueClassName = "text-slate-700", icon }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      {icon ? <div className="mb-2 text-3xl">{icon}</div> : null}
      <span className={`text-3xl font-bold ${valueClassName}`}>{value}</span>
      <span className="text-xs text-neutral-500">{label}</span>
    </div>
  )
}

export default StatCard
