import { Calendar, Clock, XCircle, ThumbsUp, Plus, MessageSquare, TrendingUp, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const satisfactionData = [
  { day: 'Mon', score: 4.2 },
  { day: 'Tue', score: 4.5 },
  { day: 'Wed', score: 4.3 },
  { day: 'Thu', score: 4.7 },
  { day: 'Fri', score: 4.6 },
  { day: 'Sat', score: 4.4 },
  { day: 'Sun', score: 4.8 },
];

const recentAppointments = [
  { id: 1, patient: 'John Smith', time: '09:00 AM', doctor: 'Dr. Williams', status: 'confirmed' },
  { id: 2, patient: 'Sarah Johnson', time: '10:30 AM', doctor: 'Dr. Brown', status: 'pending' },
  { id: 3, patient: 'Michael Davis', time: '02:00 PM', doctor: 'Dr. Williams', status: 'confirmed' },
  { id: 4, patient: 'Emily Wilson', time: '03:30 PM', doctor: 'Dr. Martinez', status: 'completed' },
];

export function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-[#333333] mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-l-4 border-l-[#2F80ED]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Today's Appointments</CardTitle>
            <Calendar className="w-5 h-5 text-[#2F80ED]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-[#333333]">24</div>
            <p className="text-sm text-gray-600 mt-1">+3 from yesterday</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#F2994A]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Pending Approvals</CardTitle>
            <Clock className="w-5 h-5 text-[#F2994A]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-[#333333]">7</div>
            <p className="text-sm text-gray-600 mt-1">Requires attention</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#EB5757]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Cancellations</CardTitle>
            <XCircle className="w-5 h-5 text-[#EB5757]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-[#333333]">3</div>
            <p className="text-sm text-gray-600 mt-1">Today</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#27AE60]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Patient Satisfaction</CardTitle>
            <ThumbsUp className="w-5 h-5 text-[#27AE60]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-[#333333]">4.6</div>
            <p className="text-sm text-gray-600 mt-1">Average rating</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Status & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#2F80ED]" />
              AI Receptionist Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#27AE60] rounded-full animate-pulse"></div>
                <span className="text-lg">Online & Active</span>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#F7F9FB] rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Calls Handled Today</p>
                <p className="text-2xl text-[#333333]">47</p>
              </div>
              <div className="bg-[#F7F9FB] rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Bookings Made</p>
                <p className="text-2xl text-[#333333]">32</p>
              </div>
              <div className="bg-[#F7F9FB] rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Success Rate</p>
                <p className="text-2xl text-[#333333]">94%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-[#2F80ED] hover:bg-[#2F80ED]/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Appointment
            </Button>
            <Button className="w-full" variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Patient
            </Button>
            <Button className="w-full" variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Recent Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Patient Satisfaction Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={satisfactionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis domain={[0, 5]} stroke="#666" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#27AE60" 
                  strokeWidth={3}
                  dot={{ fill: '#27AE60', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAppointments.map((apt) => (
                <div key={apt.id} className="flex items-center justify-between p-3 bg-[#F7F9FB] rounded-lg">
                  <div>
                    <p className="text-[#333333]">{apt.patient}</p>
                    <p className="text-sm text-gray-600">{apt.doctor} • {apt.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    apt.status === 'confirmed' ? 'bg-[#27AE60]/10 text-[#27AE60]' :
                    apt.status === 'pending' ? 'bg-[#F2994A]/10 text-[#F2994A]' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {apt.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
