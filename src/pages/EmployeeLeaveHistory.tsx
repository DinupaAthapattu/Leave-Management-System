// src/pages/EmployeeLeaveHistory.tsx
import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { useUser } from '../context/UserContext';

type LeaveRequest = {
  id: number;
  employee: string;
  date: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
};

const initialHistory: LeaveRequest[] = [
  { id: 1, employee: 'Dinupa', date: '2025-05-01', reason: 'Sick', status: 'Approved' },
  { id: 2, employee: 'Dinupa', date: '2025-05-05', reason: 'Family event', status: 'Pending' },
];

const EmployeeLeaveHistory = () => {
  const { user } = useUser();
  const [leaveHistory] = useState<LeaveRequest[]>(
    initialHistory.filter((req) => req.employee === user?.username)
  );
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Approved' | 'Rejected'>('All');

  const filtered = leaveHistory.filter(
    (req) => filter === 'All' || req.status === filter
  );

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Approved': return 'text-green-600 font-medium';
      case 'Rejected': return 'text-red-600 font-medium';
      default: return 'text-yellow-600 font-medium';
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-heading mb-6">Your Leave History</h1>

      <div className="mb-4 flex space-x-3">
        {['All', 'Pending', 'Approved', 'Rejected'].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s as any)}
            className={`px-3 py-1 rounded border ${
              filter === s ? 'bg-primary text-white border-primary' : 'border-border text-gray-600'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <table className="w-full border border-border text-left">
        <thead className="bg-accent text-heading">
          <tr>
            <th className="p-2 border-b border-border">Date</th>
            <th className="p-2 border-b border-border">Reason</th>
            <th className="p-2 border-b border-border">Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr><td colSpan={3} className="p-4 text-center text-gray-500">No matching records</td></tr>
          ) : (
            filtered.map((req) => (
              <tr key={req.id} className="hover:bg-sky-50">
                <td className="p-2 border-b">{req.date}</td>
                <td className="p-2 border-b">{req.reason}</td>
                <td className={`p-2 border-b ${getStatusStyle(req.status)}`}>{req.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </DashboardLayout>
  );
};

export default EmployeeLeaveHistory;
