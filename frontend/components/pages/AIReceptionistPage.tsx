import { useState } from 'react';
import { Bot, Phone, MessageSquare, TrendingUp, Activity, PlayCircle, PauseCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ScrollArea } from '../ui/scroll-area';

const callLogs = [
  {
    id: 1,
    caller: 'John Smith',
    phone: '555-0101',
    time: '10:45 AM',
    duration: '3:24',
    type: 'booking',
    status: 'success',
    summary: 'Booked appointment for Nov 15 with Dr. Williams',
  },
  {
    id: 2,
    caller: 'Sarah Johnson',
    phone: '555-0102',
    time: '10:30 AM',
    duration: '2:15',
    type: 'inquiry',
    status: 'success',
    summary: 'Provided clinic hours and location information',
  },
  {
    id: 3,
    caller: 'Michael Davis',
    phone: '555-0103',
    time: '10:15 AM',
    duration: '4:10',
    type: 'reschedule',
    status: 'success',
    summary: 'Rescheduled appointment from Nov 10 to Nov 12',
  },
  {
    id: 4,
    caller: 'Emily Wilson',
    phone: '555-0104',
    time: '09:50 AM',
    duration: '1:45',
    type: 'cancellation',
    status: 'transferred',
    summary: 'Transferred to staff for complex cancellation',
  },
];

const conversations = [
  {
    id: 1,
    speaker: 'AI',
    message: 'Good morning! Thank you for calling City Medical Center. How can I help you today?',
    time: '10:45:00',
  },
  {
    id: 2,
    speaker: 'Patient',
    message: 'Hi, I would like to book an appointment with Dr. Williams.',
    time: '10:45:05',
  },
  {
    id: 3,
    speaker: 'AI',
    message: 'Of course! I can help you with that. What date and time would work best for you?',
    time: '10:45:08',
  },
  {
    id: 4,
    speaker: 'Patient',
    message: 'Do you have any availability next Friday morning?',
    time: '10:45:15',
  },
  {
    id: 5,
    speaker: 'AI',
    message: 'Let me check... Yes, I have 9:00 AM and 10:30 AM available next Friday, November 15th. Which would you prefer?',
    time: '10:45:18',
  },
  {
    id: 6,
    speaker: 'Patient',
    message: '9:00 AM works perfectly for me.',
    time: '10:45:25',
  },
  {
    id: 7,
    speaker: 'AI',
    message: 'Perfect! I have booked you for 9:00 AM on Friday, November 15th with Dr. Williams. You will receive a confirmation via SMS. Is there anything else I can help you with?',
    time: '10:45:28',
  },
];

export function AIReceptionistPage() {
  const [aiStatus, setAiStatus] = useState<'online' | 'offline'>('online');

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-[#333333] mb-2">AI Receptionist</h1>
          <p className="text-gray-600">Monitor and manage AI-powered patient interactions</p>
        </div>
        <Button
          variant={aiStatus === 'online' ? 'destructive' : 'default'}
          onClick={() => setAiStatus(aiStatus === 'online' ? 'offline' : 'online')}
          className={aiStatus === 'offline' ? 'bg-[#27AE60] hover:bg-[#27AE60]/90' : ''}
        >
          {aiStatus === 'online' ? (
            <>
              <PauseCircle className="w-4 h-4 mr-2" />
              Stop AI
            </>
          ) : (
            <>
              <PlayCircle className="w-4 h-4 mr-2" />
              Start AI
            </>
          )}
        </Button>
      </div>

      {/* Status Card */}
      <Card className="mb-8 border-l-4 border-l-[#2F80ED]">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2F80ED] to-[#56CCF2] rounded-2xl flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl text-[#333333]">AI Receptionist Status</h2>
                  <Badge
                    variant={aiStatus === 'online' ? 'default' : 'secondary'}
                    className={aiStatus === 'online' ? 'bg-[#27AE60]' : ''}
                  >
                    {aiStatus === 'online' ? (
                      <>
                        <Activity className="w-3 h-3 mr-1 animate-pulse" />
                        Online
                      </>
                    ) : (
                      'Offline'
                    )}
                  </Badge>
                </div>
                <p className="text-gray-600">
                  {aiStatus === 'online'
                    ? 'Actively handling patient calls and inquiries'
                    : 'AI receptionist is currently disabled'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl text-[#333333] mb-1">47</div>
                <p className="text-sm text-gray-600">Calls Today</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#333333] mb-1">32</div>
                <p className="text-sm text-gray-600">Bookings Made</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-[#333333] mb-1">94%</div>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Call Logs */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Recent Call Logs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="booking">Bookings</TabsTrigger>
                <TabsTrigger value="inquiry">Inquiries</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-3 mt-4">
                <ScrollArea className="h-[500px] pr-4">
                  {callLogs.map((log) => (
                    <div
                      key={log.id}
                      className="p-4 bg-[#F7F9FB] rounded-lg mb-3 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-[#333333]">{log.caller}</h4>
                          <p className="text-sm text-gray-600">{log.phone}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">{log.time}</p>
                          <p className="text-sm text-gray-500">{log.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{log.type}</Badge>
                        <Badge
                          variant={log.status === 'success' ? 'default' : 'secondary'}
                          className={log.status === 'success' ? 'bg-[#27AE60]' : ''}
                        >
                          {log.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700">{log.summary}</p>
                      <Button variant="outline" size="sm" className="mt-3">
                        View Full Conversation
                      </Button>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>

              <TabsContent value="booking">
                <p className="text-center text-gray-600 py-8">Booking calls only</p>
              </TabsContent>

              <TabsContent value="inquiry">
                <p className="text-center text-gray-600 py-8">Inquiry calls only</p>
              </TabsContent>

              <TabsContent value="other">
                <p className="text-center text-gray-600 py-8">Other call types</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Conversation Preview & Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Today's Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Calls</span>
                <span className="text-[#333333]">47</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Successful</span>
                <span className="text-[#27AE60]">44</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Transferred</span>
                <span className="text-[#F2994A]">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg Duration</span>
                <span className="text-[#333333]">2:45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Bookings Made</span>
                <span className="text-[#333333]">32</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Success Rate</span>
                <span className="text-[#27AE60]">94%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Sample Conversation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[350px] pr-4">
                <div className="space-y-3">
                  {conversations.map((conv) => (
                    <div
                      key={conv.id}
                      className={`flex ${conv.speaker === 'AI' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg p-3 ${
                          conv.speaker === 'AI'
                            ? 'bg-[#2F80ED]/10 text-[#333333]'
                            : 'bg-[#27AE60]/10 text-[#333333]'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium">{conv.speaker}</span>
                          <span className="text-xs text-gray-500">{conv.time}</span>
                        </div>
                        <p className="text-sm">{conv.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <Button variant="outline" className="w-full mt-4">
                Take Over Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
