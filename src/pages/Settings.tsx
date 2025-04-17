
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export default function Settings() {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500">Configure your support platform</p>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="channels">Channels</TabsTrigger>
          <TabsTrigger value="automation">AI & Automation</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="Acme Corp" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="https://acmecorp.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-hours">Business Hours</Label>
                <Input id="business-hours" defaultValue="Mon-Fri, 9:00 AM - 5:00 PM EST" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Support Settings</CardTitle>
              <CardDescription>Configure your support system preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Automatic Ticket Assignments</p>
                  <p className="text-sm text-gray-500">Enable automatic assignment of new tickets to agents</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Customer Satisfaction Survey</p>
                  <p className="text-sm text-gray-500">Send surveys after ticket resolution</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SLA Monitoring</p>
                  <p className="text-sm text-gray-500">Track and alert on SLA breaches</p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="channels" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Integration</CardTitle>
              <CardDescription>Connect your WhatsApp Business API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="whatsapp-token">API Token</Label>
                <Input id="whatsapp-token" type="password" value="••••••••••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp-number">Phone Number</Label>
                <Input id="whatsapp-number" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Active</p>
                  <p className="text-sm text-gray-500">Enable WhatsApp messaging</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Facebook Messenger</CardTitle>
              <CardDescription>Connect your Facebook Page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fb-page-id">Page ID</Label>
                <Input id="fb-page-id" defaultValue="123456789012345" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fb-token">Access Token</Label>
                <Input id="fb-token" type="password" value="••••••••••••••••" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Active</p>
                  <p className="text-sm text-gray-500">Enable Messenger integration</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>In-App Chat Widget</CardTitle>
              <CardDescription>Configure your website chat widget</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="chat-welcome">Welcome Message</Label>
                <Textarea 
                  id="chat-welcome" 
                  defaultValue="Hi there! 👋 How can we help you today?"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="chat-color">Primary Color</Label>
                  <Input id="chat-color" defaultValue="#3b82f6" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="chat-position">Widget Position</Label>
                  <select 
                    id="chat-position" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    defaultValue="bottom-right"
                  >
                    <option value="bottom-right">Bottom Right</option>
                    <option value="bottom-left">Bottom Left</option>
                    <option value="top-right">Top Right</option>
                    <option value="top-left">Top Left</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Active</p>
                  <p className="text-sm text-gray-500">Enable in-app chat widget</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="automation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Assistant</CardTitle>
              <CardDescription>Configure your AI-powered response system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ai-model">AI Model</Label>
                <select 
                  id="ai-model" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  defaultValue="gpt-4o"
                >
                  <option value="gpt-4o">GPT-4o</option>
                  <option value="gpt-4o-mini">GPT-4o Mini</option>
                  <option value="claude-3-opus">Claude 3 Opus</option>
                  <option value="claude-3-sonnet">Claude 3 Sonnet</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ai-prompt">System Prompt</Label>
                <Textarea 
                  id="ai-prompt" 
                  defaultValue="You are a helpful customer support assistant. Be polite, concise, and solve the customer's problem effectively."
                  rows={4}
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Automatic Response Suggestions</p>
                    <p className="text-sm text-gray-500">Generate responses for agents to review</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-respond to Common Questions</p>
                    <p className="text-sm text-gray-500">Automatically reply to frequently asked questions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">AI Ticket Categorization</p>
                    <p className="text-sm text-gray-500">Automatically categorize incoming tickets</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Automated Workflows</CardTitle>
              <CardDescription>Set up automated processes for common scenarios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Order Status Inquiries</h3>
                    <Switch defaultChecked />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Automatically detect order status questions and provide tracking information</p>
                  <Badge>Active</Badge>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Return Request Processing</h3>
                    <Switch defaultChecked />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Generate return labels and instructions for return requests</p>
                  <Badge>Active</Badge>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Technical Support Triage</h3>
                    <Switch defaultChecked />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Categorize technical issues and assign to appropriate specialists</p>
                  <Badge>Active</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">Add Workflow</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Configure email notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Ticket Notifications</p>
                  <p className="text-sm text-gray-500">Receive emails when new tickets are created</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Ticket Assignment</p>
                  <p className="text-sm text-gray-500">Notify agents when tickets are assigned to them</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Ticket Updates</p>
                  <p className="text-sm text-gray-500">Notify when tickets are updated</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SLA Breach Warnings</p>
                  <p className="text-sm text-gray-500">Notify before SLA deadlines are missed</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Slack Integration</CardTitle>
              <CardDescription>Configure Slack notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="slack-webhook">Webhook URL</Label>
                <Input id="slack-webhook" defaultValue="https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slack-channel">Default Channel</Label>
                <Input id="slack-channel" defaultValue="#support" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Urgent Ticket Alerts</p>
                  <p className="text-sm text-gray-500">Send notifications for high-priority tickets</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Daily Summary</p>
                  <p className="text-sm text-gray-500">Send daily ticket summary to Slack</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>CRM Integration</CardTitle>
              <CardDescription>Connect with your customer relationship management system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="crm-provider">CRM Provider</Label>
                <select 
                  id="crm-provider" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  defaultValue="salesforce"
                >
                  <option value="salesforce">Salesforce</option>
                  <option value="hubspot">HubSpot</option>
                  <option value="zoho">Zoho CRM</option>
                  <option value="zendesk">Zendesk</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="crm-api-key">API Key</Label>
                <Input id="crm-api-key" type="password" value="••••••••••••••••" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-way Sync</p>
                  <p className="text-sm text-gray-500">Sync data between systems</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Connect CRM</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Connect to your knowledge base for AI-assisted responses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="kb-provider">Knowledge Base Provider</Label>
                <select 
                  id="kb-provider" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  defaultValue="zendesk"
                >
                  <option value="zendesk">Zendesk Guide</option>
                  <option value="helpscout">Help Scout</option>
                  <option value="freshdesk">Freshdesk</option>
                  <option value="custom">Custom API</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="kb-url">API URL</Label>
                <Input id="kb-url" defaultValue="https://company.zendesk.com/api/v2/" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kb-api-key">API Key</Label>
                <Input id="kb-api-key" type="password" value="••••••••••••••••" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable AI-powered Suggestions</p>
                  <p className="text-sm text-gray-500">Use knowledge base content for response suggestions</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Connect Knowledge Base</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Analytics Integration</CardTitle>
              <CardDescription>Connect with analytics providers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Google Analytics</h3>
                  <Switch defaultChecked />
                </div>
                <p className="text-sm text-gray-500">Track support metrics in Google Analytics</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Mixpanel</h3>
                  <Switch />
                </div>
                <p className="text-sm text-gray-500">Track customer behavior with Mixpanel</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Amplitude</h3>
                  <Switch />
                </div>
                <p className="text-sm text-gray-500">Track user engagement with Amplitude</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
}
