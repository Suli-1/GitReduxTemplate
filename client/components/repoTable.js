import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RepoTable = ({ userName }) => {
  const repos = useSelector((s) => s.data.repos)
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {repos.map((repo) => (
          <tr key={repo.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="ml-4">
                  <Link
                    to={`/${userName}/${repo.name}`}
                    className="text-sm font-medium text-gray-900"
                  >
                    {repo.name}
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RepoTable
