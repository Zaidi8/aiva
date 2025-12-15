import { useState } from 'react';
import { Search, Filter, Plus, Phone, Mail, Calendar, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

const patients = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '555-0101',
    lastVisit: '2025-11-05',
    nextAppointment: '2025-11-15',
    doctor: 'Dr. Williams',
    notes: 'Diabetic patient, requires regular monitoring',
    visits: 8,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '555-0102',
    lastVisit: '2025-10-28',
    nextAppointment: '2025-11-12',
    doctor: 'Dr. Brown',
    notes: 'Allergy to penicillin',
    visits: 5,
  },
  {
    id: 3,
    name: 'Michael Davis',
    email: 'mdavis@email.com',
    phone: '555-0103',
    lastVisit: '2025-11-01',
    nextAppointment: null,
    doctor: 'Dr. Williams',
    notes: 'New patient, first visit completed',
    visits: 1,
  },
  {
    id: 4,
    name: 'Emily Wilson',
    email: 'ewilson@email.com',
    phone: '555-0104',
    lastVisit: '2025-10-25',
    nextAppointment: '2025-11-10',
    doctor: 'Dr. Martinez',
    notes: 'Post-surgery follow-up required',
    visits: 12,
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'dbrown@email.com',
    phone: '555-0105',
    lastVisit: '2025-10-15',
    nextAppointment: '2025-11-20',
    doctor: 'Dr. Williams',
    notes: 'Hypertension management',
    visits: 15,
  },
];

export function PatientsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.phone.includes(searchQuery)
  );

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-[#333333] mb-2">Patient Records</h1>
          <p className="text-gray-600">Manage patient information and history</p>
        </div>
        <Button className="bg-[#2F80ED] hover:bg-[#2F80ED]/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Patient
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl text-[#333333] mb-1">482</div>
            <p className="text-sm text-gray-600">Total Patients</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl text-[#333333] mb-1">24</div>
            <p className="text-sm text-gray-600">New This Month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl text-[#333333] mb-1">38</div>
            <p className="text-sm text-gray-600">Upcoming Visits</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl text-[#333333] mb-1">94%</div>
            <p className="text-sm text-gray-600">Attendance Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Patient Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Patients</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search patients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-80"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact Info</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Next Appointment</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Visits</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <div>
                      <div className="text-[#333333]">{patient.name}</div>
                      <div className="text-sm text-gray-500">ID: #{patient.id}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span>{patient.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span>{patient.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      {patient.lastVisit}
                    </div>
                  </TableCell>
                  <TableCell>
                    {patient.nextAppointment ? (
                      <Badge variant="outline">{patient.nextAppointment}</Badge>
                    ) : (
                      <span className="text-sm text-gray-400">None scheduled</span>
                    )}
                  </TableCell>
                  <TableCell>{patient.doctor}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{patient.visits}</Badge>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedPatient(patient)}
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Patient Details</DialogTitle>
                          <DialogDescription>
                            Complete medical record and appointment history
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-6 mt-4">
                          <div>
                            <h3 className="mb-4">Personal Information</h3>
                            <div className="space-y-3">
                              <div>
                                <label className="text-sm text-gray-600">Full Name</label>
                                <p className="text-[#333333]">{selectedPatient.name}</p>
                              </div>
                              <div>
                                <label className="text-sm text-gray-600">Email</label>
                                <p className="text-[#333333]">{selectedPatient.email}</p>
                              </div>
                              <div>
                                <label className="text-sm text-gray-600">Phone</label>
                                <p className="text-[#333333]">{selectedPatient.phone}</p>
                              </div>
                              <div>
                                <label className="text-sm text-gray-600">Primary Doctor</label>
                                <p className="text-[#333333]">{selectedPatient.doctor}</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="mb-4">Medical Summary</h3>
                            <div className="space-y-3">
                              <div>
                                <label className="text-sm text-gray-600">Total Visits</label>
                                <p className="text-[#333333]">{selectedPatient.visits} visits</p>
                              </div>
                              <div>
                                <label className="text-sm text-gray-600">Last Visit</label>
                                <p className="text-[#333333]">{selectedPatient.lastVisit}</p>
                              </div>
                              <div>
                                <label className="text-sm text-gray-600">Next Appointment</label>
                                <p className="text-[#333333]">
                                  {selectedPatient.nextAppointment || 'Not scheduled'}
                                </p>
                              </div>
                              <div>
                                <label className="text-sm text-gray-600">Notes</label>
                                <p className="text-[#333333]">{selectedPatient.notes}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 pt-4 border-t">
                          <Button className="flex-1 bg-[#2F80ED] hover:bg-[#2F80ED]/90">
                            Schedule Appointment
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Edit Details
                          </Button>
                          <Button variant="outline" className="flex-1">
                            View History
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
