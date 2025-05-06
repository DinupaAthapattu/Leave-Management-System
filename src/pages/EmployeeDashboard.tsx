
import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import toast from 'react-hot-toast';

type Leave = {
  id: number;
  dateRange: string;
  reason: string;
  type: string;
  condition: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Cancelled';
};

const EmployeeDashboard = () => {
  const [leaveHistory, setLeaveHistory] = useState<Leave[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [leaveType, setLeaveType] = useState('Annual Leave');
  const [reason, setReason] = useState('');
  const [condition, setCondition] = useState('Full Day');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Approved' | 'Rejected' | 'Cancelled'>('All');

  const isSingleDay = startDate && endDate && startDate === endDate;

  const filteredLeaves = leaveHistory.filter((leave) =>
    statusFilter === 'All' ? true : leave.status === statusFilter
  );

  const handleRequestSubmit = () => {
    if (startDate && endDate && reason) {
      const newRequest: Leave = {
        id: leaveHistory.length + 1,
        dateRange: `${startDate} to ${endDate}`,
        reason,
        type: leaveType,
        condition: isSingleDay ? condition : 'Full Day',
        status: 'Pending',
      };

      setLeaveHistory([newRequest, ...leaveHistory]);
      toast.success('Leave request submitted successfully!');

      // Reset form
      setStartDate('');
      setEndDate('');
      setLeaveType('Annual Leave');
      setReason('');
      setCondition('Full Day');
    } else {
      toast.error('Please fill in all required fields!');
    }
  };

  const handleCancelRequest = (id: number) => {
    setLeaveHistory((prev) =>
      prev.map((leave) =>
        leave.id === id && leave.status === 'Pending'
          ? { ...leave, status: 'Cancelled' }
          : leave
      )
    );
    toast.success('Leave request cancelled.');
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'text-green-600 font-medium';
      case 'Rejected':
        return 'text-red-600 font-medium';
      case 'Cancelled':
        return 'text-gray-500 font-medium';
      default:
        return 'text-yellow-600 font-medium';
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-heading mb-4">Hi, Dinupa 👋</h1>
      <p className="text-blue-800 mb-8">Welcome to your employee dashboard</p>

      {/* Leave Request Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-10">
        <h2 className="text-xl font-semibold text-primary mb-4">Request New Leave</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border border-border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border border-border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Leave Type</label>
            <select
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="w-full border border-border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option>Annual Leave</option>
              <option>Casual/Sick Leave</option>
              <option>Lieu Leave</option>
            </select>
          </div>

          {isSingleDay && (
            <div>
              <label className="block text-sm text-gray-600 mb-1">Condition</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full border border-border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>Full Day</option>
                <option>First Half</option>
                <option>Second Half</option>
              </select>
            </div>
          )}

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Reason</label>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g., Family function, Doctor visit..."
              className="w-full border border-border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <button
          onClick={handleRequestSubmit}
          className="mt-6 bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-md transition"
        >
          Submit Request
        </button>
      </div>

      {/* Leave History */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primary">Your Leave History</h2>
          <div className="flex space-x-3 text-sm">
            {['All', 'Pending', 'Approved', 'Rejected', 'Cancelled'].map((status) => (
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
          <p className="text-gray-600">No {statusFilter.toLowerCase()} leave records.</p>
        ) : (
          <table className="w-full text-left border border-border">
            <thead>
              <tr className="bg-accent text-heading">
                <th className="p-2 border-b border-border">Date Range</th>
                <th className="p-2 border-b border-border">Type</th>
                <th className="p-2 border-b border-border">Condition</th>
                <th className="p-2 border-b border-border">Reason</th>
                <th className="p-2 border-b border-border">Status</th>
                <th className="p-2 border-b border-border">Action</th>
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
                  <td className="p-2 border-b">
                    {leave.status === 'Pending' && (
                      <button
                        onClick={() => handleCancelRequest(leave.id)}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
};

export default EmployeeDashboard;
