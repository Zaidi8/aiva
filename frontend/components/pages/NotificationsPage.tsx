import { useState } from 'react';
import { Bell, Send, CheckCircle, XCircle, Clock, Filter, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const notifications = [
  {
    id: 1,
    patient: 'John Smith',
    phone: '555-0101',
    type: 'SMS',
    message: 'Reminder: Your appointment with Dr. Williams is tomorrow at 9:00 AM',
    status: 'delivered',
    sentAt: '2025-11-07 08:00 AM',
    scheduledFor: '2025-11-08 09:00 AM',
  },
  {
    id: 2,
    patient: 'Sarah Johnson',
    phone: '555-0102',
    type: 'Email',
    message: 'Your appointment has been confirmed for Nov 12 at 10:30 AM',
    status: 'delivered',
    sentAt: '2025-11-07 10:15 AM',
    scheduledFor: '2025-11-12 10:30 AM',
  },
  {
    id: 3,
    patient: 'Michael Davis',
    phone: '555-0103',
    type: 'SMS',
    message: 'Appointment rescheduled to Nov 12 at 10:00 AM. Please confirm.',
    status: 'failed',
    sentAt: '2025-11-07 11:30 AM',
    scheduledFor: '2025-11-12 10:00 AM',
  },
  {
    id: 4,
    patient: 'Emily Wilson',
    phone: '555-0104',
    type: 'SMS',
    message: 'Reminder: Your appointment is in 2 hours',
    status: 'scheduled',
    sentAt: null,
    scheduledFor: '2025-11-08 07:30 AM',
  },
  {
    id: 5,
    patient: 'David Brown',
    phone: '555-0105',
    type: 'Email',
    message: 'Thank you for visiting. Please complete our feedback survey.',
    status: 'delivered',
    sentAt: '2025-11-07 03:45 PM',
    scheduledFor: null,
  },
];

export function NotificationsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotifications = notifications.filter(notif =>
    notif.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notif.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-[#27AE60]';
      case 'failed':
        return 'bg-[#EB5757]';
      case 'scheduled':
        return 'bg-[#F2994A]';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-4 h-4" />;
      case 'failed':
        return <XCircle className="w-4 h-4" />;
      case 'scheduled':
        return <Clock className="w-4 h-4" />;
      default:
        return <Bell className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-[#333333] mb-2">Notifications & Reminders</h1>
          <p className="text-gray-600">Manage automated patient communications</p>
        </div>
        <Button className="bg-[#2F80ED] hover:bg-[#2F80ED]/90">
          <Send className="w-4 h-4 mr-2" />
          Send Manual Reminder
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl text-[#333333]">156</div>
              <CheckCircle className="w-5 h-5 text-[#27AE60]" />
            </div>
            <p className="text-sm text-gray-600">Delivered Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl text-[#333333]">23</div>
              <Clock className="w-5 h-5 text-[#F2994A]" />
            </div>
            <p className="text-sm text-gray-600">Scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl text-[#333333]">4</div>
              <XCircle className="w-5 h-5 text-[#EB5757]" />
            </div>
            <p className="text-sm text-gray-600">Failed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl text-[#333333]">97%</div>
              <TrendingUp className="w-5 h-5 text-[#27AE60]" />
            </div>
            <p className="text-sm text-gray-600">Success Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Notifications List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              All Notifications
            </CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search notifications..."
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
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="failed">Failed</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-3 mt-4">
              {filteredNotifications.map((notif) => (
                <div
                  key={notif.id}
                  className="p-4 bg-[#F7F9FB] rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-[#333333]">{notif.patient}</h4>
                        <Badge variant="outline">{notif.type}</Badge>
                        <Badge className={getStatusColor(notif.status)}>
                          {getStatusIcon(notif.status)}
                          <span className="ml-1 capitalize">{notif.status}</span>
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{notif.message}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>To: {notif.phone}</span>
                        {notif.sentAt && <span>Sent: {notif.sentAt}</span>}
                        {notif.scheduledFor && <span>For: {notif.scheduledFor}</span>}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {notif.status === 'failed' && (
                        <Button variant="outline" size="sm">
                          Retry
                        </Button>
                      )}
                      {notif.status === 'scheduled' && (
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="delivered" className="space-y-3 mt-4">
              {filteredNotifications
                .filter((n) => n.status === 'delivered')
                .map((notif) => (
                  <div key={notif.id} className="p-4 bg-[#F7F9FB] rounded-lg">
                    <h4 className="text-[#333333] mb-1">{notif.patient}</h4>
                    <p className="text-sm text-gray-600">{notif.message}</p>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="scheduled" className="space-y-3 mt-4">
              {filteredNotifications
                .filter((n) => n.status === 'scheduled')
                .map((notif) => (
                  <div key={notif.id} className="p-4 bg-[#F7F9FB] rounded-lg">
                    <h4 className="text-[#333333] mb-1">{notif.patient}</h4>
                    <p className="text-sm text-gray-600">{notif.message}</p>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="failed" className="space-y-3 mt-4">
              {filteredNotifications
                .filter((n) => n.status === 'failed')
                .map((notif) => (
                  <div key={notif.id} className="p-4 bg-[#F7F9FB] rounded-lg">
                    <h4 className="text-[#333333] mb-1">{notif.patient}</h4>
                    <p className="text-sm text-gray-600">{notif.message}</p>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
