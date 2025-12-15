import { User, Building2, Bot, Shield, Bell, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';

export function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-[#333333] mb-2">Settings</h1>
        <p className="text-gray-600">Manage your clinic and system preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="clinic">Clinic</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
              <CardDescription>Update your personal and account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@clinic.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 555-0100" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="admin">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="receptionist">Receptionist</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-[#2F80ED] hover:bg-[#2F80ED]/90">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Clinic Settings */}
        <TabsContent value="clinic" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Clinic Information
              </CardTitle>
              <CardDescription>Manage your clinic's details and operating hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="clinicName">Clinic Name</Label>
                <Input id="clinicName" defaultValue="City Medical Center" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Health Street, Medical District" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" defaultValue="10001" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="clinicPhone">Clinic Phone</Label>
                <Input id="clinicPhone" defaultValue="+1 555-CLINIC" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hours">Operating Hours</Label>
                <Textarea 
                  id="hours" 
                  defaultValue="Monday - Friday: 8:00 AM - 6:00 PM&#10;Saturday: 9:00 AM - 2:00 PM&#10;Sunday: Closed"
                  rows={4}
                />
              </div>
              <Button className="bg-[#2F80ED] hover:bg-[#2F80ED]/90">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Settings */}
        <TabsContent value="ai" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                AI Receptionist Configuration
              </CardTitle>
              <CardDescription>Customize your AI assistant's behavior and responses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable AI Receptionist</Label>
                    <p className="text-sm text-gray-600">Allow AI to handle incoming calls and bookings</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto-Book Appointments</Label>
                    <p className="text-sm text-gray-600">AI can confirm bookings without manual approval</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Transfer Complex Calls</Label>
                    <p className="text-sm text-gray-600">Automatically transfer difficult queries to staff</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="english">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tone">Communication Tone</Label>
                <Select defaultValue="professional">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="greeting">Custom Greeting</Label>
                <Textarea 
                  id="greeting" 
                  defaultValue="Thank you for calling City Medical Center. How can I help you today?"
                  rows={3}
                />
              </div>

              <Button className="bg-[#2F80ED] hover:bg-[#2F80ED]/90">Save AI Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Manage how you receive updates and reminders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-gray-600">Receive appointment updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-gray-600">Receive text message alerts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>New Appointment Alerts</Label>
                    <p className="text-sm text-gray-600">Get notified when new appointments are booked</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Cancellation Alerts</Label>
                    <p className="text-sm text-gray-600">Get notified when appointments are cancelled</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Daily Summary</Label>
                    <p className="text-sm text-gray-600">Receive a daily summary of appointments</p>
                  </div>
                  <Switch />
                </div>
              </div>
              <Button className="bg-[#2F80ED] hover:bg-[#2F80ED]/90">Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                External Integrations
              </CardTitle>
              <CardDescription>Connect with third-party services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="text-[#333333]">Twilio</h4>
                      <p className="text-sm text-gray-600">SMS and voice call integration</p>
                    </div>
                    <Badge variant="default" className="bg-[#27AE60]">Connected</Badge>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="text-[#333333]">Google Calendar</h4>
                      <p className="text-sm text-gray-600">Sync appointments with calendar</p>
                    </div>
                    <Badge variant="secondary">Not Connected</Badge>
                  </div>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="text-[#333333]">Dialogflow</h4>
                      <p className="text-sm text-gray-600">Advanced AI conversation engine</p>
                    </div>
                    <Badge variant="default" className="bg-[#27AE60]">Connected</Badge>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="text-[#333333]">Stripe</h4>
                      <p className="text-sm text-gray-600">Payment processing</p>
                    </div>
                    <Badge variant="secondary">Not Connected</Badge>
                  </div>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security & Access Control
              </CardTitle>
              <CardDescription>Manage security settings and user permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Session Timeout</Label>
                    <p className="text-sm text-gray-600">Auto-logout after inactivity</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Change Password</Label>
                <Input id="password" type="password" placeholder="New password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm">Confirm Password</Label>
                <Input id="confirm" type="password" placeholder="Confirm new password" />
              </div>

              <div className="pt-4 border-t">
                <h4 className="mb-4">User Access Control</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Dr. Sarah Williams', role: 'Doctor', access: 'Full Access' },
                    { name: 'Mike Johnson', role: 'Receptionist', access: 'Limited Access' },
                    { name: 'Emily Brown', role: 'Admin', access: 'Full Access' },
                  ].map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#F7F9FB] rounded-lg">
                      <div>
                        <p className="text-[#333333]">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.role}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{user.access}</Badge>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-[#2F80ED] hover:bg-[#2F80ED]/90">Save Security Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Badge({ children, variant = 'default', className = '' }: { 
  children: React.ReactNode; 
  variant?: 'default' | 'secondary' | 'outline'; 
  className?: string;
}) {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs';
  const variantClasses = {
    default: 'bg-[#2F80ED] text-white',
    secondary: 'bg-gray-200 text-gray-700',
    outline: 'border border-gray-300 text-gray-700',
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
