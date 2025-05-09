// import { useState } from 'react';
// import DashboardLayout from '../layouts/DashboardLayout';

// export type LeaveRequest = {
//   id: number;
//   employee: string;
//   date: string;
//   reason: string;
//   type: string;
//   condition: string;
//   status: 'Pending' | 'Approved' | 'Rejected';
// };

// const mockLeaveRequests: LeaveRequest[] = [
//   {
//     id: 1,
//     employee: 'Dinupa',
//     date: '2025-05-04',
//     reason: 'Medical Leave',
//     type: 'Casual/Sick Leave',
//     condition: 'Full Day',
//     status: 'Pending',
//   },
//   {
//     id: 2,
//     employee: 'Kamal',
//     date: '2025-05-03',
//     reason: 'Personal Leave',
//     type: 'Annual Leave',
//     condition: 'First Half',
//     status: 'Approved',
//   },
//   {
//     id: 3,
//     employee: 'Sunil',
//     date: '2025-05-02',
//     reason: 'Family Function',
//     type: 'Lieu Leave',
//     condition: 'Second Half',
//     status: 'Rejected',
//   },
// ];

// const AdminLeaveHistory = () => {
//   const [leaveRequests] = useState<LeaveRequest[]>(mockLeaveRequests);
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState<'All' | 'Pending' | 'Approved' | 'Rejected'>('All');

//   const filtered = leaveRequests.filter(
//     (req) =>
//       (filter === 'All' || req.status === filter) &&
//       req.employee.toLowerCase().includes(search.toLowerCase())
//   );

//   const getStatusStyle = (status: string) => {
//     switch (status) {
//       case 'Approved': return 'text-green-600 font-medium';
//       case 'Rejected': return 'text-red-600 font-medium';
//       default: return 'text-yellow-600 font-medium';
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
//         <h1 className="text-lg sm:text-2xl font-bold text-heading">All Leave Requests</h1>
//         <input
//           type="text"
//           placeholder="Search by name..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border border-border rounded-md px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
//         />
//       </div>

//       <div className="mb-4 flex flex-wrap gap-3">
//         {['All', 'Pending', 'Approved', 'Rejected'].map((s) => (
//           <button
//             key={s}
//             onClick={() => setFilter(s as any)}
//             className={`px-3 py-1 rounded border text-sm ${
//               filter === s
//                 ? 'bg-primary text-white border-primary'
//                 : 'border-border text-gray-600 hover:bg-accent'
//             }`}
//           >
//             {s}
//           </button>
//         ))}
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[720px] border border-border text-left">
//           <thead className="bg-accent text-heading">
//             <tr>
//               <th className="p-2 border-b border-border">Employee</th>
//               <th className="p-2 border-b border-border">Date</th>
//               <th className="p-2 border-b border-border">Type</th>
//               <th className="p-2 border-b border-border">Condition</th> {/* ✅ New */}
//               <th className="p-2 border-b border-border">Reason</th>
//               <th className="p-2 border-b border-border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.length === 0 ? (
//               <tr>
//                 <td colSpan={6} className="p-4 text-center text-gray-500">
//                   No matching records
//                 </td>
//               </tr>
//             ) : (
//               filtered.map((req) => (
//                 <tr key={req.id} className="hover:bg-sky-50">
//                   <td className="p-2 border-b">{req.employee}</td>
//                   <td className="p-2 border-b">{req.date}</td>
//                   <td className="p-2 border-b">{req.type}</td>
//                   <td className="p-2 border-b">{req.condition}</td>
//                   <td className="p-2 border-b">{req.reason}</td>
//                   <td className={`p-2 border-b ${getStatusStyle(req.status)}`}>{req.status}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AdminLeaveHistory;

import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

// ✅ Enum for statuses
export enum LeaveStatus {
  All = 'All',
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
}

// ✅ Type for leave requests
export type LeaveRequest = {
  id: number;
  employee: string;
  startDate: string;
  endDate: string;
  reason: string;
  type: string;
  condition: string;
  status: LeaveStatus.Pending | LeaveStatus.Approved | LeaveStatus.Rejected;
};

