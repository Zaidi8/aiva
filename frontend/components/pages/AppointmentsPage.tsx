import { useState } from 'react';
import { Calendar as CalendarIcon, Filter, Search, Plus, MoreVertical, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Calendar } from '../ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const appointments = [
  { id: 1, patient: 'John Smith', time: '09:00 AM', doctor: 'Dr. Williams', type: 'Checkup', status: 'confirmed', phone: '555-0101', notes: 'Annual physical examination' },
  { id: 2, patient: 'Sarah Johnson', time: '09:30 AM', doctor: 'Dr. Brown', type: 'Follow-up', status: 'pending', phone: '555-0102', notes: 'Follow-up for blood test results' },
  { id: 3, patient: 'Michael Davis', time: '10:00 AM', doctor: 'Dr. Williams', type: 'Consultation', status: 'confirmed', phone: '555-0103', notes: 'New patient consultation' },
  { id: 4, patient: 'Emily Wilson', time: '10:30 AM', doctor: 'Dr. Martinez', type: 'Surgery', status: 'confirmed', phone: '555-0104', notes: 'Minor procedure - pre-op completed' },
  { id: 5, patient: 'David Brown', time: '11:00 AM', doctor: 'Dr. Williams', type: 'Checkup', status: 'cancelled', phone: '555-0105', notes: 'Patient requested cancellation' },
  { id: 6, patient: 'Lisa Anderson', time: '02:00 PM', doctor: 'Dr. Brown', type: 'Emergency', status: 'confirmed', phone: '555-0106', notes: 'Urgent care - chest pain' },
];

export function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedAppointment, setSelectedAppointment] = useState(appointments[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAppointments = appointments.filter(apt =>
    apt.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
    apt.doctor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-[#333333] mb-2">Appointments Management</h1>
          <p className="text-gray-600">Schedule and manage patient appointments</p>
        </div>
        <Button className="bg-[#2F80ED] hover:bg-[#2F80ED]/90">
          <Plus className="w-4 h-4 mr-2" />
          New Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Appointments</span>
                <span className="text-[#333333]">24</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Confirmed</span>
                <span className="text-[#27AE60]">18</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Pending</span>
                <span className="text-[#F2994A]">4</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Cancelled</span>
                <span className="text-[#EB5757]">2</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appointments List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Today's Appointments</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-64"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-3 mt-4">
                {filteredAppointments.map((apt) => (
                  <div key={apt.id} className="p-4 bg-[#F7F9FB] rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-[#333333]">{apt.patient}</h3>
                          <Badge variant={
                            apt.status === 'confirmed' ? 'default' :
                            apt.status === 'pending' ? 'secondary' :
                            'destructive'
                          }>
                            {apt.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {apt.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {apt.doctor}
                          </span>
                          <span>{apt.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setSelectedAppointment(apt)}
                            >
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>Appointment Details</DialogTitle>
                              <DialogDescription>
                                Complete information about this appointment
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4">
                              <div>
                                <label className="text-sm text-gray-600">Patient Name</label>
                                <p className="text-[#333333]">{selectedAppointment.patient}</p>
                              </div>
                              <div>
                                <label className="text-sm text-gray-600">Contact</label>
                                <p className="text-[#333333]">{selectedAppointment.phone}</p>
                              </div>
                              <div>
                                <label className="text-sm text-gray-600">Doctor</label>
                                <p className="text-[#333333]">{selectedAppointment.doctor}</p>
                              </div>
                              <div>
                                <label className="text-sm text-gray-600">Time</label>
                                <p className="text-[#333333]">{selectedAppointment.time}</p>
                              </div>
                              <div>
                                <label className="text-sm text-gray-600">Type</label>
                                <p className="text-[#333333]">{selectedAppointment.type}</p>
                              </div>
                              <div>
                                <label className="text-sm text-gray-600">Notes</label>
                                <p className="text-[#333333]">{selectedAppointment.notes}</p>
                              </div>
                              <div className="flex gap-2 pt-4">
                                <Button className="flex-1 bg-[#2F80ED] hover:bg-[#2F80ED]/90">
                                  Reschedule
                                </Button>
                                <Button variant="outline" className="flex-1">
                                  Mark Complete
                                </Button>
                                <Button variant="destructive" className="flex-1">
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            <DropdownMenuItem>Mark Complete</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Cancel</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="confirmed" className="space-y-3 mt-4">
                {filteredAppointments.filter(a => a.status === 'confirmed').map((apt) => (
                  <div key={apt.id} className="p-4 bg-[#F7F9FB] rounded-lg">
                    <h3 className="text-[#333333] mb-1">{apt.patient}</h3>
                    <p className="text-sm text-gray-600">{apt.doctor} • {apt.time}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="pending" className="space-y-3 mt-4">
                {filteredAppointments.filter(a => a.status === 'pending').map((apt) => (
                  <div key={apt.id} className="p-4 bg-[#F7F9FB] rounded-lg">
                    <h3 className="text-[#333333] mb-1">{apt.patient}</h3>
                    <p className="text-sm text-gray-600">{apt.doctor} • {apt.time}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="cancelled" className="space-y-3 mt-4">
                {filteredAppointments.filter(a => a.status === 'cancelled').map((apt) => (
                  <div key={apt.id} className="p-4 bg-[#F7F9FB] rounded-lg">
                    <h3 className="text-[#333333] mb-1">{apt.patient}</h3>
                    <p className="text-sm text-gray-600">{apt.doctor} • {apt.time}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
