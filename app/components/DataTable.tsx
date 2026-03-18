import type { ReactNode } from "react"

type DataTableProps<T> = {
  columns: string[]
  data: T[]
  emptyMessage: string
  renderRow: (item: T) => ReactNode
}

const DataTable = <T,>({ columns, data, emptyMessage, renderRow }: DataTableProps<T>) => {
  if (data.length === 0) {
    return <p className="text-gray-400 text-sm">{emptyMessage}</p>
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-neutral-500 text-left">
          {columns.map((column) => (
            <th key={column} className="py-2">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  )
}

export default DataTable
