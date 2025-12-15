import { BarChart3, Download, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const appointmentTrends = [
  { month: 'Jun', appointments: 180 },
  { month: 'Jul', appointments: 210 },
  { month: 'Aug', appointments: 195 },
  { month: 'Sep', appointments: 240 },
  { month: 'Oct', appointments: 265 },
  { month: 'Nov', appointments: 290 },
];

const dailyAppointments = [
  { day: 'Mon', booked: 45, completed: 42, cancelled: 3 },
  { day: 'Tue', booked: 52, completed: 48, cancelled: 4 },
  { day: 'Wed', booked: 48, completed: 45, cancelled: 3 },
  { day: 'Thu', booked: 55, completed: 52, cancelled: 3 },
  { day: 'Fri', booked: 50, completed: 46, cancelled: 4 },
  { day: 'Sat', booked: 35, completed: 33, cancelled: 2 },
  { day: 'Sun', booked: 20, completed: 19, cancelled: 1 },
];

const appointmentTypes = [
  { name: 'Checkup', value: 35, color: '#2F80ED' },
  { name: 'Follow-up', value: 25, color: '#56CCF2' },
  { name: 'Consultation', value: 20, color: '#27AE60' },
  { name: 'Emergency', value: 15, color: '#F2994A' },
  { name: 'Surgery', value: 5, color: '#EB5757' },
];

const aiPerformance = [
  { month: 'Jun', callsHandled: 850, bookingSuccess: 88 },
  { month: 'Jul', callsHandled: 920, bookingSuccess: 90 },
  { month: 'Aug', callsHandled: 880, bookingSuccess: 89 },
  { month: 'Sep', callsHandled: 1050, bookingSuccess: 92 },
  { month: 'Oct', callsHandled: 1150, bookingSuccess: 93 },
  { month: 'Nov', callsHandled: 1280, bookingSuccess: 94 },
];

export function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-[#333333] mb-2">Analytics & Reports</h1>
          <p className="text-gray-600">Comprehensive insights and performance metrics</p>
        </div>
        <Button className="bg-[#2F80ED] hover:bg-[#2F80ED]/90">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl text-[#333333]">1,247</div>
              <TrendingUp className="w-5 h-5 text-[#27AE60]" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Appointments</p>
            <p className="text-xs text-[#27AE60]">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl text-[#333333]">92%</div>
              <TrendingUp className="w-5 h-5 text-[#27AE60]" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Attendance Rate</p>
            <p className="text-xs text-[#27AE60]">+3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl text-[#333333]">8%</div>
              <TrendingDown className="w-5 h-5 text-[#27AE60]" />
            </div>
            <p className="text-sm text-gray-600 mb-1">No-Show Rate</p>
            <p className="text-xs text-[#27AE60]">-2% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl text-[#333333]">85%</div>
              <TrendingUp className="w-5 h-5 text-[#27AE60]" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Clinic Utilization</p>
            <p className="text-xs text-[#27AE60]">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="appointments" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="performance">AI Performance</TabsTrigger>
          <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
        </TabsList>

        <TabsContent value="appointments" className="space-y-6 mt-6">
          {/* Appointment Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Appointment Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={appointmentTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="appointments"
                    stroke="#2F80ED"
                    strokeWidth={3}
                    dot={{ fill: '#2F80ED', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Daily Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Appointment Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dailyAppointments}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                  <XAxis dataKey="day" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Bar dataKey="booked" fill="#2F80ED" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="completed" fill="#27AE60" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="cancelled" fill="#EB5757" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#2F80ED] rounded"></div>
                  <span className="text-sm text-gray-600">Booked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#27AE60] rounded"></div>
                  <span className="text-sm text-gray-600">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#EB5757] rounded"></div>
                  <span className="text-sm text-gray-600">Cancelled</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6 mt-6">
          {/* AI Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl text-[#333333] mb-1">5,130</div>
                <p className="text-sm text-gray-600">Total Calls Handled</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl text-[#333333] mb-1">4,282</div>
                <p className="text-sm text-gray-600">Successful Bookings</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl text-[#333333] mb-1">94%</div>
                <p className="text-sm text-gray-600">Success Rate</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>AI Receptionist Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={aiPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis yAxisId="left" stroke="#666" />
                  <YAxis yAxisId="right" orientation="right" stroke="#666" />
                  <Tooltip />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="callsHandled"
                    stroke="#2F80ED"
                    strokeWidth={3}
                    dot={{ fill: '#2F80ED', r: 5 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="bookingSuccess"
                    stroke="#27AE60"
                    strokeWidth={3}
                    dot={{ fill: '#27AE60', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#2F80ED] rounded"></div>
                  <span className="text-sm text-gray-600">Calls Handled</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#27AE60] rounded"></div>
                  <span className="text-sm text-gray-600">Success Rate (%)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="breakdown" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Appointment Types */}
            <Card>
              <CardHeader>
                <CardTitle>Appointment Types Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={appointmentTypes}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {appointmentTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Doctors */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Dr. Williams', appointments: 145, rating: 4.8 },
                    { name: 'Dr. Brown', appointments: 132, rating: 4.7 },
                    { name: 'Dr. Martinez', appointments: 128, rating: 4.9 },
                    { name: 'Dr. Johnson', appointments: 118, rating: 4.6 },
                    { name: 'Dr. Davis', appointments: 95, rating: 4.5 },
                  ].map((doctor, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#F7F9FB] rounded-lg">
                      <div>
                        <p className="text-[#333333]">{doctor.name}</p>
                        <p className="text-sm text-gray-600">{doctor.appointments} appointments</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <span className="text-lg">⭐</span>
                          <span className="text-[#333333]">{doctor.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
