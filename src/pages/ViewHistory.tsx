import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';


const ViewHistory = () => {
  const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Approved' | 'Rejected'>('All');
  const [leaveHistory] = useState([
    {
      id: 1,
      dateRange: '2025-05-01 to 2025-05-01',
      type: 'Casual/Sick Leave',
      condition: 'Full Day',
      reason: 'Doctor Visit',
      status: 'Approved',
    },
    {
      id: 2,
      dateRange: '2025-04-25 to 2025-04-25',
      type: 'Annual Leave',
      condition: 'First Half',
      reason: 'Family Event',
      status: 'Pending',
    },
  ]);

  const filteredLeaves = leaveHistory.filter((leave) =>
    statusFilter === 'All' ? true : leave.status === statusFilter
  );

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'text-green-600 font-medium';
      case 'Rejected':
        return 'text-red-600 font-medium';
      default:
        return 'text-yellow-600 font-medium';
    }
  };

  return (
    <DashboardLayout>
     

      <h1 className="text-2xl font-bold text-heading mb-6">Leave History</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primary">Filter by Status</h2>
          <div className="flex space-x-3 text-sm">
            {['All', 'Pending', 'Approved', 'Rejected'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status as any)}
                className={`px-3 py-1 rounded-md border ${
                  statusFilter === status
                    ? 'bg-primary text-white border-primary'
                    : 'border-border text-gray-600 hover:bg-accent'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {filteredLeaves.length === 0 ? (
          <p className="text-gray-600">No {statusFilter.toLowerCase()} leave records found.</p>
        ) : (
          <table className="w-full text-left border border-border">
            <thead>
              <tr className="bg-accent text-heading">
                <th className="p-2 border-b border-border">Date Range</th>
                <th className="p-2 border-b border-border">Type</th>
                <th className="p-2 border-b border-border">Condition</th>
                <th className="p-2 border-b border-border">Reason</th>
                <th className="p-2 border-b border-border">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaves.map((leave) => (
                <tr key={leave.id} className="hover:bg-sky-50">
                  <td className="p-2 border-b">{leave.dateRange}</td>
                  <td className="p-2 border-b">{leave.type}</td>
                  <td className="p-2 border-b">{leave.condition}</td>
                  <td className="p-2 border-b">{leave.reason}</td>
                  <td className={`p-2 border-b ${getStatusStyle(leave.status)}`}>{leave.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ViewHistory;
