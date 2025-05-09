
// // import { useState } from 'react';
// // import DashboardLayout from '../layouts/DashboardLayout';

// // export type LeaveRequest = {
// //   id: number;
// //   employee: string;
// //   date: string;
// //   reason: string;
// //   status: 'Pending' | 'Approved' | 'Rejected';
// // };

// // const AdminDashboard = () => {
// //   const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
// //     {
// //       id: 1,
// //       employee: 'Dinupa',
// //       date: '2025-05-04',
// //       reason: 'Medical Leave',
// //       status: 'Pending',
// //     },
// //     {
// //       id: 2,
// //       employee: 'Kamal',
// //       date: '2025-05-03',
// //       reason: 'Personal Leave',
// //       status: 'Approved',
// //     },
// //     {
// //       id: 3,
// //       employee: 'Sunil',
// //       date: '2025-05-02',
// //       reason: 'Family Function',
// //       status: 'Rejected',
// //     },
// //   ]);

// //   const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Approved' | 'Rejected'>('All');
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const handleStatusUpdate = (id: number, newStatus: 'Approved' | 'Rejected') => {
// //     setLeaveRequests((prev) =>
// //       prev.map((req) =>
// //         req.id === id ? { ...req, status: newStatus } : req
// //       )
// //     );
// //   };

// //   const getStatusStyle = (status: string) => {
// //     switch (status) {
// //       case 'Approved':
// //         return 'text-green-600 font-medium';
// //       case 'Rejected':
// //         return 'text-red-600 font-medium';
// //       default:
// //         return 'text-yellow-600 font-medium';
// //     }
// //   };

// //   const filteredRequests = leaveRequests.filter((req) =>
// //     (statusFilter === 'All' || req.status === statusFilter) &&
// //     req.employee.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   return (
// //     <DashboardLayout>
// //       <h1 className="text-3xl font-bold text-heading mb-6">Admin Dashboard</h1>

// //       <div className="bg-white rounded-lg shadow p-6">
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
// //           <h2 className="text-xl font-semibold text-primary">Recent Leave Requests</h2>

// //           <div className="flex flex-wrap gap-3 text-sm">
// //             {['All', 'Pending', 'Approved', 'Rejected'].map((status) => (
// //               <button
// //                 key={status}
// //                 onClick={() => setStatusFilter(status as any)}
// //                 className={`px-3 py-1 rounded-md border ${
// //                   statusFilter === status
// //                     ? 'bg-primary text-white border-primary'
// //                     : 'border-border text-gray-600 hover:bg-accent'
// //                 }`}
// //               >
// //                 {status}
// //               </button>
// //             ))}

// //             {/* Search Bar */}
// //             <input
// //               type="text"
// //               placeholder="Search employee..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               className="px-3 py-1 border border-border rounded-md text-sm w-48 focus:outline-none focus:ring-2 focus:ring-primary"
// //             />
// //           </div>
// //         </div>

// //         {filteredRequests.length === 0 ? (
// //           <p className="text-gray-600">No matching leave requests found.</p>
// //         ) : (
// //           <table className="w-full text-left border border-border">
// //             <thead>
// //               <tr className="bg-accent text-heading">
// //                 <th className="p-2 border-b border-border">Employee</th>
// //                 <th className="p-2 border-b border-border">Date</th>
// //                 <th className="p-2 border-b border-border">Reason</th>
// //                 <th className="p-2 border-b border-border">Status</th>
// //                 <th className="p-2 border-b border-border">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {filteredRequests.map((req) => (
// //                 <tr key={req.id} className="hover:bg-sky-50">
// //                   <td className="p-2 border-b">{req.employee}</td>
// //                   <td className="p-2 border-b">{req.date}</td>
// //                   <td className="p-2 border-b">{req.reason}</td>
// //                   <td className={`p-2 border-b ${getStatusStyle(req.status)}`}>{req.status}</td>
// //                   <td className="p-2 border-b space-x-2">
// //                     <button
// //                       onClick={() => handleStatusUpdate(req.id, 'Approved')}
// //                       className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
// //                       disabled={req.status === 'Approved'}
// //                     >
// //                       Accept
// //                     </button>
// //                     <button
// //                       onClick={() => handleStatusUpdate(req.id, 'Rejected')}
// //                       className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
// //                       disabled={req.status === 'Rejected'}
// //                     >
// //                       Reject
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>
// //     </DashboardLayout>
// //   );
// // };

// // export default AdminDashboard;

// import { useState } from 'react';
// import DashboardLayout from '../layouts/DashboardLayout';

// type FilterType = 'All' | 'Pending' | 'Approved' | 'Rejected';

// export type LeaveRequest = {
//   id: number;
//   employee: string;
//   date: string;
//   reason: string;
//   status: 'Pending' | 'Approved' | 'Rejected';
// };



// const AdminDashboard = () => {
//   const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
//     { id: 1, employee: 'Dinupa', date: '2025-05-04', reason: 'Medical Leave', status: 'Pending' },
//     { id: 2, employee: 'Kamal', date: '2025-05-03', reason: 'Personal Leave', status: 'Approved' },
//     { id: 3, employee: 'Sunil', date: '2025-05-02', reason: 'Family Function', status: 'Rejected' },
//   ]);

//   const [statusFilter, setStatusFilter] = useState<FilterType>('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleStatusUpdate = (id: number, newStatus: 'Approved' | 'Rejected') => {
//     setLeaveRequests((prev) =>
//       prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
//     );
//   };

//   const getStatusStyle = (status: string) => {
//     switch (status) {
//       case 'Approved': return 'text-green-600 font-medium';
//       case 'Rejected': return 'text-red-600 font-medium';
//       default: return 'text-yellow-600 font-medium';
//     }
//   };

//   const filteredRequests = leaveRequests.filter(
//     (req) =>
//       (statusFilter === 'All' || req.status === statusFilter) &&
//       req.employee.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl md:text-3xl font-bold text-heading mb-4">Admin Dashboard</h1>

//       <div className="bg-white rounded-lg shadow p-4 sm:p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
//           <h2 className="text-lg sm:text-xl font-semibold text-primary">Recent Leave Requests</h2>

//           <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm w-full md:w-auto">
//             <div className="flex flex-wrap gap-2">
//               {['All', 'Pending', 'Approved', 'Rejected'].map((status) => (
//                 <button
//                   key={status}
//                   onClick={() => setStatusFilter(status as any)}
//                   className={`px-3 py-1 rounded-md border ${
//                     statusFilter === status
//                       ? 'bg-primary text-white border-primary'
//                       : 'border-border text-gray-600 hover:bg-accent'
//                   }`}
//                 >
//                   {status}
//                 </button>
//               ))}
//             </div>
//             <input
//               type="text"
//               placeholder="Search employee..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="px-3 py-1 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-52"
//             />
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           {filteredRequests.length === 0 ? (
//             <p className="text-gray-600">No matching leave requests found.</p>
//           ) : (
//             <table className="w-full min-w-[640px] text-left border border-border">
//               <thead>
//                 <tr className="bg-accent text-heading">
//                   <th className="p-2 border-b border-border">Employee</th>
//                   <th className="p-2 border-b border-border">Date</th>
//                   <th className="p-2 border-b border-border">Reason</th>
//                   <th className="p-2 border-b border-border">Status</th>
//                   <th className="p-2 border-b border-border">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredRequests.map((req) => (
//                   <tr key={req.id} className="hover:bg-sky-50">
//                     <td className="p-2 border-b">{req.employee}</td>
//                     <td className="p-2 border-b">{req.date}</td>
//                     <td className="p-2 border-b">{req.reason}</td>
//                     <td className={`p-2 border-b ${getStatusStyle(req.status)}`}>{req.status}</td>
//                     <td className="p-2 border-b space-x-2">
//                       <button
//                         onClick={() => handleStatusUpdate(req.id, 'Approved')}
//                         className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
//                         disabled={req.status === 'Approved'}
//                       >
//                         Accept
//                       </button>
//                       <button
//                         onClick={() => handleStatusUpdate(req.id, 'Rejected')}
//                         className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
//                         disabled={req.status === 'Rejected'}
//                       >
//                         Reject
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default AdminDashboard;


import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

type FilterType = 'All' | 'Pending' | 'Approved' | 'Rejected';

export type LeaveRequest = {
  id: number;
  employee: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
};

const AdminDashboard = () => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([
    {
      id: 1,
      employee: 'Dinupa',
      startDate: '2025-05-04',
      endDate: '2025-05-04',
      reason: 'Medical Leave',
      status: 'Pending',
    },
    {
      id: 2,
      employee: 'Kamal',
      startDate: '2025-05-01',
      endDate: '2025-05-03',
      reason: 'Personal Leave',
      status: 'Approved',
    },
    {
      id: 3,
      employee: 'Sunil',
      startDate: '2025-05-02',
      endDate: '2025-05-02',
      reason: 'Family Function',
      status: 'Rejected',
    },
  ]);

  const [statusFilter, setStatusFilter] = useState<FilterType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<LeaveRequest | null>(null);

  const handleStatusUpdate = (id: number, newStatus: 'Approved' | 'Rejected') => {
    setLeaveRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

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

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  const filteredRequests = leaveRequests
    .filter(
      (req) =>
        (statusFilter === 'All' || req.status === statusFilter) &&
        req.employee.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (a.status === 'Pending' && b.status !== 'Pending') return -1;
      if (a.status !== 'Pending' && b.status === 'Pending') return 1;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });

  return (
    <DashboardLayout>
      <h1 className="text-2xl md:text-3xl font-bold text-heading mb-4">Admin Dashboard</h1>

      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-primary">Recent Leave Requests</h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm w-full md:w-auto">
            <div className="flex flex-wrap gap-2">
              {['All', 'Pending', 'Approved', 'Rejected'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status as FilterType)}
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
            <input
              type="text"
              placeholder="Search employee..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-52"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          {filteredRequests.length === 0 ? (
            <p className="text-gray-600">No matching leave requests found.</p>
          ) : (
            <table className="w-full min-w-[640px] text-left border border-border">
              <thead>
                <tr className="bg-accent text-heading">
                  <th className="p-2 border-b border-border">Employee</th>
                  <th className="p-2 border-b border-border">Date(s)</th>
                  <th className="p-2 border-b border-border">Reason</th>
                  <th className="p-2 border-b border-border">Status</th>
                  <th className="p-2 border-b border-border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((req) => (
                  <tr
                    key={req.id}
                    className="hover:bg-sky-50 cursor-pointer"
                    onClick={() => setSelectedRequest(req)}
                  >
                    <td className="p-2 border-b">{req.employee}</td>
                    <td className="p-2 border-b">
                      {req.startDate === req.endDate
                        ? formatDate(req.startDate)
                        : `${formatDate(req.startDate)} → ${formatDate(req.endDate)}`}
                    </td>
                    <td className="p-2 border-b">{req.reason}</td>
                    <td className={`p-2 border-b ${getStatusStyle(req.status)}`}>{req.status}</td>
                    <td className="p-2 border-b space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusUpdate(req.id, 'Approved');
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                        disabled={req.status === 'Approved'}
                      >
                        Accept
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusUpdate(req.id, 'Rejected');
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                        disabled={req.status === 'Rejected'}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <h3 className="text-xl font-semibold text-primary mb-4">Leave Request Details</h3>
            <p><strong>Employee:</strong> {selectedRequest.employee}</p>
            <p><strong>Date:</strong>{' '}
              {selectedRequest.startDate === selectedRequest.endDate
                ? formatDate(selectedRequest.startDate)
                : `${formatDate(selectedRequest.startDate)} → ${formatDate(selectedRequest.endDate)}`}
            </p>
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

export default AdminDashboard;