// ✅ Sample data
const mockLeaveRequests: LeaveRequest[] = [
  {
    id: 1,
    employee: 'Dinupa',
    startDate: '2025-05-04',
    endDate: '2025-05-04',
    reason: 'Medical Leave',
    type: 'Casual/Sick Leave',
    condition: 'Full Day',
    status: LeaveStatus.Pending,
  },
  {
    id: 2,
    employee: 'Kamal',
    startDate: '2025-05-01',
    endDate: '2025-05-03',
    reason: 'Personal Leave',
    type: 'Annual Leave',
    condition: 'First Half',
    status: LeaveStatus.Approved,
  },
  {
    id: 3,
    employee: 'Sunil',
    startDate: '2025-05-02',
    endDate: '2025-05-02',
    reason: 'Family Function',
    type: 'Lieu Leave',
    condition: 'Second Half',
    status: LeaveStatus.Rejected,
  },
];

const AdminLeaveHistory = () => {
  const [leaveRequests] = useState<LeaveRequest[]>(mockLeaveRequests);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<LeaveStatus>(LeaveStatus.All);
  const [selectedRequest, setSelectedRequest] = useState<LeaveRequest | null>(null);

  const filtered = leaveRequests.filter(
    (req) =>
      (filter === LeaveStatus.All || req.status === filter) &&
      req.employee.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status: LeaveStatus) => {
    switch (status) {
      case LeaveStatus.Approved: return 'text-green-600 font-medium';
      case LeaveStatus.Rejected: return 'text-red-600 font-medium';
      default: return 'text-yellow-600 font-medium';
    }
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  const renderDateRange = (start: string, end: string) =>
    start === end ? formatDate(start) : `${formatDate(start)} → ${formatDate(end)}`;

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-lg sm:text-2xl font-bold text-heading">All Leave Requests</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-border rounded-md px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-3">
        {Object.values(LeaveStatus).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1 rounded border text-sm ${
              filter === status
                ? 'bg-primary text-white border-primary'
                : 'border-border text-gray-600 hover:bg-accent'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border border-border text-left">
          <thead className="bg-accent text-heading">
            <tr>
              <th className="p-2 border-b border-border">Employee</th>
              <th className="p-2 border-b border-border">Date</th>
              <th className="p-2 border-b border-border">Type</th>
              <th className="p-2 border-b border-border">Condition</th>
              <th className="p-2 border-b border-border">Reason</th>
              <th className="p-2 border-b border-border">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No matching records
                </td>
              </tr>
            ) : (
              filtered.map((req) => (
                <tr
                  key={req.id}
                  className="hover:bg-sky-50 cursor-pointer"
                  onClick={() => setSelectedRequest(req)}
                >
                  <td className="p-2 border-b">{req.employee}</td>
                  <td className="p-2 border-b">{renderDateRange(req.startDate, req.endDate)}</td>
                  <td className="p-2 border-b">{req.type}</td>
                  <td className="p-2 border-b">{req.condition}</td>
                  <td className="p-2 border-b">{req.reason}</td>
                  <td className={`p-2 border-b ${getStatusStyle(req.status)}`}>{req.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <h3 className="text-xl font-semibold text-primary mb-4">Leave Request Details</h3>
            <p><strong>Employee:</strong> {selectedRequest.employee}</p>
            <p><strong>Date:</strong> {renderDateRange(selectedRequest.startDate, selectedRequest.endDate)}</p>
            <p><strong>Type:</strong> {selectedRequest.type}</p>
            <p><strong>Condition:</strong> {selectedRequest.condition}</p>
            <p><strong>Reason:</strong> {selectedRequest.reason}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span className={getStatusStyle(selectedRequest.status)}>{selectedRequest.status}</span>
            </p>
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-lg font-bold"
              onClick={() => setSelectedRequest(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdminLeaveHistory;
